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
              "h-full w-full flex justify-center items-center bg-black bg-opacity-75"
            }
          >
            <span className={"font-medium text-white text-4xl"}>
              Properties
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .propertiesBannerContainer {
          height: 24vh;
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
          background-size: cover; /* Resize the background image to cover the entire container */
          width: 100vw;
        }
      `}</style>
    </Fragment>
  );
};

export default Banner;
