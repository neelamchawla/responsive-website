import React from 'react';
import BGImg from "../../assets/img/OIP (2).png";

function Contact() {
  return (
    <section className=" bg-white-600 overflow-hidden">
          <img src={BGImg} className="bg-shape-img-claim" />
        <div className="container mx-auto pb-6">

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">

              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06224132766!2d-74.30932583906728!3d40.697019291653994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1681339716990!5m2!1sen!2sin" width="400" height="300" style={{ border:0  }}
                className="max-w-full rounded-lg shadow-xl"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    Contact
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Lorem ipsum is so ubiquitous because it is so versatile. Select how many paragraphs you want, copy, paste, and break the lines wherever it is convenient.
                  </p>

                  <div className="mt-12">
                  <ul className="list-unstyled">
                    <li className="form-list ml-0">
                      <button
                        className="text-blueGray-500 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                      >
                        + (123) 456 - 786 4253
                      </a>
                    </li>
                    <li className="form-list ml-0">
                    <button
                  className="text-blueGray-500 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Greenville 24, New York
                      </a>
                    </li>
                    <li className="form-list ml-0">
                    <button
                  className="text-blueGray-500 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                      <i className="fa fa-clock" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        09:00 AM - 19:00 PM
                      </a>
                    </li>
                    <li className="form-list ml-0">
                    <button
                  className="text-blueGray-500 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      </button>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-500 font-semibold block pb-2 text-sm"
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
          </div>

        </div>
      </section>
  )
}

export default Contact