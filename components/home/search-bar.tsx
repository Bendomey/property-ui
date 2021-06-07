import { Fragment, useState, Dispatch, SetStateAction, useRef } from "react";
import cn from "classnames";
import { Transition } from "@headlessui/react";
import { useOutsideAlerter } from "../hooks";

export interface Props {}
interface PropertyTypeProps {
  label: string;
  value: string;
  description: string;
}

const PROPERTY_TYPES: PropertyTypeProps[] = [
  {
    label: "For Sale",
    value: "sale",
    description:
      "Selecting this option will limit your search to on sale properties",
  },
  {
    label: "For Rent",
    value: "rent",
    description:
      " Selecting this option will limit your search to on sale properties",
  },
];

const SearchBar = () => {
  const [propertyType, setPropertyType] = useState<PropertyTypeProps>(
    PROPERTY_TYPES[0]
  );
  return (
    <Fragment>
      <div className={"flex w-full flex-col"}>
        <div className={"flex justify-center"}>
          <div
            className={
              "bg-white w-11/12 flex flex-col sm:flex-col md:flex-row justify-between items-center rounded-md px-1 py-3 sm:px-1 sm:py-3 md:p-1"
            }
          >
            <div className={"flex flex-row items-center w-full "}>
              <div
                className={
                  "border-r w-6/12 sm:w-6/12 md:w-1/3 border-gray-200 px-2"
                }
              >
                <Dropdown type={propertyType} setType={setPropertyType} />
              </div>
              <div className={"mx-2 w-full"}>
                <input
                  type="text"
                  className="focus:ring-0 border-none focus:border-gray-50 block w-full sm:text-sm"
                  placeholder="Search for property...."
                />
              </div>
            </div>
            <div className={"hidden sm:hidden md:block"}>
              <button
                type="button"
                className="inline-flex items-center px-7 py-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg
                  className="-ml-0.5 mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className={"flex sm:flex justify-center mt-5 md:hidden"}>
          <button
            type="button"
            className="inline-flex  justify-center items-center w-11/12 px-7 py-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              className="-ml-0.5 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </Fragment>
  );
};

interface DropdownProps {
  type: PropertyTypeProps;
  setType: Dispatch<SetStateAction<PropertyTypeProps>>;
}

const Dropdown: React.FC<DropdownProps> = ({ type, setType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<any>(null);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false));

  return (
    <Fragment>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <span
        ref={wrapperRef}
        className="inline-flex rounded-md divide-x divide-red-600"
      >
        <div>
          <label id="listbox-label" className="sr-only ">
            Change published status
          </label>
          <div className="relative">
            <div className="relative z-0 inline-flex  rounded-md divide-x divide-red-600">
              <span
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative cursor-pointer inline-flex items-center  text-sm font-medium focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <p className="ml-2.5 text-sm font-medium">{type?.label}</p>
                <svg
                  className="h-5 w-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            {/* <!--
        Select popover, show/hide based on select state.

        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
            <Transition
              show={isOpen}
              enter=""
              enterFrom=""
              enterTo=""
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref: any) => (
                <ul
                  ref={ref}
                  className="origin-top-right absolute z-10 -left-3 mt-6 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  tabIndex={-1}
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-0"
                >
                  {PROPERTY_TYPES.map(
                    (propertyType: PropertyTypeProps, i: number) => (
                      <Fragment key={i}>
                        <li
                          onClick={() => {
                            setType(propertyType);
                            setIsOpen(false);
                          }}
                          className="text-gray-900 hover:bg-gray-100 cursor-pointer select-none relative p-4 text-sm"
                          id="listbox-option-0"
                          role="option"
                        >
                          <div className="flex flex-col">
                            <div className="flex justify-between">
                              {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                              <p
                                className={cn({
                                  "font-semibold":
                                    type.value === propertyType.value,
                                  "font-normal":
                                    type.value !== propertyType.value,
                                })}
                              >
                                {propertyType?.label}
                              </p>

                              {type.value === propertyType.value && (
                                <Fragment>
                                  <span className="text-red-500">
                                    {/* <!-- Heroicon name: solid/check --> */}
                                    <svg
                                      className="h-5 w-5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </Fragment>
                              )}
                            </div>
                            <p className="text-gray-500 mt-2">
                              {propertyType.description}
                            </p>
                          </div>
                        </li>
                      </Fragment>
                    )
                  )}
                </ul>
              )}
            </Transition>
          </div>
        </div>
      </span>
    </Fragment>
  );
};

export { SearchBar };
