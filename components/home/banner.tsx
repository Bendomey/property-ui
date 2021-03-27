import { Fragment } from "react";
import { SearchBar } from "./search-bar";

export interface Props {}

const Banner: React.FC<Props> = ({}) => {
  return (
    <Fragment>
      <div className={"bannerContainer bg-red-800"}>
        <div
          className={
            "h-full w-full flex justify-center items-center bg-black bg-opacity-50"
          }
        >
          <div>
            <h1 className={"text-white font-bold text-5xl"}>
              Find Your <span className={"text-red-200"}>Perfect Property</span>
            </h1>
            <div className={"flex justify-center"}>
              <span className={"text-center text-white text-lg mt-2"}>
                Search properties that are for sale and rent
              </span>
            </div>
            <div className={"flex justify-center mt-10"}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bannerContainer {
          height: 70vh;
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
