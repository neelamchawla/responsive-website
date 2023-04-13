import React from 'react';
import BGImg from "../../assets/img/OIP.png";
import "../../assets/styles/Hero.css";

function Hero() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <img src={BGImg} className="bg-shape-img" />

      <div className="floating">
        <div className='triangle-right'></div>
        <div className='triangle-left'></div>
      </div>

      <div className="container mx-auto items-center flex flex-wrap ">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Faucibus dolor amet
            </h2>
            <h3 className="text-lg leading-relaxed text-blueGray-500">labore et tempor</h3>
            <p className="mt-4 text-sm leading-relaxed text-blueGray-500">
              Loreum ipsum sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt unire dolor.
            </p>
            <div className="mt-12">
              <a
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 btn-gradient"
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="floating1">
        <div className='triangle-left1'></div>
      </div>
      <div className="floating2">
        <div className='triangle-right2'></div>
      </div>
      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 image-hero -mt-48 sm:mt-0 w-10/12 max-h-560px"
        src={require("assets/img/hero-bg.png").default}
        alt="..."
      />

    </section>
  )
}

export default Hero;