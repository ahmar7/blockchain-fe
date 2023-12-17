import React, { useState } from "react";
import SideBar from "../../layout/UserSidebar/SideBar";
import Log from "../../assets/img/log.jpg";
const Assets = () => {
  const [Active, setActive] = useState(false);
  let toggleBar = () => {
    console.log("ad");
    if (Active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <div>
      <div>
        <div className="bg-muted-100 dark:bg-muted-900 pb-20">
          <SideBar state={Active} toggle={toggleBar} />
          <div className="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10 lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]">
            <div className="mx-auto w-full max-w-7xl">
              <div className="relative z-50 mb-5 flex h-16 items-center gap-2">
                <button
                  type="button"
                  className="flex h-10 for-desk w-10 items-center justify-center -ms-3"
                >
                  <div className="relative  h-5 w-5 scale-90">
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-1 max-w-[75%] -rotate-45 top-0.5" />
                    <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300 translate-x-4 opacity-0" />
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-1 max-w-[75%] rotate-45 bottom-0" />
                  </div>
                </button>
                <button
                  onClick={toggleBar}
                  type="button"
                  className="flex for-mbl h-10 w-10 items-center justify-center -ms-3"
                >
                  <div className="relative h-5 w-5">
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-0.5 top-0.5" />
                    <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300" />
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-0 bottom-0" />
                  </div>
                </button>
                <h1 className="font-heading text-2xl font-light leading-normal leading-normal text-muted-800 hidden dark:text-white md:block">
                  Manage Assets
                </h1>
                <div className="ms-auto" />

                <div className="group inline-flex items-center justify-center text-right">
                  <div
                    data-headlessui-state
                    className="relative h-9 w-9 text-left"
                  >
                    <button
                      className="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                      id="headlessui-menu-button-38"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      type="button"
                    >
                      <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
                        <img
                          src={Log}
                          className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                          alt=""
                        />
                      </div>
                    </button>
                    {/**/}
                  </div>
                </div>
              </div>
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
              <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p
                      className="font-heading text-sm font-medium leading-normal leading-normal uppercase tracking-wider"
                      tag="h2"
                    >
                      Manage Assets
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 relative px-2 py-6 sm:py-4 top-px first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:border-t-0">
                    <div className="flex w-full flex-col sm:flex-row sm:items-center">
                      <div className="relative mb-4 flex grow items-center gap-2 px-6 sm:mb-0 sm:px-2 h-10">
                        <span className="text-muted-400 absolute hidden font-sans text-xs font-medium uppercase sm:-top-10 sm:start-2 sm:block">
                          currency
                        </span>
                        <div
                          className="relative inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-lg bg-primary-500/20 text-primary-500"
                          icon="cryptocurrency:btc"
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
                          <h4 className="font-heading text-sm font-medium leading-tight text-muted-700 dark:text-muted-100">
                            <span>Bitcoin</span>
                          </h4>
                          <p className="font-alt text-xs font-normal leading-tight text-muted-500 dark:text-muted-400">
                            <span>BTC</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-auto">
                          <span className="text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0">
                            balance
                          </span>
                          <span className="text-muted-500 dark:text-muted-400 font-sans text-sm">
                            {" "}
                            ( USD){" "}
                          </span>
                        </div>
                        <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-60">
                          <span className="text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0">
                            action
                          </span>
                          <a
                            href="#"
                            className="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-500 bg-muted-200 border-muted-200 dark:text-white dark:bg-muted-700/40 dark:border-muted-700/40 dark:hover:enabled:bg-muted-700/60 hover:enabled:bg-muted-100 dark:active:enabled:border-muted-800 dark:active:enabled:bg-muted-800 active:enabled:bg-muted-200/50 rounded-md"
                            disabled="false"
                          >
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon h-5 w-5 -ml-1"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"
                              ></path>
                            </svg>
                            <span>Manage</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 relative px-2 py-6 sm:py-4 top-px first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:border-t-0">
                    <div className="flex w-full flex-col sm:flex-row sm:items-center">
                      <div className="relative mb-4 flex grow items-center gap-2 px-6 sm:mb-0 sm:px-2 h-10">
                        <span className="text-muted-400 absolute hidden font-sans text-xs font-medium uppercase sm:-top-10 sm:start-2 sm:block sm:hidden">
                          currency
                        </span>
                        <div
                          className="relative inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-lg bg-primary-500/20 text-primary-500"
                          icon="cryptocurrency:eth"
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
                                />
                                <path
                                  fillOpacity=".298"
                                  d="m9 16.22l7.498 4.353v-7.701z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-heading text-sm font-medium leading-tight text-muted-700 dark:text-muted-100">
                            <span>Ethereum</span>
                          </h4>
                          <p className="font-alt text-xs font-normal leading-tight text-muted-500 dark:text-muted-400">
                            <span>ETH</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-auto">
                          <span className="text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 sm:hidden">
                            balance
                          </span>
                          <span className="text-muted-500 dark:text-muted-400 font-sans text-sm">
                            {" "}
                            ( USD){" "}
                          </span>
                        </div>
                        <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-60">
                          <span className="text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 sm:hidden">
                            action
                          </span>
                          <a
                            href="#"
                            className="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-500 bg-muted-200 border-muted-200 dark:text-white dark:bg-muted-700/40 dark:border-muted-700/40 dark:hover:enabled:bg-muted-700/60 hover:enabled:bg-muted-100 dark:active:enabled:border-muted-800 dark:active:enabled:bg-muted-800 active:enabled:bg-muted-200/50 rounded-md"
                            disabled="false"
                          >
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon h-5 w-5 -ml-1"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"
                              ></path>
                            </svg>
                            <span>Manage</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 relative px-2 py-6 sm:py-4 top-px first:rounded-t-lg last:rounded-b-lg [&:not(:first-child)]:border-t-0">
                    <div className="flex w-full flex-col sm:flex-row sm:items-center">
                      <div className="relative mb-4 flex grow items-center gap-2 px-6 sm:mb-0 sm:px-2 h-10">
                        <span className="text-muted-400 absolute hidden font-sans text-xs font-medium uppercase sm:-top-10 sm:start-2 sm:block sm:hidden">
                          currency
                        </span>
                        <div
                          className="relative inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-lg bg-primary-500/20 text-primary-500"
                          icon="cryptocurrency:usdt"
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
                          <h4 className="font-heading text-sm font-medium leading-tight text-muted-700 dark:text-muted-100">
                            <span>Tether</span>
                          </h4>
                          <p className="font-alt text-xs font-normal leading-tight text-muted-500 dark:text-muted-400">
                            <span>USDT</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-auto">
                          <span className="text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 sm:hidden">
                            balance
                          </span>
                          <span className="text-muted-500 dark:text-muted-400 font-sans text-sm">
                            {" "}
                            ( USD){" "}
                          </span>
                        </div>
                        <div className="relative flex h-8 items-center justify-end px-6 sm:h-10 sm:justify-center sm:px-2 w-full sm:w-60">
                          <span className="text-muted-400 absolute start-8 top-1/2 mx-auto -translate-y-1/2 text-center font-sans text-xs font-medium uppercase sm:inset-x-0 sm:-top-10 sm:translate-y-0 sm:hidden">
                            action
                          </span>
                          <a
                            href="#"
                            className="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-500 bg-muted-200 border-muted-200 dark:text-white dark:bg-muted-700/40 dark:border-muted-700/40 dark:hover:enabled:bg-muted-700/60 hover:enabled:bg-muted-100 dark:active:enabled:border-muted-800 dark:active:enabled:bg-muted-800 active:enabled:bg-muted-200/50 rounded-md"
                            disabled="false"
                          >
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon h-5 w-5 -ml-1"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z"
                              ></path>
                            </svg>
                            <span>Manage</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
