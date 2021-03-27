import { Fragment } from "react";

export interface Props {}

const PropertyCard = () => {
  return (
    <Fragment>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0 relative">
          <div className={"absolute bg-gray-50 p-2 rounded-md top-3 left-3"}>
            <span className={"font-medium"}>Featured</span>
          </div>
          <div className={"w-full h-full bg-black"}>
            <img
              className=" h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=ah3lxr8uqw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 bg-white  flex flex-col justify-between">
          <div className="flex-1 p-4">
            <div className={"flex flex-row justify-between items-center"}>
              <div>
                <p className="text-sm text-gray-400">
                  <a href="#" className="hover:underline">
                    For Sale
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bold text-red-700">$1000.00</p>
              </div>
            </div>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                Boost your conversion rate
              </p>
              <p className="mt-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium...
              </p>
            </a>
          </div>
          <div className=" flex items-center justify-between border-t border-gray-100 px-3 py-3">
            <div className={"flex flex-row items-center"}>
              <div className="flex-shrink-0">
                <svg
                  className={"h-5 w-5 text-gray-800"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Adenta down, Ghana</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex transition duration-300 transform hover:-translate-y-1 hover:scale-110 items-center py-1 px-3 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg
                  className={"h-5 w-7"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { PropertyCard };
