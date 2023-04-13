import React from 'react';
import BGImg from "../../assets/img/OIP.png";

function Services() {
    return (<>
        <section className="mt-48 md:mt-40 pb-40 relative">
            <img src={BGImg} className="bg-shape-img-section" />
            <div className="justify-center text-center flex flex-wrap mt-24">
                <div className="w-full md:w-6/12 px-12 md:px-4">
                    <h2 className="font-semibold text-4xl">Services</h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </p>
                </div>
            </div>

            <div className="container mx-auto mt-32">
                <div className="justify-center flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4  -mt-24">
                        <div className="flex flex-wrap">

                            <div className="w-full lg:w-4/12 px-4">

                                <div className="items-center p-5 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 card-ht">
                                    <img
                                        alt="..."
                                        className="align-middle border-none max-w-120-px h-auto rounded-lg"
                                        src={require("assets/img/security.PNG").default}
                                    />
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Secure Privacy
                                    </h5>
                                    <h5 className="text-sm font-semibold pb-4 text-center">
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </h5>
                                    <div className="mt-12 mb-5">
                                        <a
                                            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 btn-gradient"
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full lg:w-4/12 px-4">

                                <div className="items-center p-5 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 card-ht">
                                    <img
                                        alt="..."
                                        className="align-middle border-none max-w-120-px h-auto rounded-lg"
                                        src={require("assets/img/figureprint.PNG").default}
                                    />
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Fingerprint Lock
                                    </h5>
                                    <h5 className="text-sm font-semibold pb-4 text-center">
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </h5>
                                    <div className="mt-12 mb-5">
                                        <a
                                            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 btn-gradient"
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full lg:w-4/12 px-4">

                                <div className="items-center p-5 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 card-ht">
                                    <img
                                        alt="..."
                                        className="align-middle border-none max-w-120-px h-auto rounded-lg"
                                        src={require("assets/img/smart.PNG").default}
                                    />
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Smart Control
                                    </h5>
                                    <h5 className="text-sm font-semibold pb-4 text-center">
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </h5>
                                    <div className="mt-12 mb-5">
                                        <a
                                            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 btn-gradient"
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}

export default Services;