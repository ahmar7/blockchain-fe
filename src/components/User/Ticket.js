import React, { useState } from "react";
import SideBar from "../../layout/UserSidebar/SideBar";
import Log from "../../assets/img/log.jpg";
const Ticket = () => {
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
                  New Ticket
                </h1>
                <div className="ms-auto" />

                <div className="group inline-flex items-center justify-center text-right">
                  <div
                    data-headlessui-state
                    className="relative h-9 w-9 text-left"
                  >
                    <button
                      className="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                      id="headlessui-menu-button-11"
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
              <form
                action
                method="POST"
                className="relative py-3 sm:mx-auto sm:max-w-xl"
              >
                <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl relative px-4 py-10 sm:p-10 md:mx-0">
                  <div className="mx-auto max-w-md">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl">
                        <svg
                          data-v-cd102a71
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="icon"
                          width="1em"
                          height="1em"
                          viewBox="0 0 256 256"
                        >
                          <g fill="currentColor">
                            <path
                              d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128"
                              opacity=".2"
                            />
                            <path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="block text-xl font-semibold text-gray-700 dark:text-gray-200">
                        <h3 className="font-heading text-lg font-medium leading-normal leading-normal">
                          Create New Ticket
                        </h3>
                        <p className="font-sans text-sm font-normal leading-normal leading-normal text-muted-400">
                          Fill in the form below to create a new ticket
                        </p>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      <div className="grid grid-cols-12 gap-4 py-8">
                        <div className="col-span-12">
                          <div className="relative">
                            <label
                              className="nui-label w-full pb-1 text-[0.825rem]"
                              htmlFor="ninja-input-5"
                            >
                              Ticket title
                            </label>
                            <div className="group/nui-input relative">
                              <input
                                id="ninja-input-5"
                                type="text"
                                className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-xl !h-11 !ps-11"
                                placeholder="Example: I can't buy BTC with my credit card"
                              />
                              {/**/}
                              {/**/}
                              <div className="text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75 h-10 w-10 !h-11 !w-11">
                                <svg
                                  data-v-cd102a71
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon h-[1.15rem] w-[1.15rem]"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256"
                                >
                                  <g fill="currentColor">
                                    <path
                                      d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128"
                                      opacity=".2"
                                    />
                                    <path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216"></path>
                                  </g>
                                </svg>
                              </div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div className="relative">
                            <label
                              htmlFor="ninja-input-6"
                              className="nui-label pb-1 text-[0.825rem]"
                            >
                              Long description
                            </label>
                            <div className="group/nui-textarea relative flex flex-col">
                              <textarea
                                id="ninja-input-6"
                                className="nui-focus border-muted-300 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50 peer w-full border bg-white font-sans transition-all duration-300 focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-75 min-h-[2.5rem] text-sm leading-[1.6] rounded-xl resize-none p-2"
                                placeholder="Example: I'm trying to buy BTC with my credit card but I'm getting an error message saying that my card is not supported. I've tried with 2 different cards and I'm getting the same error. Can you please help me?"
                                rows={5}
                                defaultValue={""}
                              />
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pt-4">
                        <a
                          data-v-71bb21a6
                          href="/dashboard.html"
                          className="is-button rounded-xl is-button-default !h-12 w-full"
                          disabled="false"
                        >
                          Cancel
                        </a>
                        <button
                          data-v-71bb21a6
                          type="submit"
                          className="is-button rounded-xl bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 !h-12 w-full"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/**/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
