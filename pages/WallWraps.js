import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import carWash from "../components/assets/Wall Wraps/Car Wash_Exterior Wall Wrap.jpg";
import hotelWall from "../components/assets/Wall Wraps/Exterior Wall Wrap 01.jpg";

import { AiOutlineClockCircle, AiFillDollarCircle } from "react-icons/ai";
import { BsFillKeyFill } from "react-icons/bs";

const WallWraps = () => {
  return (
    <>
      <Head>
        <title>DC Visual - Wall Wraps</title>
        <meta
          name="description"
          content="Best Source for Wall Wraps in Texoma, Dallas and all of North-Central Texas"
          key="desc"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <div className=" w-full">
        <h1 className=" text-3xl pt-24 text-center text-white font-bold">
          Wall Wraps
        </h1>
        <h2 className=" text-xl text-center text-yellow-500 pt-2 tracking-widest px-4">
          Transform Your Space
        </h2>
        <p className=" text-sm text-center text-gray-300 p-4 sm:text-base tracking-widest px-4 sm:px-24 md:px-28 lg:px-48">
          The best way to creatively modify an interior or exterior wall is with
          a wall wrap from DC Visual. You can use your graphics, photos or both
          to permanently or temporarily make a vibrant wall that will display
          your images so much different than paint.
        </p>
        {/*  */}
        {/* START CAROUSEL 1 */}
        {/*  */}

        <div className="flex justify-center items-center w-full bg-gray-900 pt-4 mt-8">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={carWash}
                className=" object-cover pb-5"
                alt="DC Visual - Car Wash Exterior Wall Wrap"
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="">
                  ❮
                </a>
                <a href="#slide2" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image
                src={hotelWall}
                className=" object-cover pb-5"
                alt="DC Visual - Swat F-150 Truck Wrap"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="">
                  ❮
                </a>
                <a href="#slide1" className="">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/* END CAROUSEL 1*/}
        {/*  */}
        {/*  */}

        <h2 className="text-center text-3xl font-bold text-yellow-500 pt-16 px-4">
          Our steps to Wall Transformation
        </h2>

        {/* GET MOVING CONTAINER */}
        <div className="flex flex-wrap gap-3 px-2 justify-center lg:flex">
          {/*  */}
          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <p className="text-2xl text-blue-500 font-black">1</p>
              <h2 className="text-left text-2xl font-bold text-white">
                Design
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              Our team of professionals can help you from the design Concept to
              the Print ready artwork of your Interior or Exterior Wall Wrap.
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <p className="text-2xl text-blue-500 font-black">2</p>
              <h2 className="text-left text-2xl font-bold text-white">Print</h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              We only use the best quality materials and printing equipment to
              ensure your product will be crisp and vibrant
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <p className="text-2xl text-blue-500 font-black">3</p>
              <h2 className="text-left text-2xl font-bold text-white">
                Install
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              With our 3M Certified installers, we can be sure that your Wall
              Wrap gets installed properly the first time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WallWraps;
