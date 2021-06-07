import { Fragment } from "react";

const Security = () => {
  return (
    <Fragment>
      <div className={"bg-white p-5 sm:p-5 md:p-10 flex flex-col items-center"}>
        <h1 className={"text-2xl sm:text-2xl md:text-3xl font-bold mt-5"}>
          Update your Password!
        </h1>
        <span
          className={
            "mt-3 w-full sm:w-full md:w-6/12 text-gray-600 text-center"
          }
        >
          To update your password, enter your current password, and then your
          new password. You'll also have to confirm your new password.
        </span>

        <div className={"w-full sm:w-full md:w-10/12 mt-5"}>
          <label htmlFor="email" className="block  font-medium text-gray-700">
            Current Pasword <span className={"text-red-600"}>*</span>
          </label>
          <div className="mt-2 relative w-full rounded shadow-sm">
            <input
              required
              type="password"
              className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
              placeholder="Current Password here eg. * * * * * * * "
            />
          </div>
        </div>

        <div
          className={"grid grid-cols-2 gap-6 w-full sm:w-full md:w-10/12 mt-5"}
        >
          <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
            <label htmlFor="email" className="block  font-medium text-gray-700">
              New Pasword <span className={"text-red-600"}>*</span>
            </label>
            <div className="mt-2 relative w-full rounded shadow-sm">
              <input
                required
                type="password"
                className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                placeholder="Current Password here eg. * * * * * * * "
              />
            </div>
          </div>
          <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
            <label htmlFor="email" className="block  font-medium text-gray-700">
              Confirm Pasword <span className={"text-red-600"}>*</span>
            </label>
            <div className="mt-2 relative w-full rounded shadow-sm">
              <input
                required
                type="password"
                className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                placeholder="Confirm Password here eg. * * * * * * * "
              />
            </div>
          </div>
        </div>

        <div className={"mt-5 w-full sm:w-full md:w-10/12"}>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-5 border border-transparent text-lg font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Update
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Security;
