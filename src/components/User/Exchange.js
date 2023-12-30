import React, { useEffect, useState } from "react";
import SideBar from "../../layout/UserSidebar/SideBar";
import { getsignUserApi } from "../../Api/Service";
import { toast } from "react-toastify";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
const Exchange = () => {
  const [Active, setActive] = useState(false);
  let toggleBar = () => {
    if (Active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const authUser = useAuthUser();
  const Navigate = useNavigate();
  const [offers, setoffers] = useState(false);
  setTimeout(() => {
    setoffers(true);
  }, 1500);
  useEffect(() => {
    if (authUser().user.role === "user") {
      return;
    } else if (authUser().user.role === "admin") {
      Navigate("/admin/dashboard");
      return;
    }
  }, []);
  return (
    <div className="dark">
      <div>
        <div className="bg-muted-100 dark:bg-muted-900 pb-20">
          <SideBar state={Active} toggle={toggleBar} />
          <div className="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10 lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]">
            <div className="mx-auto w-full max-w-7xl">
              <UserHeader />
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
              <seokit />
              <div className="border-muted-200 bg-white  relative w-full border bg-white transition-all duration-300 rounded-md">
                {/* Dat */}
                <iframe
                  className="ifnb"
                  id="iframe-widget"
                  src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=6994be294e5ff6&locales=true&logo=false&primaryColor=00C26F&to=eth&toFiat=eth&toTheMoon=true"
                ></iframe>
                <script
                  defer
                  type="text/javascript"
                  src="https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js"
                ></script>
                {/* Dat */}
                {offers && (
                  <div className="poffers">
                    <h1>Payment offers</h1>
                    <div className="flex-vts">
                      <a
                        href="https://www.moonpay.com/buy"
                        target="_blank"
                        className="signlw"
                      >
                        <div className="img-ico">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-15 w-15"
                          >
                            <path
                              d="M33.8498 12.3006C35.0662 12.3006 36.2554 11.9399 37.2668 11.2641C38.2782 10.5883 39.0665 9.62777 39.532 8.50394C39.9975 7.38012 40.1193 6.1435 39.882 4.95045C39.6447 3.75741 39.0589 2.66153 38.1988 1.80139C37.3386 0.941252 36.2427 0.355491 35.0497 0.118179C33.8567 -0.119132 32.62 0.00266485 31.4962 0.468168C30.3724 0.933671 29.4118 1.72197 28.736 2.73339C28.0602 3.7448 27.6995 4.9339 27.6995 6.15032C27.6995 6.958 27.8585 7.75779 28.1676 8.504C28.4766 9.25022 28.9297 9.92824 29.5008 10.4994C30.0719 11.0705 30.7499 11.5235 31.4962 11.8326C32.2424 12.1416 33.0421 12.3007 33.8498 12.3006ZM14.9914 40.0001C12.0264 40.0001 9.12796 39.1209 6.66264 37.4736C4.19731 35.8263 2.27582 33.485 1.14116 30.7457C0.00649385 28.0063 -0.290385 24.9921 0.288065 22.084C0.866514 19.176 2.29431 16.5047 4.3909 14.4082C6.48749 12.3116 9.15871 10.8838 12.0668 10.3053C14.9748 9.72689 17.9891 10.0238 20.7284 11.1585C23.4677 12.2931 25.8091 14.2146 27.4563 16.6799C29.1036 19.1453 29.9828 22.0437 29.9828 25.0087C29.9829 26.9775 29.5951 28.9269 28.8418 30.7458C28.0884 32.5646 26.9841 34.2173 25.5921 35.6094C24.2 37.0014 22.5473 38.1057 20.7284 38.8591C18.9096 39.6124 16.9601 40.0002 14.9914 40.0001Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                        <p className="nma">MoonPay</p>
                      </a>
                      <a
                        href="https://global.transak.com/"
                        target="_blank"
                        className="signlw"
                      >
                        <div className="img-ico">
                          <svg
                            viewBox="269 325.65 431 429.24"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            id="Capa_1"
                            data-name="Capa 1"
                          >
                            <defs>
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    ".cls-1{fill:black;}.cls-2{fill:#fff;}.cls-3{fill:#1461db;}",
                                }}
                              />
                              <linearGradient
                                id="linear-gradient"
                                x1="297.72"
                                y1="432.94"
                                x2="669.52"
                                y2="647.59"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.13" stopColor="#348bed" />
                                <stop offset="0.31" stopColor="#2b80e8" />
                                <stop offset="0.64" stopColor="#1461db" />
                                <stop offset="0.72" stopColor="#0e57d7" />
                              </linearGradient>
                            </defs>
                            <circle
                              className="cls-1"
                              cx="483.62"
                              cy="540.27"
                              r="214.62"
                            />
                            <path
                              className="cls-2"
                              d="M619.14,527.15l-60.62-60.62h0l-.11-.11-.24-.21a15.17,15.17,0,0,0-1.23-1c-.3-.24-.6-.47-.92-.68-.14-.1-.28-.18-.43-.27a16.46,16.46,0,0,0-22,3.65l-94.28,94.29v-84a16.65,16.65,0,0,0-33.3,0v84l-34.42-34.42a16.65,16.65,0,0,0-23.54,23.54l62.84,62.84a14.82,14.82,0,0,0,1.25,1.13c.42.34.86.67,1.3,1l0,0A16.65,16.65,0,0,0,421,618.9h.07c.54.05,1.08.08,1.62.08h0l.25,0q.68,0,1.35-.06l.33,0c.43-.05.86-.1,1.28-.19l.19,0c.47-.1.94-.21,1.4-.35l.08,0a15.32,15.32,0,0,0,1.48-.53h0a15.62,15.62,0,0,0,2-1l.38-.22a15.91,15.91,0,0,0,1.8-1.28l.17-.15c.35-.3.7-.6,1-.94L530,518.6v83.74a16.65,16.65,0,0,0,33.3,0v-84L595.6,550.7a16.65,16.65,0,0,0,23.54-23.55Z"
                            />
                          </svg>
                        </div>
                        <p className="nma">Transak</p>
                      </a>
                    </div>
                    <div className="flex-vts">
                      <a
                        href="https://openocean.banxa.com/"
                        target="_blank"
                        className="signlw"
                      >
                        <div className="img-ico">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={70}
                            height={20}
                            fill="none"
                          >
                            <path
                              d="M9.54 0c.296.219.502.49.644.837l6.53 15.454c.4.953.811 1.893 1.21 2.833.232.528.026.85-.54.85-3.89 0-7.78 0-11.67.026-.335 0-.49-.103-.54-.412-.014-.116-.052-.232-.065-.348-.052-.772.077-.927.837-.927 2.937-.013 5.873-.013 8.81-.013.631 0 .683-.09.438-.67-1.842-4.288-3.67-8.59-5.5-12.89-.051-.117-.103-.245-.193-.426-.4.902-.773 1.752-1.134 2.602C7.208 9.58 6.01 12.234 4.89 14.913c-.477 1.146-.953 2.292-1.43 3.426-.193.463-.425.914-.618 1.39-.09.207-.206.271-.425.258-.284-.013-.567 0-.85 0-.4 0-.567-.18-.567-.58 0-.18.064-.334.142-.502 2.524-5.937 5.062-11.873 7.586-17.81C8.883.72 9.05.36 9.218 0h.322Z"
                              fill="black"
                            />
                            <path
                              d="M32.26 9.904c.541.177.97.476 1.288.896.317.41.476.924.476 1.54 0 .85-.327 1.507-.98 1.974-.653.457-1.605.686-2.856.686h-4.872V5.2h4.592c1.157 0 2.049.229 2.674.686.625.448.938 1.069.938 1.862 0 .485-.112.915-.336 1.288a2.3 2.3 0 0 1-.924.868Zm-5.124-3.276V9.33h2.576c.635 0 1.12-.112 1.456-.336.345-.233.518-.57.518-1.008 0-.448-.173-.784-.518-1.008-.336-.233-.821-.35-1.456-.35h-2.576Zm2.94 6.944c1.41 0 2.114-.471 2.114-1.414s-.705-1.414-2.114-1.414h-2.94v2.828h2.94Zm8.578-6.132c1.102 0 1.942.266 2.52.798.588.523.882 1.316.882 2.38V15h-1.652v-.91a2.074 2.074 0 0 1-.924.756c-.392.168-.868.252-1.428.252-.56 0-1.05-.093-1.47-.28a2.391 2.391 0 0 1-.98-.798 2.09 2.09 0 0 1-.336-1.162c0-.672.248-1.209.742-1.61.504-.41 1.293-.616 2.366-.616h1.932v-.112c0-.523-.158-.924-.476-1.204-.308-.28-.77-.42-1.386-.42-.42 0-.835.065-1.246.196-.4.13-.742.313-1.022.546l-.686-1.274a4.248 4.248 0 0 1 1.414-.686 6.292 6.292 0 0 1 1.75-.238Zm-.238 6.384c.44 0 .826-.098 1.162-.294a1.66 1.66 0 0 0 .728-.868v-.868H38.5c-1.008 0-1.512.331-1.512.994 0 .317.126.57.378.756.252.187.602.28 1.05.28ZM48.544 7.44c.943 0 1.699.275 2.268.826.57.55.854 1.367.854 2.45V15h-1.75v-4.06c0-.653-.154-1.143-.462-1.47-.308-.336-.746-.504-1.316-.504-.644 0-1.152.196-1.526.588-.373.383-.56.938-.56 1.666V15h-1.75V7.524h1.666v.966c.29-.345.654-.607 1.092-.784a3.93 3.93 0 0 1 1.484-.266ZM58.646 15l-1.918-2.59L54.796 15h-1.932l2.912-3.794-2.786-3.682h1.946l1.834 2.45 1.834-2.45h1.89l-2.8 3.654L60.62 15h-1.974Zm5.985-7.56c1.101 0 1.941.266 2.52.798.588.523.882 1.316.882 2.38V15h-1.652v-.91a2.074 2.074 0 0 1-.924.756c-.392.168-.868.252-1.428.252-.56 0-1.05-.093-1.47-.28a2.391 2.391 0 0 1-.98-.798 2.09 2.09 0 0 1-.336-1.162c0-.672.247-1.209.742-1.61.504-.41 1.293-.616 2.366-.616h1.932v-.112c0-.523-.159-.924-.476-1.204-.308-.28-.77-.42-1.386-.42-.42 0-.835.065-1.246.196a3.05 3.05 0 0 0-1.022.546l-.686-1.274a4.248 4.248 0 0 1 1.414-.686 6.291 6.291 0 0 1 1.75-.238Zm-.238 6.384c.439 0 .826-.098 1.162-.294.345-.205.588-.495.728-.868v-.868h-1.806c-1.008 0-1.512.331-1.512.994 0 .317.126.57.378.756.252.187.602.28 1.05.28Z"
                              fill="#394247"
                            />
                            <defs>
                              <linearGradient
                                id="a"
                                x1="9.509"
                                y1={0}
                                x2=".942"
                                y2="18.858"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#65D1C2" />
                                <stop offset={1} stopColor="#2987E0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <p className="nma">Banxa</p>
                      </a>
                      <a
                        href="https://www.crypto.unlimit.com/"
                        target="_blank"
                        className="signlw"
                      >
                        <div className="img-ico">
                          <svg
                            className="custim"
                            viewBox="0 0 160 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M151.2 17.8H90.84C86 17.8 82.04 13.88 82.04 8.99995C82.04 4.15995 85.96 0.199951 90.84 0.199951H151.2C156.04 0.199951 160 4.11995 160 8.99995C160 13.84 156.08 17.8 151.2 17.8Z"
                              fill="#C9F73A"
                            />
                            <path
                              className="themed"
                              fill="black"
                              d="M56.88 6.79999C55.96 5.83999 54.64 5.35999 53.04 5.35999C52.2 5.35999 51.44 5.51999 50.76 5.75999C50.16 5.99999 49.6 6.35999 49.16 6.83999C48.72 6.39999 48.2 6.03999 47.56 5.75999C46.88 5.47999 46.12 5.35999 45.28 5.35999C43.72 5.35999 42.36 5.87999 41.44 6.79999C40.48 7.75999 40 9.07999 40 10.68V17.8H42.8V10.68C42.8 9.95999 43.04 9.27999 43.44 8.79999C43.88 8.31999 44.52 8.03999 45.28 8.03999C45.96 8.03999 46.56 8.27999 47 8.71999C47.4 9.15999 47.68 9.75999 47.72 10.44C47.72 10.52 47.72 10.6 47.72 10.68V17.8H50.56V10.64C50.56 10.56 50.56 10.48 50.56 10.4C50.6 9.71999 50.84 9.11999 51.28 8.67999C51.72 8.23999 52.32 7.99999 53.04 7.99999C53.76 7.99999 54.4 8.27999 54.84 8.75999C55.28 9.23999 55.48 9.91999 55.48 10.64V17.8H58.28V10.64C58.32 9.07999 57.84 7.71999 56.88 6.79999Z"
                            />
                            <path
                              className="themed"
                              fill="black"
                              d="M30.8 0.199951H28V17.8H30.8V0.199951Z"
                            />
                            <path
                              className="themed"
                              fill="black"
                              d="M36.8 0.199951V3.91995H34V0.199951H36.8ZM36.8 5.63995V17.8H34V5.63995H36.8Z"
                            />
                            <path
                              className="themed"
                              fill="black"
                              d="M64.3601 0.199951V3.91995H61.5601V0.199951H64.3601ZM64.3601 5.63995V17.8H61.5601V5.63995H64.3601Z"
                            />
                            <path
                              className="themed"
                              fill="black"
                              d="M75.3201 8.39995H70.4001V14C70.4001 14.64 70.8001 15.04 71.4801 15.04H75.3201V17.8H70.9201C68.8001 17.8 67.5601 16.56 67.5601 14.48V0.199951H70.3601V5.63995H75.2801V8.39995H75.3201Z"
                            />
                            <path
                              className="themed"
                              fill="black"
                              d="M0 0.199951H2.8V6.75995C2.8 8.55995 3.92 9.95995 5.8 9.95995C7.72 9.95995 8.84 8.55995 8.84 6.75995V0.199951H11.64V6.79995C11.64 10.36 9.36 12.68 5.8 12.68C2.28 12.64 0 10.36 0 6.79995L0 0.199951Z"
                            />
                            <path
                              className="themed"
                              fill="black"
                              d="M24.8 17.8H22V11.2399C22 9.43995 20.88 8.03995 19 8.03995C17.08 8.03995 15.96 9.43995 15.96 11.2399V17.8H13.16V11.1999C13.16 7.63995 15.44 5.31995 19 5.31995C22.52 5.31995 24.8 7.59995 24.8 11.1999V17.8Z"
                            />
                            <path
                              d="M100.4 9.9999C100.28 10.8399 100 11.5999 99.52 12.2799C99.04 12.9599 98.44 13.4799 97.68 13.8799C96.92 14.2799 96.04 14.4399 95.08 14.4399C94 14.4399 93.08 14.1999 92.24 13.7199C91.4 13.2399 90.76 12.5599 90.32 11.7599C89.88 10.9199 89.64 9.9999 89.64 8.9999C89.64 7.9999 89.88 7.0799 90.32 6.2399C90.76 5.3999 91.4 4.7199 92.24 4.2399C93.08 3.7599 94 3.5199 95.08 3.5199C96 3.5199 96.84 3.7199 97.6 4.0799C98.36 4.4799 98.96 4.9999 99.44 5.6399C99.92 6.3199 100.2 7.0399 100.36 7.8799H98.04C97.88 7.2399 97.52 6.7199 97 6.3199C96.48 5.9199 95.84 5.7199 95.12 5.7199C94.48 5.7199 93.92 5.8799 93.44 6.1599C92.96 6.4399 92.6 6.8399 92.32 7.3599C92.08 7.8799 91.92 8.3999 91.92 8.9999C91.92 9.5999 92.04 10.1599 92.32 10.6399C92.56 11.1599 92.96 11.5599 93.44 11.8399C93.92 12.1199 94.48 12.2799 95.12 12.2799C95.88 12.2799 96.52 12.0799 97.08 11.6399C97.6 11.2399 97.96 10.6799 98.12 9.9999H100.4Z"
                              fill="black"
                            />
                            <path
                              d="M101.8 14.2399V3.75989H107.16C108.24 3.75989 109.12 3.99989 109.8 4.51989C110.48 5.03989 110.8 5.75989 110.8 6.67989C110.8 7.63989 110.44 8.39989 109.76 8.87989V8.91989C110.6 9.11989 111.04 9.79989 111.04 10.8799V14.2399H108.8V11.2799C108.8 11.0799 108.76 10.9199 108.64 10.7999C108.52 10.6799 108.36 10.6399 108.16 10.6399H104V14.1999H101.8V14.2399ZM107 8.67989C107.48 8.67989 107.84 8.55989 108.12 8.31989C108.4 8.07989 108.56 7.71989 108.56 7.31989C108.56 6.91989 108.4 6.55989 108.12 6.31989C107.84 6.07989 107.44 5.95989 107 5.95989H104V8.67989H107Z"
                              fill="black"
                            />
                            <path
                              d="M119.08 3.75989H121.6L117.4 10.1999V14.2399H115.2V10.1999L111 3.75989H113.56L116.32 8.15989L119.08 3.75989Z"
                              fill="black"
                            />
                            <path
                              d="M129.56 4.23989C130.12 4.55989 130.56 4.99989 130.88 5.51989C131.2 6.07989 131.36 6.67989 131.36 7.35989C131.36 8.03989 131.2 8.67989 130.88 9.19989C130.56 9.75989 130.12 10.1599 129.56 10.4799C129 10.7999 128.4 10.9599 127.72 10.9599H124.68V14.2399H122.44V3.75989H127.72C128.36 3.75989 129 3.91989 129.56 4.23989ZM127.52 8.83989C127.96 8.83989 128.36 8.71989 128.64 8.43989C128.92 8.15989 129.08 7.79989 129.08 7.35989C129.08 6.95989 128.92 6.59989 128.64 6.31989C128.32 6.03989 127.96 5.91989 127.52 5.91989H124.64V8.83989H127.52Z"
                              fill="black"
                            />
                            <path
                              d="M131.84 3.75989H141.12V5.91989H137.6V14.2399H135.36V5.91989H131.84V3.75989Z"
                              fill="black"
                            />
                            <path
                              d="M143.96 13.7599C143.12 13.2799 142.48 12.5999 142 11.7999C141.56 10.9599 141.32 10.0399 141.32 9.0399C141.32 8.0399 141.56 7.1199 142 6.2799C142.44 5.4399 143.12 4.7599 143.96 4.2799C144.8 3.7999 145.76 3.5199 146.84 3.5199C147.92 3.5199 148.88 3.7599 149.72 4.2799C150.56 4.7599 151.2 5.4399 151.68 6.2799C152.12 7.1199 152.36 8.0399 152.36 9.0399C152.36 10.0399 152.12 10.9599 151.68 11.7999C151.24 12.6399 150.56 13.2799 149.72 13.7599C148.88 14.2399 147.92 14.4799 146.84 14.4799C145.76 14.4799 144.8 14.2399 143.96 13.7599ZM148.56 11.8399C149.04 11.5599 149.44 11.1599 149.68 10.6399C149.96 10.1199 150.08 9.5999 150.08 8.9999C150.08 8.3999 149.96 7.8399 149.68 7.3599C149.4 6.8399 149.04 6.4399 148.56 6.1599C148.08 5.8799 147.48 5.7199 146.84 5.7199C146.2 5.7199 145.6 5.8799 145.12 6.1599C144.64 6.4399 144.24 6.8399 144 7.3599C143.72 7.8799 143.6 8.3999 143.6 8.9999C143.6 9.5999 143.72 10.1599 144 10.6399C144.28 11.1599 144.64 11.5599 145.12 11.8399C145.6 12.1199 146.2 12.2799 146.84 12.2799C147.52 12.2799 148.08 12.1599 148.56 11.8399Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
