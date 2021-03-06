import { Fragment, useCallback, useState } from "react";
import { Seo } from "../../components/Seo";
import Banner from "../../components/auth/banner";
import dynamic from "next/dynamic";

import { Layout } from "../../layout/layout";
import Header from "../../components/header";
import { LoginSvg } from "../../components/svg";
import Link from "next/link";

// dynamically import verify modal form
const VerifyModal = dynamic(
  () => import("../../components/register/verifiyCode"),
  {
    ssr: false,
    loading: ({ isLoading, error, retry }) => {
      if (isLoading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return (
          <button onClick={retry}>
            Oops, something happened, click to try reloading
          </button>
        );
      }
    },
  }
);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setShowVerifyModal(true);
  }, []);
  return (
    <Fragment>
      <Seo
        title="Sign Up"
        description="Application for property listings. Help sellers upload their properties and then get a buyer."
      />
      <Layout>
        <div className={"relative"}>
          <Header background={"light"} />
          <Banner />
        </div>
        <div className={"bg-gray-50 w-full py-10 px-5 sm:px-5 md:px-28"}>
          <div className={"grid grid-cols-3 gap-8"}>
            <div
              className={
                "col-span-3 sm:col-span-3 md:col-span-2 bg-white p-5 sm:p-5 md:p-10"
              }
            >
              <form
                onSubmit={handleSubmit}
                className={
                  "w-full h-full flex flex-col justify-center items-center"
                }
              >
                <span
                  className={"text-2xl sm:text-2xl md:text-3xl font-medium"}
                >
                  Create your account!
                </span>
                <span
                  className={
                    "text-sm block sm:block md:hidden text-center mt-2"
                  }
                >
                  Please fill in the form to be able to transact businesses on
                  our platform.
                </span>
                <div className={"mt-10 w-full grid grid-cols-2 gap-6"}>
                  <div className={"col-span-2"}>
                    <label
                      htmlFor="email"
                      className="block  font-medium text-gray-700"
                    >
                      Full Name <span className={"text-red-600"}>*</span>
                    </label>
                    <div className="mt-2 relative w-full rounded shadow-sm">
                      <input
                        required
                        type="text"
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                        placeholder="Full name here eg. John Doe"
                      />
                    </div>
                  </div>
                  <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
                    <label
                      htmlFor="email"
                      className="block  font-medium text-gray-700"
                    >
                      Email <span className={"text-red-600"}>*</span>
                    </label>
                    <div className="mt-2 relative w-full rounded shadow-sm">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e?.target?.value)}
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                        placeholder="Email here eg. you@example.com"
                      />
                    </div>
                  </div>
                  <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
                    <label
                      htmlFor="email"
                      className="block  font-medium text-gray-700"
                    >
                      Phone Number <span className={"text-red-600"}>*</span>
                    </label>
                    <div className="mt-2 relative w-full rounded shadow-sm">
                      <input
                        required
                        type="text"
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                        placeholder="Phone Number here eg. 0540000000"
                      />
                    </div>
                  </div>
                  <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
                    <label
                      htmlFor="email"
                      className="block  font-medium text-gray-700"
                    >
                      Password <span className={"text-red-600"}>*</span>
                    </label>
                    <div className="mt-2 relative w-full rounded shadow-sm">
                      <input
                        required
                        type="password"
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                        placeholder="Password here eg. ********"
                      />
                    </div>
                  </div>
                  <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
                    <label
                      htmlFor="email"
                      className="block  font-medium text-gray-700"
                    >
                      Confirm Password <span className={"text-red-600"}>*</span>
                    </label>
                    <div className="mt-2 relative w-full rounded shadow-sm">
                      <input
                        required
                        type="password"
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
                        placeholder="Confirm Password here eg. ********"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "mt-6 flex items-center justify-between w-full sm:w-full md:w-full"
                  }
                >
                  <div />

                  <div className="text-sm leading-5">
                    <Link href={"/sign-in"}>
                      <a className="font-light text-lg text-red-600 hover:text-red-500 hover:underline focus:outline-none focus:underline transition ease-in-out duration-150">
                        Already have an account?
                      </a>
                    </Link>
                  </div>
                </div>
                <div className={"mt-7 w-full "}>
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
                    Sign up
                  </button>
                </div>
              </form>
            </div>
            <div
              className={
                "col-span-1 hidden sm:hidden md:block bg-white px-10 pt-16 pb-10"
              }
            >
              <div className={" w-full  flex items-center flex-col"}>
                <LoginSvg className={" h-52 w-52 "} />
                <div className={"mt-10 flex flex-col items-center"}>
                  <span className={"text-3xl font-medium"}>Register</span>
                  <span className={"mt-3 text-gray-600 text-center"}>
                    Please fill in the form to be able to transact businesses on
                    our platform.
                  </span>
                </div>
                <div className={"mt-20 flex flex-row items-center"}>
                  <div>
                    <span className={"text-gray-600"}>Need Help?</span>
                  </div>
                  <div>
                    <a
                      className={
                        "ml-2 hover:underline cursor-pointer font-medium text-center"
                      }
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <VerifyModal
        show={showVerifyModal}
        setShow={setShowVerifyModal}
        email={email}
      />
    </Fragment>
  );
};

export default SignUp;
