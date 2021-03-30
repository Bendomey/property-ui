import React, { Fragment } from "react";

export interface Props {}

const Banner: React.FC<Props> = ({}) => {
  return (
    <Fragment>
      <div className={"loginBannerContainer bg-white"} />

      <style jsx>{`
        .loginBannerContainer {
          height: 12vh;
          width: 100vw;
        }
      `}</style>
    </Fragment>
  );
};

export default Banner;
