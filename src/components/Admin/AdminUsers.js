import React, { useState } from "react";
import SideBar from "../../layout/AdminSidebar/Sidebar";

const AdminUsers = () => {
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
                  className="flex h-10 w-10 items-center justify-center -ms-3"
                >
                  <div className="relative h-5 w-5 scale-90">
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-1 max-w-[75%] -rotate-45 top-0.5" />
                    <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300 translate-x-4 opacity-0" />
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-1 max-w-[75%] rotate-45 bottom-0" />
                  </div>
                </button>
                <h1 className="font-heading text-2xl font-light leading-normal leading-normal text-muted-800 hidden dark:text-white md:block">
                  Users Management
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
              <div className>
                <div>
                  <div className="mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex w-full items-center gap-4 sm:w-auto">
                      <div className="relative w-full sm:w-auto">
                        {/**/}
                        <div className="group/nui-input relative">
                          <input
                            id="ninja-input-10"
                            type="text"
                            className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-full"
                            placeholder="Search users..."
                          />
                          {/**/}
                          {/**/}
                          <div className="text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75 h-10 w-10">
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon h-[1.15rem] w-[1.15rem]"
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
                                <circle cx={11} cy={11} r={8} />
                                <path d="m21 21l-4.3-4.3" />
                              </g>
                            </svg>
                          </div>
                          {/**/}
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end gap-4 sm:w-auto" />
                  </div>
                  <div>
                    <div className="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-13 22:53:45
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-purple-500/20 text-purple-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Harley&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Harley
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              hmilmine@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ad6fbc9-5550-4600-870a-17c9bd7d0eee"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-13 15:39:41
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=xaylewaxar&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              xaylewaxar
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              a85931005@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ad6b3fb-87f9-4479-b8eb-b8e245ee0ae9"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-12 18:40:29
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-yellow-400/20 text-yellow-400">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ftanuza1&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Ftanuza1
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              ftanuza@shoppersdrugmart.ca
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ad51cdf-f0cf-4819-9629-b037aa2cf82b"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-07 10:47:05
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-pink-500/20 text-pink-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=biknik&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              biknik
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              biknik511@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aca81cb-31db-4f6c-8e35-d66e90aaac19"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-06 15:37:48
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-amber-500/20 text-amber-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Scottoline22&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Scottoline22
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              scottlambell@aol.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ac8e2db-dbd1-44bd-bd8d-9b332d0fe4c8"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-06 15:23:17
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-purple-500/20 text-purple-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=ELLEN123&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              ELLEN123
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              ellenp.larkins@googlemail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ac8e04f-add1-4c1d-91a7-ca791c3704a6"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-04 19:04:14
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Victorat75@0110&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Victorat75@0110
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              abounajeremiah@hotmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ac51aa7-1d3e-422e-9883-2f6e62300d55"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-30 20:59:43
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=wisdom&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              wisdom
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              wisdomokoye123@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aba7b8b-891e-4ba0-9ec5-88e5cd18171b"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-10 18:30:22
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-purple-500/20 text-purple-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=112 Cheldon78&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              112 Cheldon78
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              fisherkevin689@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ab91e1b-d12c-418a-ac4c-acf93e101415"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-30 13:06:41
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Margtravis2&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Margtravis2
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              margtravis52@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ab854a4-2ab5-4056-b963-dcec364e9138"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-27 17:42:05
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-amber-500/20 text-amber-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=stefolaf&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              stefolaf
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              stefolaf@online.no
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ab6d72d-74a1-421e-95af-95619478f618"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-27 12:21:49
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-amber-500/20 text-amber-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Nelson&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Nelson
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              zmangombo@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ab67f25-96e2-4876-b3ca-5f775cf22e66"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-01 22:19:42
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-yellow-400/20 text-yellow-400">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Ngxatheleni&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Ngxatheleni
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              zoxola@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ab67993-473b-4ac7-8d97-a36eb8eb57a6"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-29 12:31:04
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-yellow-400/20 text-yellow-400">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=colin1&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              colin1
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              colin.leech@bigpond.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ab66698-b6ea-43e2-9304-5e565206dba4"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-05 17:28:52
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Yann74&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Yann74
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              yann.pers@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9ab659b5-2ee3-460e-ac73-390819694deb"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-24 19:02:23
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=DanielSilva&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              DanielSilva
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              lusitanodaniel@hotmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aacd7c2-3807-4dc2-9b9c-3555e8cd5bb6"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-23 13:30:56
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-lime-500/20 text-lime-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Aldenh50&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Aldenh50
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              Aldenhendriks8686@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aacc650-4654-4e5f-acbd-1d1ff62bf3f0"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-01 14:59:45
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=FDankwarth&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              FDankwarth
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              faydankwarth@yahoo.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aac47fc-52a1-4875-b6f1-6285983018e0"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-22 10:51:05
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Paul Preval&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Paul Preval
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              paulpreval@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aac4207-e61f-4fbc-a4b3-09ebb00d2a5b"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-21 20:16:09
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-amber-500/20 text-amber-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Sharose&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Sharose
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              sharonrc88@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aaac743-bcff-4930-9fc8-f2f846c7e24c"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-26 11:41:55
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Fran Simon&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Fran Simon
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              puenteareas1994@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aaaaa0c-c372-4848-b5d0-2476c97b1ecb"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-22 16:52:21
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-lime-500/20 text-lime-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=fredkay&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              fredkay
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              kaitarefred123@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aaaa3b3-b352-479c-82fa-734ccc38fdf3"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-30 13:55:51
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-pink-500/20 text-pink-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Peter Isaksson&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Peter Isaksson
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              peter.isaksson123@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aaa7412-401f-4766-9e65-971e84f5336a"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-06 16:12:32
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-success-500/20 text-success-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=danivalais77&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              danivalais77
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              daniel.grafzh65@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aaa6bf2-88a8-44c5-a873-bd495682539a"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-21 11:35:49
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Mhedl91&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Mhedl91
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              magnus.hedly@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aaa6410-d193-4ccf-8f62-70c105868d25"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-22 09:31:03
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-lime-500/20 text-lime-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Tib1234&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Tib1234
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              itechin2005@yahoo.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aa8c6a3-163b-4748-b1d8-36783f9b3d28"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-20 16:07:34
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-yellow-400/20 text-yellow-400">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Eloamy&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Eloamy
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              lolottedu03@msn.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aa8b9ca-65b3-4f99-a84a-23a4b8e8def2"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-26 14:16:27
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-success-500/20 text-success-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=rai1231&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              rai1231
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              raybrough7@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aa8986d-02f5-417c-ae8c-5d6d59d3f53c"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-17 12:29:53
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Supertrucker&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Supertrucker
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              moneypit657@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aa24414-11f4-4f33-9882-96869c0ef178"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-17 10:01:16
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=kumantjai&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              kumantjai
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              kumantjai@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aa21dce-3ee1-4002-8ac6-f57493e172bb"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-16 10:05:34
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Margal&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Margal
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              marg.al633@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9aa03413-dbdf-459a-82bd-7e0315a3b6f0"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-12 22:52:10
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-yellow-400/20 text-yellow-400">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=djmornan&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              djmornan
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              juliemornan@rogers.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9e9cb4-a004-43a1-90b1-80cc25586765"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-15 15:03:15
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-amber-500/20 text-amber-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Paula&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Paula
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              paclaydon014@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9e97ff-cbe0-48f8-af47-020e63d4688b"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-15 15:39:39
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Anne-Sofie&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Anne-Sofie
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              annesofieroyer@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9e96bc-3b42-4509-8158-8450fe311ed8"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-15 09:14:28
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-primary-500/20 text-primary-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Michael12345&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Michael12345
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              michael.warden63@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9e1a77-68ac-47fe-af9f-3b3a89362217"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-14 11:25:32
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-pink-500/20 text-pink-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=robertbuick&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              robertbuick
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              buickrobertbuick@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9a79cb-0f0c-47e1-b7f0-bdd2673905af"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-14 10:50:10
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-purple-500/20 text-purple-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Buick&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Buick
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              robertbuick@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9a74dc-ee78-47f0-95ed-78d5cb1d05fa"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-13 12:05:22
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-success-500/20 text-success-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=bengan&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              bengan
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              bengan.widell@hotmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9a4fd3-1af2-4762-b870-adbd7f9d3b2c"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-15 20:36:15
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-rose-500/20 text-rose-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Dirk.C&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Dirk.C
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              clarys.dd@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9a3e3d-9a60-486b-96e2-28629328de27"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-10 10:18:16
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-pink-500/20 text-pink-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Andrew&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Andrew
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              ahemphill1751@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a942174-41aa-47d3-9d15-bfeb8253e04a"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-10 18:31:14
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=LorencSin&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              LorencSin
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              lorenc_s@hotmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a9295dc-9e29-4125-bb51-7314585073b3"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-09 09:59:09
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=michelletirtabudi&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              michelletirtabudi
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              michelletirtabudi@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a921ac8-c580-422a-8072-e0d9a9bee0ba"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-30 22:52:01
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-info-500/20 text-info-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=WendyM&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              WendyM
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              murphyw016@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a908df6-0d07-4238-ac38-9ec93d76bb68"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-07 16:21:19
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-success-500/20 text-success-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Mark Sives&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Mark Sives
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              m.sives@yahoo.co.uk
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a8e5e35-b3a3-453c-87c3-842b9c9c0844"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-19 12:38:13
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-yellow-400/20 text-yellow-400">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Madmarky2&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Madmarky2
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              mark69md@yahoo.co.uk
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a8e4316-5abe-4964-af26-99a8869978aa"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-17 21:09:05
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-rose-500/20 text-rose-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=MelanieT&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              MelanieT
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              meltrudel33@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a8466df-c820-4ce3-91a5-144afa4c7b54"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-02 11:16:25
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-indigo-500/20 text-indigo-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Gaviria&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Gaviria
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              janeth2003@hotmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a8425fb-92c4-4b1c-a7ab-0dc186dbc84d"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-05 10:59:40
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-purple-500/20 text-purple-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=Briney10&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              Briney10
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              briney.arulnesan@outlook.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a8421a9-d1f8-419d-b3e1-0e3b88e94108"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-11-01 19:33:40
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-pink-500/20 text-pink-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=matt1989&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              matt1989
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              matthew_latreille@hotmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a82785b-d4ed-4f1f-8254-87db24db851c"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden">
                        <div className="nui-bg-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p
                                className="font-heading text-base font-medium leading-none"
                                tag="h3"
                              >
                                {" "}
                                Offline{" "}
                              </p>
                              <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                {" "}
                                Last Seen: 2023-12-11 04:33:10
                              </p>
                            </div>
                            <div>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon text-danger-500 h-7 w-7"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.163q-1.363-1.362-2.163-3.2t-.8-3.937q0-3.65 2.325-6.438T10.225 2q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5t4.837.275q-.65 3.6-3.45 5.925T12.075 22Zm0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412Q10.05 10.85 9.15 8.925T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20Zm-.5-7.625ZM18 10l-1.25-2.75L14 6l2.75-1.25L18 2l1.25 2.75L22 6l-2.75 1.25L18 10Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex w-full items-center justify-center">
                            <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-20 w-20 rounded-full bg-pink-500/20 text-pink-500">
                              <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                                <img
                                  src="https://api.dicebear.com/6.x/pixel-art/svg?seed=pdebondeli&options[mood][]=happy"
                                  className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-20 w-20"
                                />
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          <div className="text-center">
                            <p
                              className="font-heading text-base font-medium leading-none"
                              tag="h3"
                            >
                              pdebondeli
                            </p>
                            <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                              pdebondeli@gmail.com
                            </p>
                          </div>
                          <div className="flex items-center mt-5">
                            <a
                              data-v-71bb21a6
                              href="/admin/users/9a82255a-59e0-4127-833d-fe12b219797e"
                              className="is-button rounded is-button-default w-full"
                              disabled="false"
                            >
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon h-4 w-4"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64"
                                    opacity=".2"
                                  />
                                  <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56" />
                                </g>
                              </svg>
                              <span>Manage User</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="inline-flex w-full flex-col md:flex-row md:justify-between">
                        <ul className="border-muted-200 bg-muted-100 dark:border-muted-600 dark:bg-muted-700 mb-4 inline-flex flex-wrap gap-2 border p-1 md:mb-0 md:gap-1 rounded-xl">
                          <li>
                            <a
                              aria-current="page"
                              href="/admin/users"
                              className="router-link-active router-link-exact-active flex h-10 w-10 items-center justify-center border font-sans text-sm transition-all duration-300 bg-primary-500 border-primary-500 shadow-primary-500/50 dark:shadow-primary-500/20 text-white shadow-sm rounded-xl"
                              tabIndex={0}
                            >
                              1
                            </a>
                          </li>
                          {/**/}
                          {/**/}
                          {/**/}
                        </ul>
                        <div className="border-muted-200 bg-muted-100 dark:border-muted-600 dark:bg-muted-700 flex items-center justify-end gap-1 border p-1 rounded-xl">
                          <a
                            aria-current="page"
                            href="/admin/users"
                            className="router-link-active router-link-exact-active border-muted-200 text-muted-500 hover:bg-muted-100 hover:text-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:hover:bg-muted-900 dark:hover:text-muted-400 flex h-10 w-full items-center justify-center bg-white font-sans text-sm transition-all duration-300 md:w-10 rounded-xl"
                            tabIndex={0}
                          >
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon block h-4 w-4"
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
                                d="m15 18l-6-6l6-6"
                              />
                            </svg>
                          </a>
                          <a
                            aria-current="page"
                            href="/admin/users"
                            className="router-link-active router-link-exact-active border-muted-200 text-muted-500 hover:bg-muted-100 hover:text-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:hover:bg-muted-900 dark:hover:text-muted-400 flex h-10 w-full items-center justify-center bg-white font-sans text-sm transition-all duration-300 md:w-10 rounded-xl"
                            tabIndex={0}
                          >
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon block h-4 w-4"
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
                                d="m9 18l6-6l-6-6"
                              />
                            </svg>
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
          {/* <div className="mx-auto max-w-xs">
            <svg
              data-v-cd102a71
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="icon h-12 w-12 text-primary-500"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity=".25"
              />
              <path
                fill="currentColor"
                d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </svg>
          </div> */}

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

export default AdminUsers;
