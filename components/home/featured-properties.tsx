import { Fragment, useState } from "react";
import { PropertyCard } from "../property-card";
import { Tabs } from "../tabs";

export interface Props {}

const FeaturedProperties: React.FC<Props> = ({}) => {
  const [theme, setTheme] = useState("all");
  return (
    <Fragment>
      <div className={"w-full flex justify-center"}>
        <Tabs
          tabs={{
            all: "All",
            house: "House",
            apartment: "Apartment",
            land: "Land",
            exterior: "Exterior",
            building: "Building",
          }}
          selected={theme}
          onChange={setTheme}
          className="mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0"
        />
      </div>

      <div
        className={
          "mt-0 sm:mt-0 md:mt-10 mx-0 sm:mx-0 md:mx-7 grid gap-x-8 gap-y-8 lg:grid-cols-3 lg:max-w-none"
        }
      >
        {[1, 2, 3, 3, 4, 2].map((_, i: number) => (
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
