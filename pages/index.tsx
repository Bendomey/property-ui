import { Fragment } from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import { Seo } from "../components/Seo";
import { Layout } from "../layout/layout";

export default function Home() {
  return (
    <Fragment>
      <Seo
        title="Welcome"
        description="Application for property listings. Help sellers upload their product and then get a buyer."
      />

      <Layout>
        <div className={"relative"}>
          <Header />
          <Banner />
        </div>
      </Layout>
    </Fragment>
  );
}
