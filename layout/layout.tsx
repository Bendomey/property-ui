import { Fragment } from "react";
import { Footer } from "./components/footer";

export interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
};

export { Layout };
