import { Dispatch, SetStateAction } from "react";

export interface VerifyInputProp {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  email: string;
}
