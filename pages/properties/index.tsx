import { Fragment } from "react";
import { Seo } from "../../components/Seo";
import Banner from "../../components/properties/banner";
import { Layout } from "../../layout/layout";
import Header from "../../components/header";

const Properties = () => {
  return (
    <Fragment>
      <Seo
        title="Properties"
        description="Application for property listings. Help sellers upload their product and then get a buyer."
      />

      <Layout>
        <div className={"relative"}>
          <Header background={"light"} />
          <Banner />
        </div>
        <div className={"bg-gray-50 w-full py-10 px-28"}></div>
      </Layout>
    </Fragment>
  );
};

export default Properties;
