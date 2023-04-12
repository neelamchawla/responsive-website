import React from 'react'

function Updated() {
  return (
    <section className="mt-4 md:mt-4 pb-40 mb-5 relative">
        <div className="diamond-shield-bg"></div>
        <div className="diamond-shield"></div>
        <div className="justify-center text-center flex flex-wrap mt-4">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-gradient mb-2">Stay updated</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            </p>

            <form className="inline-form">
              <button
                className="form-svg text-white font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                style={{ zIndex: 5, paddingLeft: "1.3em" }}
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
          </div>
        </div>
      </section>
  )
}

export default Updated