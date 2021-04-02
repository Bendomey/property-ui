import { FC, Fragment } from "react";
import Link from "next/link";
import cn from "classnames";

enum TabProps {
  MY_ACCOUNT = "my-account",
  SECURITY = "security",
  LISTINGS = "my-listings",
  FAVORITE = "my-favorites",
}

export interface Props {
  activeTab: TabProps;
}

const Sidebar: FC<Props> = ({ activeTab }) => {
  return (
    <Fragment>
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav className="space-y-1 sticky top-5">
          <Link href={`/account?tab=${TabProps.MY_ACCOUNT}`}>
            <a
              className={cn(
                "group rounded-md px-3 py-2 hover:bg-white flex items-center text-sm",
                {
                  "text-gray-900 hover:text-gray-900 font-normal":
                    activeTab !== TabProps.MY_ACCOUNT,
                  "bg-gray-50 text-red-700 hover:text-red-700 font-medium":
                    activeTab === TabProps.MY_ACCOUNT,
                }
              )}
              aria-current="page"
            >
              <svg
                className={cn("flex-shrink-0 -ml-1 mr-3 h-6 w-6", {
                  "text-gray-400 group-hover:text-gray-500":
                    activeTab !== TabProps.MY_ACCOUNT,
                  "text-red-500 group-hover:text-red-500":
                    activeTab === TabProps.MY_ACCOUNT,
                })}
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
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="truncate">Account</span>
            </a>
          </Link>
          <Link href={`/account?tab=${TabProps.SECURITY}`}>
            <a
              className={cn(
                "group rounded-md px-3 py-2 hover:bg-white flex items-center text-sm ",
                {
                  "text-gray-900 hover:text-gray-900 font-normal":
                    activeTab !== TabProps.SECURITY,
                  "bg-gray-50 text-red-700 hover:text-red-700 font-medium":
                    activeTab === TabProps.SECURITY,
                }
              )}
            >
              <svg
                className={cn("flex-shrink-0 -ml-1 mr-3 h-6 w-6", {
                  "text-gray-400 group-hover:text-gray-500":
                    activeTab !== TabProps.SECURITY,
                  "text-red-500 group-hover:text-red-500":
                    activeTab === TabProps.SECURITY,
                })}
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <span className="truncate">Security</span>
            </a>
          </Link>
          <Link href={`/account?tab=${TabProps.LISTINGS}`}>
            <a
              className={cn(
                "group rounded-md hover:bg-white px-3 py-2 flex items-center text-sm",
                {
                  "text-gray-900 hover:text-gray-900 font-normal":
                    activeTab !== TabProps.LISTINGS,
                  "bg-gray-50 text-red-700 hover:text-red-700 font-medium":
                    activeTab === TabProps.LISTINGS,
                }
              )}
            >
              <svg
                className={cn("flex-shrink-0 -ml-1 mr-3 h-6 w-6", {
                  "text-gray-400 group-hover:text-gray-500":
                    activeTab !== TabProps.LISTINGS,
                  "text-red-500 group-hover:text-red-500":
                    activeTab === TabProps.LISTINGS,
                })}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>

              <span className="truncate">My Listings</span>
            </a>
          </Link>

          <Link href={`/account?tab=${TabProps.FAVORITE}`}>
            <a
              className={cn(
                "group rounded-md hover:bg-white px-3 py-2 flex items-center text-sm",
                {
                  "text-gray-900 hover:text-gray-900 font-normal":
                    activeTab !== TabProps.FAVORITE,
                  "bg-gray-50 text-red-700 hover:text-red-700 font-medium":
                    activeTab === TabProps.FAVORITE,
                }
              )}
            >
              <svg
                className={cn("flex-shrink-0 -ml-1 mr-3 h-6 w-6", {
                  "text-gray-400 group-hover:text-gray-500":
                    activeTab !== TabProps.FAVORITE,
                  "text-red-500 group-hover:text-red-500":
                    activeTab === TabProps.FAVORITE,
                })}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>

              <span className="truncate">My Favorites</span>
            </a>
          </Link>
        </nav>
      </aside>
    </Fragment>
  );
};

export { Sidebar };
