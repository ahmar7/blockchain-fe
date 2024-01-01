import React, { useEffect, useState } from "react";
import SideBar from "../../layout/UserSidebar/SideBar";
import { useAuthUser } from "react-auth-kit";
import "./Dashboard.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  getCoinsApi,
  getCoinsUserApi,
  getHtmlDataApi,
  getsignUserApi,
} from "../../Api/Service";
import chartGuy from "../../assets/img/11.png";
import btcLogo from "../../assets/img/btc-logo.svg";
import ethLogo from "../../assets/img/ethereum-logo.svg";
import redArrow from "../../assets/img/re-arriw.svg";
import usdtLogo from "../../assets/img/usdt-logo.svg";
import { toast } from "react-toastify";
import Truncate from "react-truncate-inside";
import UserHeader from "./UserHeader";
import LineChart from "./LivePriceChart";
import axios from "axios";
import CryptoMarketWidget from "../Widgets/CryptoMarketWidget";
import StaticCoin from "../Widgets/staticCoins";
import CoinGeckoConverterWidget from "../Widgets/CoinConverter";
import BtcTab from "../Widgets/BtcTab";
import TradingViewTickerTapeWidget from "../Widgets/CoinCarousel";
import EthTab from "../Widgets/EthTab";
import BnbTab from "../Widgets/BnbTab";
import UsdTab from "../Widgets/UsdEurTab";
const Dashboard = () => {
  const authUser = useAuthUser();
  const Navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [isUser, setIsUser] = useState([]);
  const [Description, setDescription] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [UserData, setUserData] = useState(true);
  const [totalBalance, settotalBalance] = useState("$0");
  const [fractionBalance, setfractionBalance] = useState("00");

  const [singleTransaction, setsingleTransaction] = useState();
  const [UserTransactions, setUserTransactions] = useState([]);
  const [btcBalance, setbtcBalance] = useState(0);

  const [ethBalance, setethBalance] = useState(0);
  const [usdtBalance, setusdtBalance] = useState(0);
  const [Active, setActive] = useState(false);
  let toggleBar = () => {
    if (Active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  const getCoins = async (data) => {
    let id = data._id;
    try {
      const userCoins = await getCoinsUserApi(id);

      if (userCoins.success) {
        setUserData(userCoins.getCoin);
        // setUserTransactions;

        setUserTransactions(
          userCoins.getCoin.transactions.reverse().slice(0, 5)
        );
        setisLoading(false);
        // tx
        const btc = userCoins.getCoin.transactions.filter((transaction) =>
          transaction.trxName.includes("bitcoin")
        );
        const btccomplete = btc.filter((transaction) =>
          transaction.status.includes("completed")
        );
        let btcCount = 0;
        let btcValueAdded = 0;
        for (let i = 0; i < btccomplete.length; i++) {
          const element = btccomplete[i];
          btcCount = element.amount;
          btcValueAdded += btcCount;
        }
        setbtcBalance(btcValueAdded);
        // tx
        // tx
        const eth = userCoins.getCoin.transactions.filter((transaction) =>
          transaction.trxName.includes("ethereum")
        );
        const ethcomplete = eth.filter((transaction) =>
          transaction.status.includes("completed")
        );
        let ethCount = 0;
        let ethValueAdded = 0;
        for (let i = 0; i < ethcomplete.length; i++) {
          const element = ethcomplete[i];
          ethCount = element.amount;
          ethValueAdded += ethCount;
        }
        setethBalance(ethValueAdded);
        // tx
        // tx
        const usdt = userCoins.getCoin.transactions.filter((transaction) =>
          transaction.trxName.includes("tether")
        );
        const usdtcomplete = usdt.filter((transaction) =>
          transaction.status.includes("completed")
        );
        let usdtCount = 0;
        let usdtValueAdded = 0;
        for (let i = 0; i < usdtcomplete.length; i++) {
          const element = usdtcomplete[i];
          usdtCount = element.amount;
          usdtValueAdded += usdtCount;
        }
        setusdtBalance(usdtValueAdded);
        // tx

        const totalValue = (
          btcValueAdded * 42087.57 +
          ethValueAdded * 2241.86 +
          usdtValueAdded
        ).toFixed(2);

        //
        const [integerPart, fractionalPart] = totalValue.split(".");

        const formattedTotalValue = parseFloat(integerPart).toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }
        );

        //
        setfractionBalance(fractionalPart);
        settotalBalance(formattedTotalValue);
        return;
      } else {
        toast.dismiss();
        toast.error(userCoins.msg);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error);
    } finally {
    }
  };

  const getsignUser = async () => {
    try {
      const formData = new FormData();
      formData.append("id", authUser().user._id);
      const userCoins = await getsignUserApi(formData);

      if (userCoins.success) {
        setIsUser(userCoins.signleUser);

        setisLoading(false);

        return;
      } else {
        toast.dismiss();
        toast.error(userCoins.msg);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error);
    } finally {
    }
  };
  const getHtmlData = async () => {
    console.log("description: ");
    try {
      const description = await getHtmlDataApi();

      if (description.success) {
        setDescription(description.description[0].description);

        return;
      } else {
        toast.dismiss();
        toast.error(description.msg);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error);
    } finally {
    }
  };
  let toggleModal = async (data) => {
    setModal(true);

    setsingleTransaction(data);
  };
  let toggleModalClose = () => {
    setModal(false);
  };

  useEffect(() => {
    getsignUser();
    getHtmlData();
    //

    //
    if (authUser().user.role === "user") {
      // setIsUser(authUser().user);

      getCoins(authUser().user);

      return;
    } else if (authUser().user.role === "admin") {
      Navigate("/admin/dashboard");
      return;
    }
  }, []);
  //
  const [btcData, setBtcData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: "30",
              // Adjust the number of days as needed
            },
          }
        );

        const prices = response.data.prices;

        const chartData = {
          labels: prices.map((price) =>
            new Date(price[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: "BTC Price",
              data: prices.map((price) => price[1]),
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        };

        setBtcData(chartData);
      } catch (error) {
        console.error("Error fetching BTC data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="dark user-bg">
      <div>
        <div className="  pb-20">
          <SideBar state={Active} toggle={toggleBar} />
          <button
            onClick={toggleBar}
            type="button"
            className="flex for-mbl h-10 w-10 items-center justify-center mb- -ms-3 abspain"
          >
            <div className="relative h-5 w-5">
              <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-0.5 top-0.5" />
              <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300" />
              <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-0 bottom-0" />
            </div>
          </button>
          <div className=" relative min-h-screen w-full fall overflow-x-hidden pe-4 transition-all duration-300 xl:px-10 lg:max-w-[calc(100%_-_250px)] lg:ms-[250px]">
            {/* <div className="mx-auto w-full max-w-7xl"> */}
            <div className="mx-auto w-full ">
              {/* <UserHeader /> */}
              <div
                className="nuxt-loading-indicator"
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  left: "0px",
                  pointerEvents: "none",
                  width: "auto",
                  height: "3px",
                  opacity: 0,
                  background: "var(--color-primary-500)",
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                  transition:
                    "transform 0.1s ease 0s, height 0.4s ease 0s, opacity 0.4s ease 0s",
                  zIndex: 999999,
                }}
              ></div>
              <div className="ptbg">
                <div className="mb-6 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-alt text-sm font-normal leading-normal leading-normal text-white dark:text-white">
                      Total Balance
                    </p>
                    <p className="font-heading text-xl flexsa leading-normal leading-normal text-muted-800 dark:text-white">
                      <span className="anm  after:relative after:-end-2 after:-top-3 after:text-sm">
                        {totalBalance}
                        <span className="choti">.{fractionBalance}</span>
                        <span className="text-muted-500 dark:text-muted-400" />
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <TradingViewTickerTapeWidget />
                </div>
                <br />
                {isUser.note ? (
                  <div
                    className="mb-6 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center"
                    style={{ display: "block" }}
                  >
                    <div>
                      <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400">
                        {isUser.note === "" ? (
                          ""
                        ) : (
                          <div
                            className="htmData"
                            dangerouslySetInnerHTML={{ __html: isUser.note }}
                          />
                        )}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="line-22">
                  {/* <StaticCoin /> */}
                  <div className="s-tb">
                    <BtcTab />
                  </div>
                  <div className="s-tb">
                    <EthTab />
                  </div>
                  <div className="s-tb">
                    <BnbTab />
                  </div>
                  <div className="s-tb">
                    <UsdTab />
                  </div>
                </div>
                <br />
                <div className="grid grid-cols-12 gap-4">
                  <div className="ltablet:col-span-8 col-span-12 gap-4 lg:col-span-8">
                    {isUser.submitDoc &&
                    isUser.submitDoc.status === "pending" ? (
                      <div className="flex mb-5 flex-col gap-4 line-bg">
                        <div className="  relative w-full   transition-all duration-300 rounded-md p-4">
                          <div>
                            <img
                              src={chartGuy}
                              className="block imgtu dark:hidden mx-auto"
                              alt="Placeholder illustration"
                            />
                            <img
                              src={chartGuy}
                              className="hidden dark:block imgtu mx-auto"
                              alt="Placeholder illustration"
                            />
                            <div className="mt-4 text-center">
                              <h4 className="font-heading text-lg font-light leading-tight text-muted-800 mb-1 dark:text-white">
                                <span>
                                  Verify Your Identity for Enhanced Security
                                </span>
                              </h4>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal px-12" />
                              <p className="text-muted-500 dark:text-muted-400">
                                <span>
                                  Welcome to our KYC (Know Your Customer)
                                  process! We prioritize the safety and security
                                  of our platform and aim to ensure a seamless
                                  experience for our users. The KYC process is a
                                  crucial step in maintaining a secure
                                  environment and complying with regulatory
                                  standards.
                                </span>
                              </p>
                              <p />
                              <div className="flexasa">
                                <div>
                                  <i class="fa-solid fa-circle-xmark"></i>
                                </div>
                                <div>
                                  <p className="text-danger bld">
                                    Identity Verification
                                  </p>
                                  <p className="text-danger lte">
                                    In order to activate the wallet, you are
                                    requried to complete your identification
                                    process
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <NavLink
                                  to="/flows/kyc"
                                  data-v-71bb21a6
                                  className="mxcon is-button rounded bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 w-full sm:mt-3"
                                  disabled="false"
                                >
                                  <span>Start KYC</span>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="line-bg">
                      <LineChart data={btcData} />
                    </div>
                    <br />
                    <CryptoMarketWidget />
                  </div>

                  <div className="ltablet:col-span-4 col-span-12 lg:col-span-4">
                    <div className="relative  ">
                      <div className="line-bg3 relative w-full  bg-white transition-all duration-300 rounded-md p-6">
                        <div className="mb-8 flex items-center justify-between">
                          <h3 className="font-heading text-base font-semibold leading-tight text-muted-800 dark:text-white">
                            <span>Transactions</span>
                          </h3>
                          <Link
                            to={`/transactions/${isUser._id}`}
                            className="  text-white rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                          >
                            View All{" "}
                          </Link>
                        </div>
                        <div className="grid gap-4 grid-cols-1">
                          {UserTransactions &&
                            UserTransactions.map((Transaction, index) => (
                              <div
                                className="newtx cursor-pointer"
                                onClick={() => toggleModal(Transaction)}
                              >
                                <div className="logo-sec">
                                  {Transaction.trxName === "bitcoin" ? (
                                    <img src={btcLogo} alt="" />
                                  ) : Transaction.trxName === "ethereum" ? (
                                    <img src={ethLogo} alt="" />
                                  ) : Transaction.trxName === "tether" ? (
                                    <img src={usdtLogo} alt="" />
                                  ) : (
                                    ""
                                  )}
                                  <p className="txt capitalize">
                                    {" "}
                                    {Transaction.trxName}
                                  </p>
                                  {Transaction.type === "withdraw" ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      stroke="red"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{
                                        color: "red",
                                        boxShadow:
                                          "5px 5px 10px rgba(0, 0, 0, 0.5)",
                                      }}
                                    >
                                      <path
                                        d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"
                                        fill="red"
                                      />
                                    </svg>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="price-sec">
                                  {`$ ${
                                    Transaction.trxName === "bitcoin"
                                      ? (
                                          Transaction.amount * 42087.57
                                        ).toLocaleString(undefined, {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        })
                                      : Transaction.trxName === "ethereum"
                                      ? (
                                          Transaction.amount * 2241.86
                                        ).toLocaleString(undefined, {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        })
                                      : Transaction.trxName === "tether"
                                      ? Transaction.amount.toLocaleString(
                                          undefined,
                                          {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }
                                        )
                                      : (0).toLocaleString(undefined, {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        })
                                  }`}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="line-bg">
                      <iframe
                        className="if-2"
                        id="iframe-widget"
                        src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=0.1&amountFiat=1500&backgroundColor=000000&darkMode=true&from=btc&fromFiat=eur&horizontal=false&isFiat=false&lang=en-US&link_id=551794e22f65b4&locales=true&logo=false&primaryColor=8b5cf6&to=eth&toFiat=eth&toTheMoon=false"
                      ></iframe>
                      <script
                        defer
                        type="text/javascript"
                        src="https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js"
                      ></script>
                    </div>
                    {/* <div className="flex flex-col gap-4">
                      <div className="relative">
                        <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md p-6">
                          <div className="mb-8 flex items-center justify-between">
                            <h3 className="font-heading text-base font-semibold leading-tight text-muted-800 dark:text-white">
                              <span>My Assets</span>
                            </h3>
                            <NavLink
                              to="/assets"
                              className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                            >
                              View All
                            </NavLink>
                          </div>
                          {!isLoading && (
                            <div className="mb-2 space-y-5">
                              <div className="flex items-center gap-3">
                                <div className="border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border">
                                  <svg
                                    data-v-cd102a71
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="icon text-muted-400 h-6 w-6"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      fill="currentColor"
                                      fillRule="evenodd"
                                      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84c.472.127.93.245 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538m-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11m.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733"
                                    ></path>
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white">
                                    <span>Bitcoin Wallet</span>
                                  </h4>
                                  <p className="font-alt text-xs font-normal leading-normal leading-normal">
                                    <span className="text-muted-400">
                                      {btcBalance.toFixed(8)} BTC
                                    </span>
                                  </p>
                                </div>
                                <div className="ms-auto flex items-center">
                                  <Link
                                    to="/assets"
                                    className="disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75"
                                    disabled="false"
                                    muted
                                  >
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon h-5 w-5"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14m-7-7l7 7l-7 7"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border">
                                  <svg
                                    data-v-cd102a71
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="icon text-muted-400 h-6 w-6"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 32 32"
                                  >
                                    <g fill="currentColor" fillRule="evenodd">
                                      <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m7.994-15.781L16.498 4L9 16.22l7.498 4.353zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378z"></path>
                                      <g fillRule="nonzero">
                                        <path
                                          fillOpacity=".298"
                                          d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"
                                        ></path>
                                        <path
                                          fillOpacity=".801"
                                          d="m16.498 20.573l7.497-4.353l-7.497-3.348z"
                                        ></path>
                                        <path
                                          fillOpacity=".298"
                                          d="m9 16.22l7.498 4.353v-7.701z"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white">
                                    <span>Ethereum Wallet</span>
                                  </h4>
                                  <p className="font-alt text-xs font-normal leading-normal leading-normal">
                                    <span className="text-muted-400">
                                      {ethBalance.toFixed(8)} ETH
                                    </span>
                                  </p>
                                </div>
                                <div className="ms-auto flex items-center">
                                  <Link
                                    to="/assets"
                                    className="disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75"
                                    disabled="false"
                                    muted
                                  >
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon h-5 w-5"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14m-7-7l7 7l-7 7"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border">
                                  <svg
                                    data-v-cd102a71
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="icon text-muted-400 h-6 w-6"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      fill="currentColor"
                                      fillRule="evenodd"
                                      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118c0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116c0-1.043-3.301-1.914-7.694-2.117m0 3.59v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658c0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657"
                                    ></path>
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-heading text-xs font-semibold leading-tight text-muted-800 dark:text-white">
                                    <span>Tether Wallet</span>
                                  </h4>
                                  <p className="font-alt text-xs font-normal leading-normal leading-normal">
                                    <span className="text-muted-400">
                                      {usdtBalance.toFixed(8)} USDT
                                    </span>
                                  </p>
                                </div>
                                <div className="ms-auto flex items-center">
                                  <Link
                                    to="/assets"
                                    className="disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-xl h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 scale-75"
                                    disabled="false"
                                    muted
                                  >
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon h-5 w-5"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14m-7-7l7 7l-7 7"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div> */}
                  </div>

                  {/**/}
                </div>
                <br />
                {Description === "" ? (
                  ""
                ) : (
                  <div
                    className="htmData"
                    dangerouslySetInnerHTML={{ __html: Description }}
                  />
                )}
              </div>
              {/**/}
            </div>
          </div>
          <div>
            {/**/}
            <div className="bg-muted-800/60 fixed start-0 top-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300 opacity-0 pointer-events-none"></div>
          </div>
          <div className="after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed right-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:right-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-[''] -translate-y-24">
            <button
              type="button"
              className="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
            >
              <span className="relative block h-3 w-3 transition-all duration-300 -top-0.5">
                <span className="bg-muted-50 absolute block h-0.5 w-full transition-all duration-300 top-0.5" />
                <span className="bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300" />
                <span className="bg-muted-50 absolute block h-0.5 w-full transition-all duration-300 bottom-0" />
              </span>
            </button>
            <div>
              <div className="absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300 translate-x-0 translate-y-0">
                <label className="nui-focus relative block h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-2 ring-offset-muted-500 dark:ring-offset-muted-400 ms-auto">
                  <input
                    type="checkbox"
                    className="absolute start-0 top-0 z-[2] h-full w-full cursor-pointer opacity-0"
                  />
                  <span className="relative block h-9 w-9 rounded-full bg-primary-700">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300 -translate-y-1/2 translate-x-[-50%] opacity-100 rtl:translate-x-[50%]"
                    >
                      <g
                        fill="currentColor"
                        stroke="currentColor"
                        className="stroke-2"
                      >
                        <circle cx={12} cy={12} r={5} />
                        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                      </g>
                    </svg>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300 translate-x-[-45%] translate-y-[-150%] opacity-0 rtl:translate-x-[45%]"
                    >
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        className="stroke-2"
                      />
                    </svg>
                  </span>
                </label>
              </div>
              <div className="absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300 translate-x-0 translate-y-0">
                <button
                  type="button"
                  className="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
                >
                  <img
                    className="h-7 w-7 rounded-full"
                    src="https://app.encryptwallet.io/img/langs/en.svg"
                    alt="flag icon"
                  />
                </button>
              </div>
              <div className="absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300 translate-x-0 translate-y-0">
                <a
                  aria-current="page"
                  href="/#"
                  className="router-link-active router-link-exact-active inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
                >
                  <span className="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full">
                    <svg
                      data-v-cd102a71
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon h-5 w-5 text-white"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <g fill="currentColor">
                        <path
                          d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12"
                          opacity=".2"
                        />
                        <path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300 translate-x-0 translate-y-0">
                <button
                  type="button"
                  className="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
                >
                  <svg
                    data-v-cd102a71
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon h-5 w-5 text-white"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor">
                      <path
                        d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32"
                        opacity=".2"
                      />
                      <path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div>
          <div
            className="relative z-[9999]"
            id="headlessui-dialog-55"
            role="dialog"
            aria-modal="true"
            data-headlessui-state="open"
          >
            <div className="bg-lesf fixed inset-0" />
            <div className="fixed inset-0 overflow-x-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div
                  id="headlessui-dialog-panel-58"
                  data-headlessui-state="open"
                  className="line-bg w-full   text-left align-middle shadow-xl transition-all rounded-lg max-w-2xl"
                >
                  <div className="flex w-full items-center justify-between p-4 md:p-6">
                    <div className="lg:flex lg:items-center lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
                          Transaction Details
                        </h2>
                        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"></div>
                      </div>
                      <div className="mt-5 flex lg:ml-4 lg:mt-0"></div>
                    </div>
                    <button
                      onClick={toggleModalClose}
                      type="button"
                      className="flex h-9 w-9 items-center justify-center transition-colors duration-300 disabled:opacity-30 hover:bg-muted-100 dark:hover:bg-muted-700 text-muted-700 dark:text-muted-50 rounded-full"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 6 6 18M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 md:p-6 overflow-auto">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-4 md:gap-y-8 sm:grid-cols-2 mb-3">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Transaction ID
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <a
                            href="#"
                            className="font-medium inline-flex align-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                          >
                            <Truncate
                              text={singleTransaction.txId}
                              offset={6}
                              width="100"
                            />
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon w-5 h-5 inline-block -mt-1 ml-1"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              >
                                <rect
                                  width={13}
                                  height={13}
                                  x={9}
                                  y={9}
                                  rx={2}
                                  ry={2}
                                />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </g>
                            </svg>
                          </a>
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Transaction Hash
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <a
                            href="#"
                            className="font-medium text-gray-900  align-center inline-flex dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                          >
                            {" "}
                            <Truncate
                              text={singleTransaction.txId}
                              offset={6}
                              width="100"
                            />
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon w-5 h-5 inline-block -mt-1 ml-1"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              >
                                <rect
                                  width={13}
                                  height={13}
                                  x={9}
                                  y={9}
                                  rx={2}
                                  ry={2}
                                />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </g>
                            </svg>
                          </a>
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Block
                        </dt>
                        <dd className="mt-1 inline-flex  align-center text-sm text-gray-900 dark:text-white">
                          <Truncate
                            text={singleTransaction.txId}
                            offset={6}
                            width="100"
                          />
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Timestamp
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          {singleTransaction.createdAt}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          From
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <a
                            href="#"
                            className="font-medium inline-flex align-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                          >
                            <Truncate
                              text={singleTransaction.fromAddress}
                              offset={6}
                              width="100"
                            />
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon w-5 h-5 inline-block -mt-1 ml-1"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              >
                                <rect
                                  width={13}
                                  height={13}
                                  x={9}
                                  y={9}
                                  rx={2}
                                  ry={2}
                                />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </g>
                            </svg>
                          </a>
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          to
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <a
                            href="#"
                            className="font-medium inline-flex align-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                          >
                            <Truncate
                              text={singleTransaction.txId}
                              offset={6}
                              width="100"
                            />
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon w-5 h-5 inline-block -mt-1 ml-1"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              >
                                <rect
                                  width={13}
                                  height={13}
                                  x={9}
                                  y={9}
                                  rx={2}
                                  ry={2}
                                />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </g>
                            </svg>
                          </a>
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Value
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <a
                            href="#"
                            className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                          >
                            {singleTransaction.amount.toFixed(8)}{" "}
                            {`${
                              singleTransaction.trxName === "bitcoin"
                                ? "BTC"
                                : singleTransaction.trxName === "ethereum"
                                ? "ETH"
                                : singleTransaction.trxName === "tether"
                                ? "USDT"
                                : ""
                            }`}
                            {"   "}
                            <span className="text-gray-400">{`($${
                              singleTransaction.trxName === "bitcoin"
                                ? (singleTransaction.amount * 42087.57).toFixed(
                                    2
                                  )
                                : singleTransaction.trxName === "ethereum"
                                ? (singleTransaction.amount * 2241.86).toFixed(
                                    2
                                  )
                                : singleTransaction.trxName === "tether"
                                ? singleTransaction.amount.toFixed(2)
                                : (0).toFixed(2)
                            })`}</span>
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon w-5 h-5 inline-block -mt-1 ml-2"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              >
                                <rect
                                  width={13}
                                  height={13}
                                  x={9}
                                  y={9}
                                  rx={2}
                                  ry={2}
                                />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </g>
                            </svg>
                          </a>
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Status
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          {singleTransaction.status === "pending" ? (
                            <>
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                                Pending
                              </span>
                            </>
                          ) : singleTransaction.status === "completed" ? (
                            <>
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                                Completed
                              </span>
                            </>
                          ) : singleTransaction.status === "failed" ? (
                            <>
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
                                Failed
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="border-muted-300 dark:border-muted-700 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center border-l w-10">
                                <svg
                                  data-v-cd102a71
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon text-muted-400 transition-transform duration-300 h-4 w-4"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m6 9l6 6l6-6"
                                  />
                                </svg>
                              </span>
                            </>
                          )}
                          <span className="text-gray-400 dark:text-gray-500 ml-2">
                            {singleTransaction.note}
                          </span>

                          {/**/}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex w-full items-center gap-x-2 justify-end">
                    <div className="p-4 md:p-6">
                      <div className="flex gap-x-2">
                        <button
                          onClick={toggleModalClose}
                          data-v-71bb21a6
                          type="button"
                          className="is-button rounded is-button-default"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
