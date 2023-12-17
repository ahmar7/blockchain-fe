import React, { useEffect, useState } from "react";
import SideBar from "../../layout/UserSidebar/SideBar";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  getCoinsApi,
  getCoinsUserApi,
  getsignUserApi,
  verifySingleUserApi,
} from "../../Api/Service";
import Log from "../../assets/img/log.jpg";
import chartGuy from "../../assets/img/chart-guy.svg";
import { toast } from "react-toastify";
const Kyc = () => {
  let SignOut = useSignOut();
  const authUser = useAuthUser();
  const Navigate = useNavigate();
  const [slide1, setSlide1] = useState();
  const [slide2, setSlide2] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [isDisable, setisDisable] = useState(false);
  const [newSlider1, setNewSlider1] = useState();
  const [newSlider2, setNewSlider2] = useState();
  const [isUser, setIsUser] = useState(true);
  let changeBanner1 = (e) => {
    setNewSlider1(e.target.files[0]);
    setSlide1(URL.createObjectURL(e.target.files[0]));
  };
  let changeBanner2 = (e) => {
    setNewSlider2(e.target.files[0]);
    setSlide2(URL.createObjectURL(e.target.files[0]));
  };
  const getsignUser = async () => {
    try {
      const formData = new FormData();
      formData.append("id", authUser().user._id);
      const userCoins = await getsignUserApi(formData);

      if (userCoins.success) {
        setIsUser(userCoins.signleUser);
        if (userCoins.signleUser.status === "completed") {
          Navigate("/dashboard");
          return;
        }
        setisLoading(false);
        return;
      } else {
        toast.error(userCoins.msg);
      }
    } catch (error) {
      toast.error(error);
    } finally {
    }
  };
  const verifyUser = async () => {
    try {
      if (!newSlider1 || !newSlider2) {
        toast.info("Please upload both the documents");
        return;
      }
      setisDisable(true);
      const formData = new FormData();
      formData.append("cnic", newSlider1);
      formData.append("id", isUser._id);
      formData.append("bill", newSlider2);

      const updateHeader = await verifySingleUserApi(formData);

      if (updateHeader.success) {
        toast.success(updateHeader.msg);
        Navigate("/dashboard");
      } else {
        toast.error(updateHeader.msg);
      }
    } catch (error) {
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisDisable(false);
    }
  };
  useEffect(() => {
    getsignUser();
    if (authUser().user.role === "user") {
      return;
    } else if (authUser().user.role === "admin") {
      Navigate("/admin/dashboard");
      return;
    }
  }, []);
  return (
    <div>
      {!isLoading && (
        <div>
          <div>
            <tairosidebarlayout
              toolbar="false"
              sidebar="false"
              className="bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
            >
              <div className="dark:bg-muted-800 absolute start-0 top-0 h-16 w-full bg-white">
                <div className="relative flex h-16 w-full items-center justify-between px-4">
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="border-muted-200 dark:border-muted-700 flex w-14 items-center justify-center border-r pe-6"
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 500 500"
                        xmlSpace="preserve"
                        className="shrink-0 text-primary-600 h-10 shrink-0"
                      >
                        <g>
                          <g>
                            <defs>
                              <path
                                id="LOGOSVGID_1_"
                                d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
                              />
                            </defs>
                            <use
                              xlinkHref="#LOGOSVGID_1_"
                              clipRule="evenodd"
                              fillRule="evenodd"
                              fill="currentColor"
                              className="overflow-visible"
                            />
                            <clipPath id="LOGOSVGID_2_">
                              <use
                                xlinkHref="#LOGOSVGID_1_"
                                className="overflow-visible"
                              />
                            </clipPath>
                            <rect
                              x="17.4"
                              y={78}
                              clipPath="url(#LOGOSVGID_2_)"
                              width={422}
                              height={422}
                              fill="currentColor"
                            />
                          </g>
                          <g>
                            <defs>
                              <path
                                id="LOGOSVGID_3_"
                                d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"
                              />
                            </defs>
                            <use
                              xlinkHref="#LOGOSVGID_3_"
                              clipRule="evenodd"
                              fillRule="evenodd"
                              fill="currentColor"
                              className="overflow-visible"
                            />
                            <clipPath id="LOGOSVGID_4_">
                              <use
                                xlinkHref="#LOGOSVGID_3_"
                                className="overflow-visible"
                              />
                            </clipPath>
                            <rect
                              x={351}
                              y={0}
                              clipPath="url(#LOGOSVGID_4_)"
                              width="131.6"
                              height="131.6"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                    <div className="hidden items-center gap-2 ps-6 font-sans sm:flex">
                      <p className="text-muted-500 dark:text-muted-400"> </p>
                      <h2 className="text-muted-800 font-semibold dark:text-white">
                        Kyc Verification
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-4">
                    <label className="nui-focus relative block h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-2 dark:ring-offset-muted-900">
                      <input
                        type="checkbox"
                        className="absolute start-0 top-0 z-[2] h-full w-full cursor-pointer opacity-0"
                      />
                      <span className="relative block h-9 w-9 rounded-full bg-white dark:bg-muted-800  border border-muted-300 dark:border-muted-700">
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
                            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
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
                    <div className="group inline-flex items-center justify-center text-right">
                      <div
                        data-headlessui-state
                        className="relative h-10 w-10 text-left"
                      >
                        <button
                          className="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                          id="headlessui-menu-button-82"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          type="button"
                        >
                          <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full">
                            <img
                              src="https://api.dicebear.com/6.x/pixel-art/svg?seed=ahmarjb&options[mood][]=happy"
                              className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                              alt=""
                            />
                          </div>
                        </button>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-10 w-full">
                    <div
                      role="progressbar"
                      aria-valuenow="16.666666666666664"
                      aria-valuemax={100}
                      className="bg-muted-200 dark:bg-muted-700 relative w-full overflow-hidden h-1 rounded-full"
                    >
                      <div
                        className="absolute start-0 top-0 h-full transition-all duration-300 bg-primary-500 rounded-full"
                        style={{ width: "16.6667%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <form action method="POST" noValidate>
                <div className="pb-32 pt-24">
                  <div className="px-4 py-8">
                    <div className="mb-10 text-center">
                      <p
                        className="font-heading text-2xl font-semibold leading-normal leading-normal text-muted-800 dark:text-white"
                        tag="h1"
                      >
                        <span>
                          To complete the KYC process, please follow these
                          steps:
                        </span>
                      </p>
                      <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400">
                        <span>
                          Add an extra layer of security to your account
                        </span>
                      </p>
                    </div>
                    <div className="mx-auto w-full">
                      <div className="w-full">
                        <div className="w-full">
                          <div className="mx-auto mb-8 grid max-w-4xl gap-6 sm:grid-cols-2">
                            <div className="group/nui-radio-headless relative">
                              {/**/}
                              <div className="relative">
                                <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl peer-checked:!border-primary-500 relative border-2 p-8 opacity-60   peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100">
                                  <div className="flex flex-col text-center">
                                    <p className="font-heading text-base font-medium leading-normal leading-normal">
                                      ID photo
                                    </p>
                                    <p className="font-alt text-xs font-normal leading-snug text-muted-500 dark:text-muted-400">
                                      Please upload a clear image of a valid
                                      government-issued identification document
                                      (e.g., passport, national ID, or driver's
                                      license).
                                    </p>
                                  </div>
                                  <div className="child absolute end-2 top-3 opacity-0">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-primary-500 h-7 w-7"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 256 256"
                                    >
                                      <g fill="currentColor">
                                        <path
                                          d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                                          opacity=".2"
                                        />
                                        <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" />
                                      </g>
                                    </svg>
                                  </div>

                                  <img
                                    className="logo-to-show"
                                    src={slide1}
                                    alt=""
                                  />
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={changeBanner1}
                                    className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                                  />
                                  <div className="mx-auto mx-auto flex flex-col items-center">
                                    {" "}
                                    <button className="text-center btn is-button rounded-xl bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 nope w-48">
                                      Upload
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="group/nui-radio-headless relative">
                              {/**/}
                              <div className="relative">
                                <input
                                  onChange={changeBanner2}
                                  type="file"
                                  accept="image/*"
                                  className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                                />
                                <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl peer-checked:!border-primary-500 relative border-2 p-8 opacity-60   peer-checked:opacity-100 peer-checked: -0 peer-checked:[&_.child]:!opacity-100">
                                  <div className="flex flex-col text-center">
                                    <p className="font-heading text-base font-medium leading-normal leading-normal">
                                      ID photo
                                    </p>
                                    <p className="font-alt text-xs font-normal leading-snug text-muted-500 dark:text-muted-400">
                                      Please upload a clear image of a recent
                                      utility bill (e.g., electricity, water, or
                                      gas bill) in your name.
                                    </p>
                                  </div>
                                  <div className="child absolute end-2 top-3 opacity-0">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-primary-500 h-7 w-7"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 256 256"
                                    >
                                      <g fill="currentColor">
                                        <path
                                          d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                                          opacity=".2"
                                        />
                                        <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" />
                                      </g>
                                    </svg>
                                  </div>
                                  <img
                                    className="logo-to-show2"
                                    src={slide2}
                                    alt=""
                                  />
                                  <div className="mx-auto mx-auto flex flex-col items-center">
                                    {" "}
                                    <button className="text-center btn is-button rounded-xl bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 nope w-48">
                                      Upload
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mx-auto flex flex-col items-center">
                            <a
                              onClick={verifyUser}
                              data-v-71bb21a6
                              href="#"
                              className="is-button rounded-xl bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 !h-12 w-48"
                              disabled={isDisable}
                            >
                              {isDisable ? (
                                <div>
                                  <div className="nui-placeload animate-nui-placeload h-4 w-8 rounded mx-auto"></div>
                                </div>
                              ) : (
                                "Continue"
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </tairosidebarlayout>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kyc;
