import { Fragment } from "react";
import Banner from "../components/home/banner";
import Header from "../components/header";
import { Seo } from "../components/Seo";
import { Testimonials } from "../components/home/testimonials";
import { Layout } from "../layout/layout";
import FeaturedProperties from "../components/home/featured-properties";

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

        {/* About Us */}
        <div className="relative bg-white py-5 sm:py-5">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width="404"
                  height="392"
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 bg-red-500  bg-opacity-0"
                    // style="mix-blend-mode: multiply;"
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-red-600 opacity-70"></div>
                  <div className="relative px-8">
                    <div>
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                        alt="Workcation"
                      />
                    </div>
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          Tincidunt integer commodo, cursus etiam aliquam neque,
                          et. Consectetur pretium in volutpat, diam. Montes,
                          magna cursus nulla feugiat dignissim id lobortis amet.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-red-200">
                          Sarah Williams, CEO at Workcation
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-5 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                  Claim your best living with us!
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi. Cursus faucibus
                    nunc nisl netus morbi vel porttitor vitae ut. Amet vitae
                    fames senectus vitae.
                  </p>
                  <p className="text-base leading-7">
                    Sollicitudin tristique eros erat odio sed vitae, consequat
                    turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                    Eros eu viverra donec ut volutpat donec laoreet quam urna.
                    Sollicitudin tristique eros erat odio sed vitae, consequat
                    turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                    Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  </p>
                  <p className="text-base leading-7">
                    Rhoncus nisl, libero egestas diam fermentum dui. At quis
                    tincidunt vel ultricies. Vulputate aliquet velit faucibus
                    semper. Pellentesque in venenatis vestibulum consectetur
                    nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                    Morbi enim fermentum lacus in. Viverra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* featured property listings */}
        <div className={"w-full bg-gray-50"}>
          <div className="px-6 py-6 flex flex-col  max-w-7xl mx-auto md:py-12 md:px-12 lg:py-16 lg:px-4 xl:flex xl:items-center">
            <div className={"w-full flex justify-center items-center"}>
              <h1 className={"text-2xl sm:text-2xl md:text-4xl font-bold "}>
                Featured Property Deals
              </h1>
            </div>
            <p
              className={
                "text-center w-full sm:w-full md:w-1/2 mt-3 text-sm text-gray-500"
              }
            >
              &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo expedita voluptas culpa sapiente alias molestiae. &rdquo;
            </p>

            {/* properties plus filter */}
            <div className={"mt-10 w-full "}>
              <FeaturedProperties />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* added newsletter */}
        <div className="bg-white">
          <div className="bg-red-700">
            <div className="px-6 py-6  max-w-7xl mx-auto md:py-12 md:px-12 lg:py-16 lg:px-4 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Want property news and updates?
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-red-200">
                  Sign up for our newsletter to stay up to date.
                </p>
              </div>
              <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form className="sm:flex bg-white p-1 rounded-md">
                  <label htmlFor="emailAddress" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-none px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-white rounded-md"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-red-200">
                  We care about the protection of your data. Read our{" "}
                  <a href="#" className="text-white font-medium underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
