import React, { useEffect, useState } from "react";
import SideBar from "../../layout/AdminSidebar/Sidebar";
import Log from "../../assets/img/log.jpg";
import { allUsersApi } from "../../Api/Service";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthUser } from "react-auth-kit";
const AdminUsers = () => {
  const [Users, setUsers] = useState([]);

  let authUser = useAuthUser();
  let Navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);
  const getAllUsers = async () => {
    try {
      const allUsers = await allUsersApi();

      if (allUsers.success) {
        console.log("allUsers: ", allUsers);
        const filtered = allUsers.allUsers.filter((user) =>
          user.role.includes("user")
        );
        setUsers(filtered.reverse());
      } else {
        toast.error(allUsers.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    if (authUser().user.role === "user") {
      Navigate("/dashboard");
      return;
    }
    getAllUsers();
  }, []);
  const [Active, setActive] = useState(false);
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

                  <div className="">
                    {isLoading ? (
                      <div className="mx-auto loading-pg w-full text-center max-w-xs">
                        <div className="mx-auto max-w-xs">
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
                        </div>
                        <div className="mx-auto max-w-sm">
                          <h4 className="font-heading text-xl font-medium leading-normal leading-normal text-muted-800 mb-1 mt-4 dark:text-white">
                            Loading Users
                          </h4>
                          <p className="text-muted-400 font-sans text-sm">
                            Please wait while we load the Users.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {Users.map((user, index) => (
                          <div
                            key={index}
                            className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl overflow-hidden"
                          >
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
                                      src={Log}
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
                                  {`${user.firstName} ${user.lastName}`}
                                </p>
                                <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400">
                                  {user.email}
                                </p>
                              </div>
                              <div className="flex items-center mt-5">
                                <Link
                                  data-v-71bb21a6
                                  to={`/admin/users/${user._id}/general`}
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
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
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

export default AdminUsers;
