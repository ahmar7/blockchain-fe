import React, { useState } from "react";
import SideBar from "../../../layout/AdminSidebar/Sidebar";
import UserSideBar from "./UserSideBar";

const UserTransactions = () => {
  const [Active, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  let toggleBar = () => { 
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
                  className="flex h-10 w-10 items-center justify-center -ms-3"
                >
                  <div className="relative h-5 w-5 scale-90">
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-1 max-w-[75%] -rotate-45 top-0.5" />
                    <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300 translate-x-4 opacity-0" />
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-1 max-w-[75%] rotate-45 bottom-0" />
                  </div>
                </button>
                <h1 className="font-heading text-2xl font-light leading-normal leading-normal text-muted-800 hidden dark:text-white md:block">
                  User Management
                </h1>
                <div className="ms-auto" />
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
                <button
                  type="button"
                  className="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
                >
                  <img
                    className="h-7 w-7 rounded-full"
                    src="/img/langs/en.svg"
                    alt="flag icon"
                  />
                </button>
                <div className="group inline-flex items-center justify-center text-right">
                  <div
                    data-headlessui-state
                    className="relative h-9 w-9 text-left"
                  >
                    <div
                      disabled="false"
                      id="headlessui-menu-button-23"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state
                    >
                      <button
                        type="button"
                        className="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                      >
                        <span className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white">
                          <svg
                            data-v-cd102a71
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-muted-400 h-5 w-5"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                          >
                            <g fill="currentColor">
                              <path
                                d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12"
                                opacity=".2"
                              />
                              <path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z" />
                            </g>
                          </svg>
                        </span>
                      </button>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div className="group inline-flex items-center justify-center text-right">
                  <div
                    data-headlessui-state
                    className="relative h-9 w-9 text-left"
                  >
                    <button
                      className="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                      id="headlessui-menu-button-25"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      type="button"
                    >
                      <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
                        <img
                          src="https://api.dicebear.com/6.x/pixel-art/svg?seed=tom tom&options[mood][]=happy"
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
              />
              <seokit />
              <div className="min-h-screen overflow-hidden">
                <div className="grid gap-8 sm:grid-cols-12">
                  <UserSideBar />
                  <div className="col-span-12 sm:col-span-8">
                    <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white duration-300 rounded-md">
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <p
                            className="font-heading text-sm font-medium leading-normal leading-normal uppercase tracking-wider"
                            tag="h2"
                          >
                            {" "}
                            Manage Tranasctions{" "}
                          </p>
                        </div>
                      </div>
                      <div className="pt-6">
                        <div>
                          <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl p-3">
                            <div className="flex w-full items-center gap-2">
                              <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-12 w-12 nui-mask nui-mask-blob bg-success-100 text-success-400">
                                <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300">
                                  <svg
                                    data-v-cd102a71
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="icon"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z"
                                    />
                                  </svg>
                                </div>
                                {/**/}
                                {/**/}
                              </div>
                              <div>
                                <p
                                  className="font-heading text-sm font-medium leading-normal leading-normal"
                                  tag="h3"
                                >
                                  Bitcoin{" "}
                                  <span className="text-muted-400">
                                    (Pending)
                                  </span>
                                </p>
                                <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400 mt-1">
                                  0.50534877{" "}
                                  <span className="text-muted-500">
                                    ($20944.58)
                                  </span>
                                </p>
                                <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400 md:hidden mt-1">
                                  BTC At: 2023-12-13 15:32:46
                                </p>
                              </div>
                              <div className="ms-auto flex items-center gap-2">
                                <p
                                  className="font-heading text-sm font-medium leading-normal leading-normal me-2 text-gray-500 hidden md:block"
                                  tag="h3"
                                >
                                  At: 2023-12-13 15:32:46
                                </p>
                                <button
                                  type="button"
                                  className="disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-md h-8 w-8 p-1 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300"
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
                                    <g
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                    >
                                      <path d="M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8" />
                                      <circle cx={12} cy={12} r={3} />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      {/* Modal 1 */}
      {modal && (
        <div>
          <div
            className="relative z-[9999]"
            id="headlessui-dialog-40"
            role="dialog"
            aria-modal="true"
            data-headlessui-state="open"
          >
            <div className="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" />
            <div className="fixed inset-0 overflow-x-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div
                  id="headlessui-dialog-panel-43"
                  data-headlessui-state="open"
                  className="dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rounded-lg max-w-2xl"
                >
                  <div className="flex w-full items-center justify-between p-4 md:p-6">
                    <div className="lg:flex lg:items-center lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
                          Transaction Details
                        </h2>
                        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                                clipRule="evenodd"
                              />
                              <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                            </svg>{" "}
                            User: hmilmine@gmail.com
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex lg:ml-4 lg:mt-0">
                        <span className="block">
                          <a
                            href="/admin/users/9ad6fbc9-5550-4600-870a-17c9bd7d0eee"
                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:ring-gray-600 dark:ring-inset"
                          >
                            <svg
                              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                            </svg>{" "}
                            User Profile{" "}
                          </a>
                        </span>
                      </div>
                    </div>
                    <button
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
                            className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                          >
                            9ad6ffc9-084a-4a...0a52d4{" "}
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
                            className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                          >
                            0b43a0f1aa1c41db...fbc33c{" "}
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
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          0b43a0f1aa1c41db...fbc33c
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Timestamp
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          2023-12-13 15:32:46
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          From
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <a
                            href="#"
                            className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                          >
                            bc1qrt7rkpswpgmc...hqdx6d{" "}
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
                            className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                          >
                            bc1quw62j6h8t83g...nj48zl{" "}
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
                            0.50534877 BTC{" "}
                            <span className="text-gray-400">($20944.58)</span>
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
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                            Pending
                          </span>
                          <span className="text-gray-400 dark:text-gray-500 ml-2">
                            Authorization missing
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-2">
                      <p
                        className="font-heading text-sm font-medium leading-normal leading-normal"
                        tag="h3"
                      >
                        {" "}
                        Actions{" "}
                      </p>
                      <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400 mt-1">
                        {" "}
                        You can approve or reject this transaction.{" "}
                      </p>
                      <div className="mt-4">
                        <span
                          htmlFor="txid"
                          className="text-sm font-medium text-gray-500"
                        >
                          Transaction ID
                        </span>
                        <div className="relative">
                          {/**/}
                          <div className="group/nui-input relative">
                            <input
                              id="txid"
                              type="text"
                              className="mt-1 nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 px-3 rounded"
                              placeholder="Enter transaction ID"
                            />
                            {/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </div>
                        </div>
                      </div>
                      <div className="mt-1">
                        <span
                          htmlFor="note"
                          className="text-sm font-medium text-gray-500"
                        >
                          Note
                        </span>
                        <div className="relative">
                          {/**/}
                          <div className="group/nui-input relative">
                            <input
                              id="note"
                              type="text"
                              className="mt-1 nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 px-3 rounded"
                              placeholder="Enter note"
                            />
                            {/**/}
                            {/**/}
                            {/**/}
                            {/**/}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-x-2 mt-2">
                        <button
                          data-v-71bb21a6
                          type="button"
                          className="is-button rounded is-button-default bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
                        >
                          Decline
                        </button>
                        <button
                          data-v-71bb21a6
                          type="button"
                          className="is-button rounded is-button-default bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-x-2 justify-end">
                    <div className="p-4 md:p-6">
                      <div className="flex gap-x-2">
                        <button
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

      {/* Modal 1 */}
    </div>
  );
};

export default UserTransactions;
