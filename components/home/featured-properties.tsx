import { Fragment, useState } from "react";
import { PropertyCard } from "../property-card";
import { Tabs } from "../tabs";

export interface Props {}

const FeaturedProperties: React.FC<Props> = ({}) => {
  const [tab, setTab] = useState("all");
  return (
    <Fragment>
      <div className={"hidden sm:hidden w-full md:flex justify-center"}>
        <Tabs
          tabs={{
            all: "All",
            land: "Land",
            commercial: "Commercial Buildings",
            residential: "Residential Buildings",
          }}
          selected={tab}
          onChange={setTab}
          className="mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0"
        />
      </div>
      <div className={"flex sm:flex w-full mb-5 md:hidden justify-center"}>
        <select
          value={tab}
          required
          onChange={(e) => setTab(e?.target?.value)}
          className="focus:ring-red-500 focus:border-red-500 block w-full pl-5 py-4 text-lg bg-gray-50 border-gray-300 rounded"
          placeholder="Password here eg. ********"
        >
          <option value="All">All</option>
          <option value="land">Land</option>
          <option value="commercial">Commercial Buildings</option>
          <option value="residential">Residential Buildings</option>
        </select>
      </div>

      <div
        className={
          "mt-0 sm:mt-0 md:mt-10 mx-0 sm:mx-0 md:mx-7 grid gap-x-8 gap-y-8 lg:grid-cols-3 lg:max-w-none"
        }
      >
        {[1, 2, 3].map((_, i: number) => (
          <Fragment key={i}>
            <PropertyCard />
          </Fragment>
        ))}
      </div>

      <div className={"w-full mt-10 flex justify-center items-center"}>
        <button
          type="button"
          className="inline-flex transition duration-300 transform hover:-translate-y-1 hover:scale-110 items-center px-7 py-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
        >
          View All Properties
        </button>
      </div>
    </Fragment>
  );
};

// const Tab = () => {
//   return <Fragment></Fragment>;
// };

export default FeaturedProperties;
