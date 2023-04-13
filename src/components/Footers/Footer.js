import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 buffer-margin py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">

              <div className="container mx-auto">
                <div className="justify-center flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4 mt-7">
                    <div className="flex flex-wrap">

                      <div className="w-full lg:w-3/12 px-4">

                        <div>
                          <h5 className="text-xl font-semibold pb-4 text-white text-center">
                            1000+
                          </h5>
                          <h5 className="text-sm font-semibold pb-4 text-white text-center">
                            Happy client’s
                          </h5>
                        </div>
                      </div>

                      <div className="w-full lg:w-3/12 px-4">

                        <div>
                          <h5 className="text-xl font-semibold pb-4 text-white text-center">
                            156
                          </h5>
                          <h5 className="text-sm font-semibold pb-4 text-white text-center">
                            Active projects
                          </h5>
                        </div>
                      </div>

                      <div className="w-full lg:w-3/12 px-4">

                        <div >
                          <h5 className="text-xl font-semibold pb-4 text-white text-center">
                            80+
                          </h5>
                          <h5 className="text-sm font-semibold pb-4 text-white text-center">
                            Customers
                          </h5>
                        </div>

                      </div>

                      <div className="w-full lg:w-3/12 px-4">

                        <div >
                          <h5 className="text-xl font-semibold pb-4 text-white text-center">
                            1482
                          </h5>
                          <h5 className="text-sm font-semibold pb-4 text-white text-center">
                            Finished projects
                          </h5>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              // className="buffer-svg fill-current"
              style={{ fill: "#e8b5ca" }}
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4 mt-8">
              <h4 className="text-3xl text-white font-semibold">agency.</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
                <button
                  className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-messenger"></i>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <form className="inline-form">
                  <button
                  className="form-svg text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      </button>
                    <input className="form-inputbox" type="email" placeholder="Your email" />
                    <div className="mt-12">
                      <a
                        className="get-started text-white form-btn font-bold rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:form-btn-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 btn-gradient"
                      >
                        Subscribe
                      </a>
                    </div>
                  </form>
                  <ul className="list-unstyled">
                    <li className="form-list">
                      <button
                        className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-white hover:text-white font-semibold block pb-2 text-sm"
                      >
                        + (123) 456 - 786 4253
                      </a>
                    </li>
                    <li className="form-list">
                    <button
                  className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-white hover:text-white font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Greenville 24, New York
                      </a>
                    </li>
                    <li className="form-list">
                    <button
                  className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                      <i className="fa fa-clock" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-white hover:text-white font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        09:00 AM - 19:00 PM
                      </a>
                    </li>
                    <li className="form-list">
                    <button
                  className="text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-white hover:text-white font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        your@email.com
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                {new Date().getFullYear()} @ Hogash Studio
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
