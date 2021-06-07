import { Fragment } from "react";
import { Seo } from "../../components/Seo";
import Banner from "../../components/properties/banner";
import { Layout } from "../../layout/layout";
import Header from "../../components/header";
import Sidebar from "../../components/properties/sidebar";
import { PropertyCard } from "../../components/properties/property";
import cn from "classnames";

const Properties = () => {
  return (
    <Fragment>
      <Seo
        title="Properties"
        description="Application for property listings. Help sellers upload their properties and then get a buyer."
      />

      <Layout>
        <div className={"relative"}>
          <Header background={"light"} />
          <Banner />
        </div>
        <div className={"bg-gray-50 w-full py-10 px-2 sm:px-2 md:px-28"}>
          <div className={"w-full grid grid-cols-6 gap-x-5 "}>
            <div className={"col-span-6 sm:col-span-6 md:col-span-2 "}>
              <div className={"sticky top-5"}>
                <Sidebar />
              </div>
            </div>
            <div className={"col-span-6 sm:col-span-6 md:col-span-4"}>
              <div className={"grid grid-cols-5 gap-x-4 mt-5 sm:mt-5 md:mt-0"}>
                <div className={"col-span-5 sm:col-span-5 md:col-span-3"}>
                  <div
                    className={
                      "w-full p-4 bg-white shadow-sm text-gray-500 font-light"
                    }
                  >
                    Showing <span className={"text-red-600"}>1</span> of{" "}
                    <span className={"text-red-600"}>30</span> results
                  </div>
                </div>
                <div
                  className={
                    "col-span-5 sm:col-span-5 md:col-span-2 mt-2 sm:mt-2 md:mt-0"
                  }
                >
                  <div>
                    <select
                      name="location"
                      className="block w-full  text-gray-500 pl-3 pr-10 py-4 border-gray-100 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded"
                    >
                      <option>Sort By Latest</option>
                      <option>Sort By Price: low to high</option>
                      <option>Sort By Price: high to low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* products here */}
              <div className={"mt-4 overflow-auto bg-gray-50"}>
                {[1, 2, 3, 4].map((_, i: number) => (
                  <Fragment key={i}>
                    <div
                      className={cn({
                        "mt-5": i > 0,
                      })}
                    >
                      <PropertyCard />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Properties;
