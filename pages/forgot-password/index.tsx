import { Fragment } from "react";
import { Seo } from "../../components/Seo";
import Banner from "../../components/auth/banner";

import { Layout } from "../../layout/layout";
import Header from "../../components/header";
import { LoginSvg } from "../../components/svg";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <Fragment>
      <Seo
        title="Forgot your password?"
        description="Application for property listings. Help sellers upload their properties and then get a buyer."
      />
      <Layout>
        <div className={"relative"}>
          <Header background={"light"} />
          <Banner />
        </div>

        <div className={"bg-gray-50 w-full py-10 px-5 sm:px-5 md:px-28"}>
          <div
            className={"bg-white p-5 sm:p-5 md:p-10 flex flex-col items-center"}
          >
            <LoginSvg className={"h-36 w-36  "} />
            <h1 className={"text-2xl sm:text-2xl md:text-3xl font-bold mt-5"}>
              Forgot Your Password?
            </h1>
            <span
              className={
                "mt-3 w-full sm:w-full md:w-6/12 text-gray-600 text-center"
              }
            >
              Please enter the email you registered with. A password reset link
              will be sent to your email so we can verify your account
            </span>

            <div className={"w-full sm:w-full md:w-5/12 mt-5"}>
              <div className="mt-2 relative w-full rounded shadow-sm">
                <input
                  required
                  type="email"
                  className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                  placeholder="Email here eg. you@example.com"
                />
              </div>
            </div>

            <div className={"mt-5 w-full sm:w-full md:w-5/12"}>
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
                Send link
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default ForgotPassword;
