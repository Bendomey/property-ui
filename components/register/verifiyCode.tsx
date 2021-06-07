import React, { Fragment, useState, useEffect, useCallback } from "react";
import { BasicModal } from "../modals";
import { VerifyInputProp } from "./types";
import styles from "../../styles/modal.module.css";
import VerifySVG from "../svg/sentMessage";
import { ClapSpinner } from "react-spinners-kit";
import _ from "lodash";

const loading = false;
const resendLoading = false;
const VerifyCode = ({ show, setShow, email }: VerifyInputProp) => {
  const [code, setCode] = useState<string>("");

  //for countdown and resend auth code
  const [countDown, setCountdown] = useState<number>(59);

  useEffect(() => {
    let timer;
    if (countDown > 0)
      timer = setTimeout(() => setCountdown(countDown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countDown]);

  const handleResendVerification = useCallback(() => {
    //hit server here
  }, []);

  //for error handling
  const [errorMsg, setErrorMsg] = useState<string>("");

  const HandleSubmit = useCallback(() => {
    () => {
      if (code.trim().length !== 6) {
        return setErrorMsg("Please a valid otp");
      }

      setErrorMsg("");
    };
  }, []);

  return (
    <Fragment>
      <BasicModal show={show} setShow={setShow} canClose={false}>
        <Fragment>
          <div className={"relative " + styles.verifyRegisterCode}>
            {loading && (
              <div
                className={
                  "absolute z-1 bg-white h-full w-full flex flex-col justify-center items-center " +
                  styles.opacityBack
                }
              >
                <ClapSpinner loading={true} size={50} frontColor={"##801C1F"} />
                <div className={"text-2xl text-primary-900 mt-5"}>
                  Verifying...
                </div>
              </div>
            )}

            <div
              className={"flex flex-col h-full justify-between items-center "}
            >
              <div />
              <div
                className={"flex flex-col justify-center items-center w-full "}
              >
                <VerifySVG
                  className={"h-20 w-40 sm:w-40 sm:h-20 md:h-32 md:w-56 mb-2"}
                />
                <span className={"text-center font-light mt-4 mx-10"}>
                  Please enter the six digits code sent to this email{" "}
                  <span className={"text-primary-700"}>{email}</span>
                </span>
                <div className="mt-4 rounded-none shadow-sm w-3/4">
                  <input
                    type={"number"}
                    min={0}
                    onFocus={() => setErrorMsg("")}
                    onBlur={() =>
                      code.trim().length !== 6
                        ? setErrorMsg("Please enter a valid otp")
                        : setErrorMsg("")
                    }
                    placeholder={"OTP eg 123456.."}
                    value={code}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCode(e.target.value)
                    }
                    className={`form-input block ${
                      errorMsg.trim().length > 0 && "border-red-500"
                    } rounded-none bg-gray-50 text-center  w-full text-md sm:text-md md:text-lg font-light py-2 sm:py-2 md:py-4 transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                  />
                </div>
                {errorMsg.trim().length > 0 && (
                  <small className={"text-red-500 mt-1"}>{errorMsg}</small>
                )}
                <span className={"text-center font-light mt-2"}>
                  Didn't receive code?{" "}
                  {resendLoading ? (
                    <Fragment> Loading...</Fragment>
                  ) : countDown !== 0 ? (
                    <Fragment>
                      {" "}
                      <span className={"text-blue-500"}>
                        0:{countDown < 10 ? `0${countDown}` : countDown}
                      </span>
                    </Fragment>
                  ) : (
                    <button
                      onClick={handleResendVerification}
                      type={"button"}
                      className={"text-blue-600 focus:outline-none"}
                    >
                      resend
                    </button>
                  )}
                </span>
              </div>
              <div
                className={
                  "grid grid-cols-1 h-16 gap-0 w-full border-t border-gray-200"
                }
              >
                {/* <button
                  onClick={() => setShow(false)}
                  disabled={true}
                  className={
                    "border-r border-gray-200 bg-gray-50 cursor-not-allowed flex justify-center items-center hover:bg-gray-50 focus:outline-none"
                  }
                >
                  <span className={"font-light text-gray-400"}>CANCEL</span>
                </button> */}
                <button
                  onClick={HandleSubmit}
                  className={
                    "border-r border-gray-200 flex justify-center items-center hover:bg-gray-50 focus:outline-none"
                  }
                >
                  <span className={"font-light text-gray-500"}>ACCEPT</span>
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      </BasicModal>
    </Fragment>
  );
};

export default VerifyCode;
