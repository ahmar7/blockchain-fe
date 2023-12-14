import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
      <div id="__nuxt" data-v-app>
        <div>
          <demoappsearch />
          <demoapplayoutswitcher />
          <vueaxepopup />
          <div>
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
            <div className="dark:bg-muted-800 flex min-h-screen bg-white">
              <div className="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5">
                <div className="mx-auto w-full h-full flex items-center justify-center max-w-4xl">
                  <img
                    className="max-w-xl mx-auto"
                    src="https://app.encryptwallet.io/img/illustrations/station.svg"
                    alt=""
                    width={619}
                    height={594}
                  />
                </div>
              </div>
              <div className="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none">
                <div className="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white">
                  <div className="flex w-full items-center justify-between">
                    <NavLink
                      to="/"
                      className="text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300"
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
                          fill="currentColor"
                          d="m1.027 11.993l4.235 4.25L6.68 14.83l-1.821-1.828L22.974 13v-2l-18.12.002L6.69 9.174L5.277 7.757z"
                        ></path>
                      </svg>
                      <span>Back to Home</span>
                    </NavLink>
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
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-medium mt-6">
                      {" "}
                      Welcome to{" "}
                      <span className="text-primary-500">My Wallet</span>
                    </h2>
                    <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-400 mb-6">
                      Let's start by creating you account{" "}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="mt-5">
                      <form method="POST" action className="mt-6" noValidate>
                        <div className="space-y-4">
                          <div className="relative">
                            <label
                              className="nui-label w-full pb-1 text-[0.825rem]"
                              htmlFor="ninja-input-12"
                            >
                              Full Name
                            </label>
                            <div className="group/nui-input relative">
                              <input
                                id="ninja-input-12"
                                type="text"
                                className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-xl"
                                placeholder="Ex: John Doe"
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
                                  <path
                                    fill="currentColor"
                                    d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                                  ></path>
                                </svg>
                              </div>
                              {/**/}
                            </div>
                          </div>
                          <div className="relative">
                            <label
                              className="nui-label w-full pb-1 text-[0.825rem]"
                              htmlFor="ninja-input-13"
                            >
                              Username
                            </label>
                            <div className="group/nui-input relative">
                              <input
                                id="ninja-input-13"
                                type="text"
                                className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-xl"
                                placeholder="Ex: johndoe"
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
                                  <path
                                    fill="currentColor"
                                    d="M3.25 9.65q-.175-.125-.213-.312t.113-.388q1.55-2.125 3.888-3.3t4.987-1.175q2.65 0 5 1.138T20.95 8.9q.15.225.1.4t-.2.3q-.15.125-.35.113t-.35-.213q-1.375-1.95-3.537-2.987t-4.588-1.038q-2.425 0-4.55 1.038T3.95 9.5q-.15.225-.35.25t-.35-.1m11.6 12.325q-2.6-.65-4.25-2.588T8.95 14.65q0-1.25.9-2.1t2.175-.85q1.275 0 2.175.85t.9 2.1q0 .825.625 1.388t1.475.562q.85 0 1.45-.562t.6-1.388q0-2.9-2.125-4.875T12.05 7.8q-2.95 0-5.075 1.975t-2.125 4.85q0 .6.113 1.5t.537 2.1q.075.225-.012.4t-.288.25q-.2.075-.387-.012t-.263-.288q-.375-.975-.537-1.937T3.85 14.65q0-3.325 2.413-5.575t5.762-2.25q3.375 0 5.8 2.25t2.425 5.575q0 1.25-.887 2.087t-2.163.838q-1.275 0-2.187-.837T14.1 14.65q0-.825-.612-1.388t-1.463-.562q-.85 0-1.463.563T9.95 14.65q0 2.425 1.438 4.05t3.712 2.275q.225.075.3.25t.025.375q-.05.175-.2.3t-.375.075M6.5 4.425q-.2.125-.4.063t-.3-.263q-.1-.2-.05-.362T6 3.575q1.4-.75 2.925-1.15t3.1-.4q1.6 0 3.125.388t2.95 1.112q.225.125.263.3t-.038.35q-.075.175-.25.275t-.425-.025q-1.325-.675-2.738-1.037t-2.887-.363q-1.45 0-2.85.338T6.5 4.425m2.95 17.2q-1.475-1.55-2.262-3.162T6.4 14.65q0-2.275 1.65-3.838t3.975-1.562q2.325 0 4 1.563T17.7 14.65q0 .225-.137.363t-.363.137q-.2 0-.35-.137t-.15-.363q0-1.875-1.388-3.137t-3.287-1.263q-1.9 0-3.262 1.263T7.4 14.65q0 2.025.7 3.438t2.05 2.837q.15.15.15.35t-.15.35q-.15.15-.35.15t-.35-.15m7.55-1.7q-2.225 0-3.863-1.5T11.5 14.65q0-.2.138-.35t.362-.15q.225 0 .363.15t.137.35q0 1.875 1.35 3.075t3.15 1.2q.15 0 .425-.025t.575-.075q.225-.05.388.063t.212.337q.05.2-.075.35t-.325.2q-.45.125-.787.138t-.413.012"
                                  ></path>
                                </svg>
                              </div>
                              {/**/}
                            </div>
                          </div>
                          <div className="relative">
                            <label
                              className="nui-label w-full pb-1 text-[0.825rem]"
                              htmlFor="ninja-input-14"
                            >
                              Email address
                            </label>
                            <div className="group/nui-input relative">
                              <input
                                id="ninja-input-14"
                                type="email"
                                className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-xl"
                                placeholder="Ex: johndoe@company.com"
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
                                  <path
                                    fill="currentColor"
                                    d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15q.65 0 1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15"
                                  ></path>
                                </svg>
                              </div>
                              {/**/}
                            </div>
                          </div>
                          <div className="relative">
                            <label
                              className="nui-label w-full pb-1 text-[0.825rem]"
                              htmlFor="ninja-input-15"
                            >
                              Password
                            </label>
                            <div className="group/nui-input relative">
                              <input
                                id="ninja-input-15"
                                type="password"
                                className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-xl"
                                placeholder="********"
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
                                  <path
                                    fill="currentColor"
                                    d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15q0-.825-.587-1.412T12 13q-.825 0-1.412.588T10 15q0 .825.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zM6 20V10z"
                                  ></path>
                                </svg>
                              </div>
                              <button className="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl">
                                <div
                                  className="relative flex h-full w-full items-center justify-center"
                                  data-tooltip="Hide password"
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
                                      fill="currentColor"
                                      d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                                    ></path>
                                  </svg>
                                </div>
                              </button>
                              {/**/}
                            </div>
                          </div>
                          <div className="group/password-strength relative cursor-pointer">
                            <div className="border-muted-200 dark:border-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 dark:bg-muted-800 pointer-events-none absolute left-0 top-4 z-20 rounded-lg border bg-white p-6 opacity-0 shadow-xl transition-opacity duration-300 group-hover/password-strength:pointer-events-auto group-hover/password-strength:opacity-100">
                              <ul className="flex flex-col gap-4">
                                <li className="flex items-center justify-between gap-6">
                                  <span className="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold">
                                    Contains minimum 8 characters
                                  </span>
                                  <span className="w-7">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-danger-400 dark:text-danger-500 h-4 w-4"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                                      ></path>
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M320 320L192 192m0 128l128-128"
                                      />
                                    </svg>
                                  </span>
                                </li>
                                <li className="flex items-center justify-between gap-6">
                                  <span className="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold">
                                    Contains at least 5 characters
                                  </span>
                                  <span className="w-7">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-danger-400 dark:text-danger-500 h-4 w-4"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                                      ></path>
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M320 320L192 192m0 128l128-128"
                                      />
                                    </svg>
                                  </span>
                                </li>
                                <li className="flex items-center justify-between gap-6">
                                  <span className="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold">
                                    Contains lowercase characters
                                  </span>
                                  <span className="w-7">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-danger-400 dark:text-danger-500 h-4 w-4"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                                      ></path>
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M320 320L192 192m0 128l128-128"
                                      />
                                    </svg>
                                  </span>
                                </li>
                                <li className="flex items-center justify-between gap-6">
                                  <span className="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold">
                                    Contains uppercase characters
                                  </span>
                                  <span className="w-7">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-danger-400 dark:text-danger-500 h-4 w-4"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                                      ></path>
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M320 320L192 192m0 128l128-128"
                                      />
                                    </svg>
                                  </span>
                                </li>
                                <li className="flex items-center justify-between gap-6">
                                  <span className="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold">
                                    Contains numbers
                                  </span>
                                  <span className="w-7">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-danger-400 dark:text-danger-500 h-4 w-4"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                                      ></path>
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M320 320L192 192m0 128l128-128"
                                      />
                                    </svg>
                                  </span>
                                </li>
                                <li className="flex items-center justify-between gap-6">
                                  <span className="grow text-xs dark:text-slate-400 dark:text-slate-350 font-semibold">
                                    Contains special characters
                                  </span>
                                  <span className="w-7">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-danger-400 dark:text-danger-500 h-4 w-4"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"
                                      ></path>
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M320 320L192 192m0 128l128-128"
                                      />
                                    </svg>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="-mx-1 flex">
                              <div className="w-1/5 px-1">
                                <div
                                  className="h-2 rounded-xl transition-colors bg-danger-500"
                                  data-tooltip=" minimum 8 characters"
                                />
                              </div>
                              <div className="w-1/5 px-1">
                                <div
                                  className="h-2 rounded-xl transition-colors bg-danger-500"
                                  data-tooltip=" at least 5 characters"
                                />
                              </div>
                              <div className="w-1/5 px-1">
                                <div
                                  className="h-2 rounded-xl transition-colors bg-danger-500"
                                  data-tooltip=" lowercase characters"
                                />
                              </div>
                              <div className="w-1/5 px-1">
                                <div
                                  className="h-2 rounded-xl transition-colors bg-danger-500"
                                  data-tooltip=" uppercase characters"
                                />
                              </div>
                              <div className="w-1/5 px-1">
                                <div
                                  className="h-2 rounded-xl transition-colors bg-danger-500"
                                  data-tooltip=" numbers"
                                />
                              </div>
                              <div className="w-1/5 px-1">
                                <div
                                  className="h-2 rounded-xl transition-colors bg-danger-500"
                                  data-tooltip=" special characters"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <div className="relative inline-flex items-start gap-1 text-primary-500">
                            <div className="nui-focus group/nui-checkbox relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md">
                              <input
                                id="ninja-input-16"
                                true-value="true"
                                false-value="false"
                                className="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
                                type="checkbox"
                              />
                              <div className="border-muted-400 dark:border-muted-700 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full border-2 bg-white peer-checked:border-current peer-indeterminate:border-current peer-checked:dark:border-current peer-indeterminate:dark:border-current rounded-md"></div>
                              <svg
                                aria-hidden="true"
                                viewBox="0 0 17 12"
                                className="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 peer-indeterminate:!translate-y-6"
                              >
                                <path
                                  fill="currentColor"
                                  d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-indeterminate:translate-y-0 peer-indeterminate:opacity-100"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={4}
                                  d="M2 12h20"
                                />
                              </svg>
                            </div>
                            <div className="inline-flex flex-col">
                              <label
                                htmlFor="ninja-input-16"
                                className="text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
                              >
                                I Agree to the Terms &amp; Conditions
                              </label>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <div className="block w-full rounded-md shadow-sm">
                            <button
                              data-v-71bb21a6
                              type="submit"
                              className="is-button rounded-xl bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 !h-11 w-full"
                            >
                              Create Account{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                      <p className="text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5">
                        <span>Have an account?</span>
                        <NavLink
                          to="/auth/login"
                          className="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                        >
                          Login here{" "}
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignUp;
