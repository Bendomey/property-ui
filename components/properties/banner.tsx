import React, { Fragment } from "react";

export interface Props {}

const Banner: React.FC<Props> = ({}) => {
  return (
    <Fragment>
      <div className={"propertiesBannerContainer bg-red-200"}>
        <div className={"propertiesTopBanner bg-white"}></div>
        <div className={"propertiesBottomBanner"}>
          <div
            className={
              "h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-75"
            }
          >
            <span className={"font-medium text-white text-5xl"}>
              Properties
            </span>
            <nav className="flex mt-5" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <svg
                        className="flex-shrink-0 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span className="sr-only">Home</span>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex items-center">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <a
                      href="#"
                      className="ml-4 text-sm font-medium text-gray-200 "
                      aria-current="page"
                    >
                      Properties
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        .propertiesBannerContainer {
          height: 36vh;
          width: 100vw;
        }
        .propertiesTopBanner {
          height: 12vh;
        }
        .propertiesBottomBanner {
          height: 24vh;
          background-image: url("/images/background.jpg");
          background-repeat: no-repeat;
          background-position: center; /* Center the image */
          width: 100vw;
          background-size: cover; /* Resize the background image to cover the entire container */
        }
      `}</style>
    </Fragment>
  );
};

export default Banner;
