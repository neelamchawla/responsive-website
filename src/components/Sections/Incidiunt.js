import React from 'react';
import BGImg from "../../assets/img/OIP (2).png";
import BGImg2 from "../../assets/img/OIP (3).png";

function Incidiunt() {
  return (
    <section className="py-6 bg-white-600 overflow-hidden">
        <img src={BGImg} className="sm\:hidden bg-shape-img-Incidiunt1" />
        <img src={BGImg2} className="bg-shape-img-Incidiunt2" />

        <div className="container mx-auto pb-64">

          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">


              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    Omnis Iste Natus ut Incidiunt
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Lorem ipsum is so ubiquitous because it is so versatile. Select how many paragraphs you want, copy, paste, and break the lines wherever it is convenient.
                    <br />
                    Lorem Ipsum exists because words are powerful. If you fill up your page with draft copy about your client’s business
                  </p>

                  <div className="mt-12">
                    <a
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 btn-gradient"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full flex md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                  alt="..."
                  className="max-w-120-px rounded-lg shadow-xl"
                  style={{ marginLeft: "2em" }}
                  src={require("assets/img/pic1.PNG").default}
                />
                <img
                  alt="..."
                  className="max-w-120-px rounded-lg shadow-xl"
                  style={{ marginLeft: "2em" }}
                  src={require("assets/img/pic2.PNG").default}
                />
                <img
                  alt="..."
                  className="max-w-120-px rounded-lg shadow-xl"
                  style={{ marginLeft: "2em" }}
                  src={require("assets/img/pic3.PNG").default}
                />
              </div>

            </div>
          </div>

        </div>
      </section>
  )
}

export default Incidiunt