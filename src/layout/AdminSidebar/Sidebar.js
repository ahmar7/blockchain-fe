import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SideBar = (props) => {
  //   const [Active, setActive] = useState(false);
  //   let toggleBar=()=>{
  // if(Active===true){
  //   setActive(false)
  // }else{
  //   setActive(true)
  // }
  // }
  return (
    <div
      id="sidebar"
      className={
        props.state
          ? "dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed left-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300 w-[280px] -translate-x-full translate-x-0 lg:translate-x-0"
          : "dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed left-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300 w-[280px] -translate-x-full lg:translate-x-0"
      }
    >
      <div className="flex h-16 w-full items-center justify-between px-6">
        <div className="flex h-16 w-16 items-center justify-center">
          <a
            href="/"
            className="router-link-active router-link-exact-active flex items-center justify-center"
            aria-current="page"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              xmlSpace="preserve"
              className="shrink-0 text-primary-500 h-10 w-10"
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
        </div>
        <button
          type="button"
          className="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-700/60 text-muted-500 dark:text-muted-400 hidden h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:flex"
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
        </button>
        <button
          type="button"
          onClick={props.toggle}
          className="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 flex h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden"
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
              d="m12 19l-7-7l7-7m7 7H5"
            />
          </svg>
        </button>
      </div>
      <div className="slimscroll relative w-full grow overflow-y-auto py-6 px-6">
        <ul id="sidebar-menu" className="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              className=" nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300 px-4"
              aria-current="page"
            >
              <svg
                data-v-cd102a71
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon w-5 h-5"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9 4a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-3 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap font-sans text-sm block">
                Dashboard
              </span>
            </NavLink>
          </li>
          <li>
            <div className="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t" />
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className="router-link-active nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300 px-4"
            >
              <svg
                data-v-cd102a71
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon w-5 h-5"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m5 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4 7a4 4 0 0 0-8 0v3h8zM6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m10 10v-3a5.972 5.972 0 0 0-.75-2.906A3.005 3.005 0 0 1 19 15v3zM4.75 12.094A5.973 5.973 0 0 0 4 15v3H1v-3a3 3 0 0 1 3.75-2.906"
                />
              </svg>

              <span className="whitespace-nowrap font-sans text-sm block">
                Users Management
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/transactions/pending"
              className="router-link-active nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300 px-4"
            >
              <svg
                data-v-cd102a71
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon w-5 h-5"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <g fill="currentColor">
                  <path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 0 1 2-2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm3 4a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zm-3 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>

              <span className="whitespace-nowrap font-sans text-sm block">
                Pending Transactions
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/tickets"
              className=" router-link-active nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300 px-4"
            >
              <svg
                data-v-cd102a71
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon w-5 h-5"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <g fill="currentColor">
                  <path d="M2 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9l-3 3v-3H4a2 2 0 0 1-2-2z"></path>
                  <path d="M15 7v2a4 4 0 0 1-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </g>
              </svg>
              <span className="whitespace-nowrap font-sans text-sm block">
                Feedback &amp; Support
              </span>
            </NavLink>
          </li>
          {/**/}
        </ul>
      </div>
      <div className="flex h-16 w-full items-center gap-4 transition-all duration-150 px-6">
        <div className="group inline-flex items-center justify-center text-right">
          <div data-headlessui-state className="relative h-10 w-10 text-left">
            <button
              className="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
              id="headlessui-menu-button-34"
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
        <span className="text-muted-500 dark:text-muted-400/80 whitespace-nowrap font-sans text-sm block">
          My Account
        </span>
      </div>
    </div>
  );
};

export default SideBar;
