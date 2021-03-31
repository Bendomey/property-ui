import { FC, Fragment } from "react";

export interface Props {}

const Sidebar: FC<Props> = ({}) => {
  return (
    <Fragment>
      <div className={"w-full h-full  bg-white shadow-sm p-5"}>
        <div>
          <h1 className={"text-lg text-gray-800"}>Search</h1>

          <div className="mt-3 relative rounded-md shadow-sm">
            <input
              type="text"
              name="account_number"
              id="account_number"
              className="focus:ring-red-500 bg-red-50 focus:border-red-500 block w-full pr-10 sm:text-sm py-3 border-red-200 rounded-sm"
              placeholder="Search by keyword"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={"mt-10"}>
          <h1 className={"text-lg text-gray-800"}>Property Types</h1>

          <div className={"mt-3"}>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded-sm"
              />
              <label className="ml-2 block text-gray-600 font-light">
                Land
              </label>
            </div>
            <div className="flex mt-2 items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded-sm"
              />
              <label className="ml-2 block text-gray-600 font-light">
                Commercial Buildings
              </label>
            </div>
            <div className="flex mt-2 items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded-sm"
              />
              <label className="ml-2 block text-gray-600 font-light">
                Residential Buildings
              </label>
            </div>
          </div>

          <div className={"w-full mt-5 flex justify-center items-center"}>
            <button
              type="button"
              className="transition duration-300 transform hover:-translate-y-1 hover:scale-110 items-center px-7 py-3 w-full flex justify-center order border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
            >
              Filter Properties
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
