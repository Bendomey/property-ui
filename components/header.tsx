import { FC, Fragment, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import Transition from "./transition";

export interface Props {
  background: "light" | "dark";
}

const Header: FC<Props> = ({ background }) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="absolute w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"}>
              <a>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setShow(true)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/">
              <a
                className={cn("text-base font-medium hover:underline", {
                  "text-gray-200 hover:text-gray-100": background === "dark",
                  "text-gray-700 hover:text-gray-700": background === "light",
                })}
              >
                HOME
              </a>
            </Link>

            <Link href="/properties">
              <a
                className={cn("text-base font-medium hover:underline", {
                  "text-gray-200 hover:text-gray-100": background === "dark",
                  "text-gray-700 hover:text-gray-700": background === "light",
                })}
              >
                PROPERTIES
              </a>
            </Link>

            <Link href="/about-us">
              <a
                className={cn("text-base font-medium hover:underline", {
                  "text-gray-200 hover:text-gray-100": background === "dark",
                  "text-gray-700 hover:text-gray-700": background === "light",
                })}
              >
                ABOUT
              </a>
            </Link>
            <Link href="/contact-us">
              <a
                className={cn("text-base font-medium hover:underline", {
                  "text-gray-200 hover:text-gray-100": background === "dark",
                  "text-gray-700 hover:text-gray-700": background === "light",
                })}
              >
                CONTACT
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/sign-in">
              <a
                className={cn("text-base font-medium hover:underline", {
                  "text-gray-200 hover:text-gray-100": background === "dark",
                  "text-gray-700 hover:text-gray-600": background === "light",
                })}
              >
                SIGN IN
              </a>
            </Link>
            <Link href="/sign-up">
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base  text-white bg-red-700 hover:bg-red-900">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
        <Transition
          appear={undefined}
          show={show}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setShow(false)}
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    <Link href={"/"}>
                      <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Home
                        </div>
                      </a>
                    </Link>

                    <Link href={"/properties"}>
                      <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Properties
                        </div>
                      </a>
                    </Link>

                    <Link href={"/about-us"}>
                      <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          About Us
                        </div>
                      </a>
                    </Link>

                    <Link href={"/contact-us"}>
                      <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Contact Us
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="">
                  <Link href={"/sign-up"}>
                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                      Sign up
                    </a>
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing user?
                    <Link href={"/sign-in"}>
                      <a className="ml-2 text-red-600 hover:text-red-500">
                        Sign in
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Fragment>
  );
};

export default Header;
