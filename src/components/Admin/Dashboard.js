import React, { useState } from "react";
import SideBar from "../../layout/AdminSidebar/Sidebar";

const Dashboard = () => {
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
                {" "}
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
                  Admin dashboard
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
                <button
                  type="button"
                  className="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
                >
                  <img
                    className="h-7 w-7 rounded-full"
                    src="https://app.encryptwallet.io/img/langs/en.svg"
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
                              <path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"></path>
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
              ></div>
              <seokit />
              <div className="relative overflow-hidden">
                <div className="flex flex-col gap-6">
                  <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md p-6">
                    <div className="xs:divide-y divide-muted-200 dark:divide-muted-700 flex w-full flex-col items-center sm:flex-row sm:divide-x">
                      <div className="flex-1">
                        <div className="flex flex-col p-4 text-center sm:py-0">
                          <svg
                            data-v-cd102a71
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-primary-500 mx-auto h-8 w-8"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                          >
                            <g fill="currentColor">
                              <path
                                d="M136 108a52 52 0 1 1-52-52a52 52 0 0 1 52 52"
                                opacity=".2"
                              />
                              <path d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"></path>
                            </g>
                          </svg>
                          <h4 className="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold">
                            {/* <div>50</div> */} 
                              <div>
                                <div className="nui-placeload animate-nui-placeload h-4 w-8 rounded mx-auto"></div>
                              </div>
                          
                          </h4>
                          <p className="text-muted-400 font-sans text-sm">
                            Agency Users
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col p-4 text-center sm:py-0">
                          <svg
                            data-v-cd102a71
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-primary-500 mx-auto h-8 w-8"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                          >
                            <g fill="currentColor">
                              <path
                                d="M240 132c0 19.88-35.82 36-80 36c-19.6 0-37.56-3.17-51.47-8.44C146.76 156.85 176 142 176 124V96.72c36.52 3.34 64 17.86 64 35.28m-64-48c0-19.88-35.82-36-80-36S16 64.12 16 84s35.82 36 80 36s80-16.12 80-36"
                                opacity=".2"
                              />
                              <path d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43M232 132c0 13.22-30.79 28-72 28c-3.73 0-7.43-.13-11.08-.37C170.49 151.77 184 139 184 124v-18.26c29.87 4.45 48 16.53 48 26.26M72 150.25v-23.79A183.74 183.74 0 0 0 96 128a183.74 183.74 0 0 0 24-1.54v23.79A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75m96-40.32V124c0 8.39-12.41 17.4-32 22.87V123.5c12.91-3.13 23.84-7.79 32-13.57M96 56c41.21 0 72 14.78 72 28s-30.79 28-72 28s-72-14.78-72-28s30.79-28 72-28m-72 68v-14.07c8.16 5.78 19.09 10.44 32 13.57v23.37C36.41 141.4 24 132.39 24 124m64 48v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a121.92 121.92 0 0 0 12.61 3.76v23.46c-19.59-5.47-32-14.48-32-22.87m48 26.25V174.4a179.48 179.48 0 0 0 24 1.6a183.74 183.74 0 0 0 24-1.54v23.79a165.45 165.45 0 0 1-48 0m64-3.38V171.5c12.91-3.13 23.84-7.79 32-13.57V172c0 8.39-12.41 17.4-32 22.87"></path>
                            </g>
                          </svg>
                          <h4 className="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold">
                            <div>$0</div>
                          </h4>
                          <p className="text-muted-400 font-sans text-sm">
                            Monthly Income
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col p-4 text-center sm:py-0">
                          <svg
                            data-v-cd102a71
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-primary-500 mx-auto h-8 w-8"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                          >
                            <g fill="currentColor">
                              <path
                                d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
                                opacity=".2"
                              />
                              <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM176 88a48 48 0 0 1-96 0a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0"></path>
                            </g>
                          </svg>
                          <h4 className="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold">
                            <div>0</div>
                          </h4>
                          <p className="text-muted-400 font-sans text-sm">
                            {" "}
                            Completed Transactions{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col p-4 text-center sm:py-0">
                          <svg
                            data-v-cd102a71
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon text-primary-500 mx-auto h-8 w-8"
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20"
                          >
                            <g fill="currentColor">
                              <path d="M2 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9l-3 3v-3H4a2 2 0 0 1-2-2z"></path>
                              <path d="M15 7v2a4 4 0 0 1-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            </g>
                          </svg>
                          <h4 className="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold">
                            <div>51</div>
                          </h4>
                          <p className="text-muted-400 font-sans text-sm">
                            Completed Tickets
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12">
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md p-6">
                        <div className="mb-10 flex items-center justify-between">
                          <h3 className="font-heading text-base font-semibold leading-tight text-muted-800 dark:text-white">
                            <span>Pending tickets</span>
                          </h3>
                          <a
                            href="/admin/tickets"
                            className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                          >
                            View All{" "}
                          </a>
                        </div>
                        <div className="divide-muted-200 dark:divide-muted-700 space-y-6 divide-y">
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="abradley"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=abradley&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  how do i move back to my bank account
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  hi how do i transfer from my wallett direct to
                                  my bank account please in pounds
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-22T11:02:30.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a31a78b-5b80-4737-b038-200f31267a0d"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="abradley"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=abradley&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>i cant sell gbp to my debit card</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  hi i want to move the money in my assetts to
                                  my debit card nothing is occuring when i put
                                  the details
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-22T19:43:19.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a3261ce-95e0-41e6-a9a3-5f95e9033dac"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="AdrianSamuelDXB"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=AdrianSamuelDXB&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Transaction Pending</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Can You please confirm when Transaction ID
                                  9a1fdc2d-7683-4f0a-b4bd-ac7e085693e7 will be
                                  released? I require the funds to be released
                                  enabling me to transfer the 10% +1% amount to
                                  release the USD39k value. The transfer against
                                  Transaction ID
                                  9a1fdc2d-7683-4f0a-b4bd-ac7e085693e7 (USD4.1k)
                                  is NOT part of the amount on-hold
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-15T11:06:21.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a239408-8e99-41b3-b188-831568cd1ca2"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="AdrianSamuelDXB"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=AdrianSamuelDXB&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Release Transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Please release
                                  9a1fdc2d-7683-4f0a-b4bd-ac7e085693e7 It has
                                  nothing to do with the authorization of this
                                  account or to release the USD39k pending
                                  transaction
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-10-05T15:01:03.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a4c23a7-649e-48e7-80c4-586547992e1a"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Azhar21"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Azhar21&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>What can i do</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Why my btc is pending if i see this on the
                                  block chain How can i withdraw money
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-07T13:12:17.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a138721-3676-433a-8440-5817d735ee84"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Charles"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Charles&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>btc pending</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>why is my btc pending?</span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-08T09:26:22.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a155b62-f545-4e03-b35a-d2a44d6a4659"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="bilalahmed1990"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=bilalahmed1990&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Transaction pending</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  can you please check why my transaction is
                                  pending
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-08T09:02:33.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a1552df-22d2-40ca-9f79-7aff0b61726f"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="1523ara"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=1523ara&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>pending crypto</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>how can i withdraw my BTC</span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-11T10:17:44.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a1b76b5-f036-495b-9c20-6e7f47fa539a"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Dave Wood"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Dave Wood&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Spending transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  It says that my transaction is pending? Why is
                                  that? It says I am missing authorisation?what
                                  should I do?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-11T08:15:31.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a1b4b01-470d-4100-a542-f4aad33059fe"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="AH051"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=AH051&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>pending transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  i have deposited some BTC i can see the
                                  deposit as live but the sum of $824496.93 is
                                  still pending my contact is MK no 315875KL
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-11T10:03:19.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a1b718d-e61a-4726-884f-cc5498ac43f4"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="AH051"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=AH051&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Is my wallet fully active?</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I have completed all the requirements that you
                                  have told me. Why won't my transactions get
                                  processed. Any transaction that I make goes
                                  into pending. And doesnt get processed. How
                                  long should it take to be processed. I want an
                                  answer as soon as possible.
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-13T10:31:59.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a1f81c6-5363-417c-9533-7646cd5e776b"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="bishacyriac"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=bishacyriac&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Transfer of Funds (Ethereum)</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I will be transferring the funds (0.75
                                  Ethereum) into this wallet. Since I'm going to
                                  a physical exchange and it will be open only
                                  around 10am Dubai time, I can do the transfer
                                  only after that. Moreover they will transfer
                                  only to Trustwallet. So from there to this
                                  again. Please give the time to complete this.
                                  But I'll do as soon as possible.
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-10-31T07:51:31.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a28fbf6-0b60-4337-827e-15aacd2c9c2b"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="bishacyriac"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=bishacyriac&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Withdrawal</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Please release my funds. Why do you block it.
                                  I have made all the required deposits as per
                                  your condition.
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-20T06:41:52.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aa7fa67-4088-4165-ad8b-a5922d242b13"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Vincent1605"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Vincent1605&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>why is my money still not available</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>Why is my money still not available</span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-13T09:28:45.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a1f4ed8-0274-4a7a-8b80-38c0ed845051"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Vincent1605"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Vincent1605&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>payout</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  hello, i have 4000 usd in my account, i tried
                                  to send it to my bank account but it doesn't
                                  work
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-25T15:51:55.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a381800-144e-4603-8de9-5ae4994323f9"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Satsanga"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Satsanga&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>pending</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  my transection is pending what to do
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-14T11:00:58.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a218f1f-c7dd-468c-91da-c3d13559bfcd"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="official_change"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=official_change&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Pending transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I have a pending transaction. What do i have
                                  to do?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-14T11:50:03.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a21a0ae-2b02-411c-8f09-3e0b8b9acfe5"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="official_change"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=official_change&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Close and delete account</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  What do I have to do to close this account and
                                  delete it from your database?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-14T12:08:56.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a21a76e-33b5-45da-9dce-97db0ea77432"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Paul1985"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Paul1985&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>5%???</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Are you asking me to pay 5% to recieve the
                                  bitcoins sent??
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-15T08:54:33.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a2364e6-72be-4a7f-ac45-43afef4c74bf"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Ramon.zuniga"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ramon.zuniga&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Ramon.zuniga</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>why is the authorization missing?</span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-28T06:42:03.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a235cce-190a-4e13-97ec-e6715d2a0df4"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Ramon.zuniga"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ramon.zuniga&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Ramon.zuniga</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  why is the transaction waiting for
                                  authorization? thanks sorry.
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-15T08:40:16.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a235db4-e8d5-4853-b2af-b246d555f150"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Roy T R"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Roy T R&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Pending transactions</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Why are my transactions not going
                                  through...they're pending?? Its 3 hours
                                  already...something is not right ????
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-18T18:00:26.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a2a3113-bea1-4f01-b4f2-4a2434df3990"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="amg1680"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=amg1680&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>BTC not arrived</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hi I send BTC to my wallet and I can’t see it
                                  this on my account, can you let me know if
                                  there is an issue?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-20T05:46:42.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a2d30a3-bced-4125-8d0b-cba538e7b7e8"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="amg1680"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=amg1680&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Send BTC</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hi I made a transfer BTC to BTC, what do I
                                  need to approve this?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-10-05T17:28:25.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a2df697-1580-4c8b-99d3-e70d80c4d2ff"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="amg1680"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=amg1680&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Pending transactions and withdrawal</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hi, I need to open a new ticket as the other
                                  one is close, can you let me know when it will
                                  be approved my pending transactions and be
                                  able to withdraw my funds?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-10-05T17:32:50.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a4c59ee-b6d2-415e-bcf2-091d6fa849d8"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="amg1680"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=amg1680&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>withdraw</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  No more replies on here, have you dissapear
                                  with my funds??
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-16T14:36:34.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aa0983b-4b43-4527-a59c-5bc94f3767e2"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="nauriska"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=nauriska&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Nauris Kalnins Authorization</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I did authorization on SEPA transacction,
                                  please hold my account that I will be able to
                                  release my funds. BeneficiaryLight Technology
                                  Limited Beneficiary's residence country United
                                  Kingdom Beneficiary's account
                                  GB74MODR04007401720791
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-20T18:18:54.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a2e3da6-17b1-4cb6-b535-480eb82014af"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="nauriska"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=nauriska&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>My deposit</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hello. I would like to take out my deposit
                                  (first payment) which has ment to be first
                                  deposit to unlock my holded money. Becouse
                                  this was not enough .
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-26T09:34:01.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a3993d7-043c-41cd-ad10-7000b053c2d8"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="waqas786$"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=waqas786$&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Muhammad waqas</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>why my transfer not approved ?</span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-09-21T08:54:18.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a2f76b7-3e50-4b9b-acf1-ab9e0b68fa1a"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Ortner Franz"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ortner Franz&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  Wieso habe ich keinen zugriff auf meine BTC
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hallo ! Warum habe ich keinen Zugriff auf
                                  meine BTC die ich auf meine Adresse bekommen
                                  habe
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-10-26T15:49:52.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a7673c7-a3da-4d12-a9e0-d0c784671c81"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Ortner Franz"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ortner Franz&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Antwort</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Warum bekomme ich keine Antwort auf: Warum
                                  kann ich meine BTC nicht abheben ???
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-02T16:23:34.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a8494b7-ea23-4d9e-b6ed-ac7755f5993f"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Ortner Franz"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ortner Franz&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>BTC nicht angekommen</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Ich habe BTC von Coinbase geschickt an meine
                                  Adresse Kommen aber nicht an oder sind nicht
                                  im Guthaben
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-16T16:46:32.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aa0c6b5-e722-4cc8-80ee-a59694c410ae"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="tkroetch"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=tkroetch&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  have a transactions how do I continue???
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Have a transaction, how do I continue
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-22T14:34:44.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aaca97a-5166-48af-8402-b526d4c68b72"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="tkroetch"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=tkroetch&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>authorization</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>how to I authorize a transactions</span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-22T15:25:55.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aacbbc8-c7fe-48d1-8c58-6b35fda302ad"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="stcyvon"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=stcyvon&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>PENDING</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  What is needed to authorize the release of
                                  these funds.
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-02T17:44:15.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a84b193-3b4e-4089-9118-e806bc79bbaa"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Briney10"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Briney10&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>BTC withdrawal failed</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hi, I want to withdraw my BTC to my exchange
                                  wallet NDAX and it failed. What is the reason
                                  why it failed?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-12-04T14:08:17.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ac4c3d4-2611-4cb9-9095-552b1606d414"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="WendyM"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=WendyM&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Is there someone to chat to please</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Can I please talk to a support person please.
                                  Thanks
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-09T13:16:48.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a9266d0-4ac8-4b65-9707-3664da7df95c"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="bengan"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=bengan&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>BTC pending transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  hello. i have started a process of releasing
                                  my funds from the blockchain. my agent is
                                  MIKE. L. my BTC is pending. what is the next
                                  step.
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-13T11:56:42.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9a9a561b-9f32-4630-a070-3a3509bc233a"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="djmornan"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=djmornan&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>My deposit has not arrived?</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  November 16, 2023 0.00255508 BTC BITCOIN To
                                  Address:
                                  bc1qftr5m36lfpsjpxvgg992gt556sy6ve99emfunv
                                  Ticket ID: 872264 Fees: 0.000399 BTC 9:41 PM
                                  Date: 11/16/23, 9:41 PM Status: Fully
                                  Processed Network: BITCOIN TxID:
                                  b4ed38ee8f484df640fa5acbbf711fd3e7db8cf15f95ee2ad95707b2d447523b
                                  Ticket ID: 872264 To Address:
                                  bc1qftr5m36lfpsjpxvgg992gt556sy6ve99emfunv
                                  Comment: Transfer from NDAX to integrate
                                  account
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-18T14:41:41.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aa4a007-1fb5-4d9a-83a5-c05023dd4186"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="djmornan"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=djmornan&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Withdrawal</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Why is my withdrawal still pending after 9
                                  days!!!! Please advise on this asap. Thank
                                  you!
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-12-11T17:11:22.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ad31a31-17cf-4caf-9630-b842d59906f5"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Tib1234"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Tib1234&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  Why I can’t see the blockchain transactions?
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Please let me know when I can see the money?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-21T09:35:52.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aaa3b9d-3ec3-44f6-9219-19a5dbddb3d4"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Peter Isaksson"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Peter Isaksson&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  I don't have enough money to complete
                                  authorization
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Please, I sent a bank statement, help me with
                                  the authorization amount, I don't have the
                                  required amount
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-21T14:00:21.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aaa9a32-d9cf-4f82-8558-5862991c4f23"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Peter Isaksson"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Peter Isaksson&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Rewdaual</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  How do i do a rewdraual from my accont?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-30T13:54:07.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9abcb2d3-b52b-471d-a4c5-bfb364caaeab"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Sharose"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Sharose&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Not received transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I sent a transaction from my other crypto
                                  account to this . It has not shown up . But it
                                  shows on the block chain it's been received.
                                  For 500$ . What happened ?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-21T19:19:07.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aab0c33-0de1-4cb2-b881-da9b159155f5"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="FDankwarth"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=FDankwarth&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Withdrawal problems</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I have requested two different withdrawals and
                                  neither is coming through. Why is that?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-22T18:03:26.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aacf41d-ce4f-46de-816e-6ad267d5ccc4"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="FDankwarth"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=FDankwarth&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Withdraw</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I only want to withdraw the 0.027511 BTC that
                                  I deposited myself. How does it work?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-24T13:34:19.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ab099d6-ed01-4e95-8dc8-9137cce267d1"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="FDankwarth"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=FDankwarth&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  Are you no longer getting answers to your
                                  questions?
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I asked several questions in the other two
                                  tickets and have not received any response so
                                  far.
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-29T12:11:49.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aba8b41-f665-4a93-8af1-fbb4aa2fb6aa"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Aldenh50"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Aldenh50&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  My transaction is just pending,why is it
                                  taking so long to approve
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-23T13:25:30.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aae93b4-414e-42a1-b931-efcf90eec68f"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Yann74"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Yann74&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>transaction</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  I'm trying to send some BTC back to Binance
                                  and why does it still pending? I should
                                  received another transaction but still in
                                  pending since yesterday. Can you also help me
                                  to be able to closes those two transactions?
                                  regards, Yann Personnic
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-28T13:41:32.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ab8a85c-42fa-4dbc-9e99-1689ea5078d7"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="colin1"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=colin1&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  do i have to creat alink on blockchain
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  in order do i have to creat a link on block
                                  chain to verify its me
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-27T15:23:25.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ab6c9ce-e619-4f01-8261-190b8d98cd89"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="Ngxatheleni"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ngxatheleni&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  How can I withdraw the funds in my account.
                                  What do I need to do?
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by User</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  How can I withdraw the funds in my account.
                                  What do I need to do?
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-27T11:53:28.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ab67eb9-5933-4422-b327-45acdbd8bf19"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="112 Cheldon78"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=112 Cheldon78&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>How Do I withdraw my funds</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  ? What do I need to do in order to receive my
                                  funds
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-29T10:40:14.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9aba6a80-f6e3-4a8f-b4fb-246632cb57bb"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="112 Cheldon78"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=112 Cheldon78&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  Hi can someone pls assist how do I make a
                                  withdrawal on my account
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  ? What is the procedure to make to a
                                  withdrawal and to reinvest can someone pls
                                  assist
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-11-30T11:25:11.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9abc7d8f-cd6e-49f2-aab4-d021ffb646e4"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="112 Cheldon78"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=112 Cheldon78&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>
                                  Hi how much funds can I transfer to activate
                                  my acc
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hi what is the procedure for me to receive my
                                  funds and what do I do to reinvest
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-12-05T15:26:33.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ac6e2cd-62ae-4277-a663-899c59bc633a"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 sm:flex-row border mb-3 dark:border-gray-700 pt-6">
                            <div
                              className="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
                              data-tooltip="112 Cheldon78"
                            >
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=112 Cheldon78&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-16 w-16"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                            <div className="max-w-md">
                              <h3 className="font-heading text-base font-medium leading-normal leading-normal text-muted-800 dark:text-muted-100 mb-1">
                                <span>Hi pls release my funds</span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md bg-primary-500 dark:bg-primary-500 text-white ml-2">
                                  <span>In Progress</span>
                                </span>
                                <span className="inline-block px-3 font-sans transition-shadow duration-300 py-1.5 text-xs rounded-md ml-2">
                                  <span>Last Message by Admin</span>
                                </span>
                              </h3>
                              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 mb-1">
                                <span>
                                  Hello I demand that my funds be released to me
                                  by order of my agent Jack so pls assist us in
                                  the matter
                                </span>
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                <span>Updated 2023-12-05T15:39:28.000000Z</span>
                              </p>
                            </div>
                            <div className="w-full sm:ms-auto sm:w-auto">
                              <a
                                data-v-71bb21a6
                                href="/admin/tickets/9ac6e76b-d4eb-4746-9662-3881753b1e3e"
                                className="is-button rounded is-button-default w-full sm:w-auto"
                                disabled="false"
                              >
                                <span>View</span>
                              </a>
                            </div>
                          </div>
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
    </div>
  );
};

export default Dashboard;
