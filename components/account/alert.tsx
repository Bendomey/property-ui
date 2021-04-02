import { Fragment } from "react";
import { ClapSpinner } from "react-spinners-kit";
import { ErrorSvg, Svg404 } from "../../components/svg";

export const Loading = () => {
  return (
    <Fragment>
      <div className={"w-2/3 h-full flex justify-center items-center"}>
        <ClapSpinner loading={true} size={30} frontColor={"##801C1F"} />
      </div>
    </Fragment>
  );
};

export const Error = ({ retry }: any) => {
  return (
    <Fragment>
      <div className={"w-2/3 h-full flex justify-center items-center"}>
        <div className={"w-full flex flex-col justify-center items-center"}>
          <ErrorSvg className={"h-56 w-56"} />
          <p className={"text-gray-600"}>
            Oops, Page broke. Don't fret give it a try again
          </p>
          <button
            onClick={retry}
            type="button"
            className="mt-5 inline-flex items-center px-3 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              className="-ml-0.5 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            Reload
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export const NotFound = () => {
  return (
    <Fragment>
      <div className={"w-2/3 h-full flex justify-center items-center"}>
        <Svg404 className={"h-96 w-96"} />
      </div>
    </Fragment>
  );
};
