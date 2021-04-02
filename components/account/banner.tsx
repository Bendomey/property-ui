import React, { Fragment } from "react";

export interface Props {}

const Banner: React.FC<Props> = ({}) => {
  return (
    <Fragment>
      <div className={"contactBannerContainer bg-white"} />

      <style jsx>{`
        .contactBannerContainer {
          height: 12vh;
          width: 100vw;
        }
      `}</style>
    </Fragment>
  );
};

export default Banner;
