import { Fragment, useState, useEffect } from "react";
import { Seo } from "../../components/Seo";
import { Layout } from "../../layout/layout";
import Banner from "../../components/account/banner";
import { Sidebar } from "../../components/account/sidebar";
import Header from "../../components/header";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Error, Loading, NotFound } from "../../components/account/alert";

//Account component
const MyAccount = dynamic(
  () => import("../../components/account/tabs/account"),
  {
    ssr: false,
    loading: ({ isLoading, error, retry }) => {
      if (isLoading) {
        return <Loading />;
      }
      if (error) {
        return (
          <Fragment>
            <Error retry={retry} />
          </Fragment>
        );
      }
    },
  }
);

enum TabProps {
  MY_ACCOUNT = "my-account",
  SECURITY = "security",
  LISTINGS = "my-listings",
  FAVORITE = "my-favorites",
}

const Account = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabProps>(TabProps.MY_ACCOUNT);

  useEffect(() => {
    if (router.query?.tab === "" || router.query?.tab === undefined) {
      setActiveTab(TabProps.MY_ACCOUNT);
    } else {
      setActiveTab(router.query?.tab as TabProps);
    }
  }, [router.query]);

  return (
    <Fragment>
      <Seo
        title="My Account"
        description="Application for property listings. Help sellers upload their properties and then get a buyer."
      />

      <Layout>
        <div className={"relative shadow"}>
          <Header background={"light"} />
          <Banner />
        </div>

        <div className={"bg-gray-50 p-5 sm:p-5 md:px-28"}>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 relative">
            <Sidebar activeTab={activeTab} />
            <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
              {activeTab === TabProps.MY_ACCOUNT ? (
                <Fragment>
                  <MyAccount />
                </Fragment>
              ) : (
                <Fragment>
                  <NotFound />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Account;
