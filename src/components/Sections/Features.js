import React from 'react'

function Features() {
  return (
    <section className="block relative z-1">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">

                <div className="w-full lg:w-4/12 px-4">
                  
                    <div className="items-center hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-120-px h-auto rounded-lg"
                        src={require("assets/img/icon1.PNG").default}
                      />
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Insurance Included
                      </h5>
                      <h5 className="text-sm font-semibold pb-4 text-center">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                      </h5>
                    </div>
                 
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  
                    <div className="items-center hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-120-px h-auto rounded-lg"
                        src={require("assets/img/icon2.PNG").default}
                      />
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Easy To Use
                      </h5>
                      <h5 className="text-sm font-semibold pb-4 text-center">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                      </h5>
                    </div>
                 
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  
                    <div className="items-center hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-120-px h-auto rounded-lg"
                        src={require("assets/img/icon3.PNG").default}
                      />
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Responsive Alarm
                      </h5>
                      <h5 className="text-sm font-semibold pb-4 text-center">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                      </h5>
                    </div>
                 
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features