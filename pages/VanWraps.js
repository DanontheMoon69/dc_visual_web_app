import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import qar01 from "../components/assets/Car Wraps/Corvette z06_matte black wrap.jpg";
import eco01 from "../components/assets/Partial Wraps/F-150 Satin Black_Partial Wrap.jpg";
import rv01 from "../components/assets/RV Wraps/RV Wrap 01.jpg";
import van01 from "../components/assets/Van Wraps/Ford Transit Wrap_Matte Black and Matte Metallic Grey.jpg";
import van02 from "../components/assets/Van Wraps/Ford Transit Wrap _ 01.jpg";

import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillKeyFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const VanWraps = () => {
  return (
    <>
      <Head>
        <title>DC Visual - Van Wraps</title>
        <meta
          name="description"
          content="Best Source for Van Wraps in Texoma, Dallas and all of North-Central Texas"
          key="desc"
        />
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
      </Head>
      <div className=" w-full">
        <h1 className=" text-3xl pt-24 text-center text-white font-bold">
          Van Wraps
        </h1>
        <h2 className=" text-xl text-center text-yellow-500 pt-2 tracking-widest px-4">
          Who Wants 16 Million Views?
        </h2>
        <p className=" text-sm text-center text-gray-300 p-4 sm:text-base tracking-widest px-4 sm:px-24 md:px-28 lg:px-48">
          According to the American Trucking Association, a cleverly-designed
          van operating in a city has the power to generate up to 16 million
          views each year.
        </p>
        {/*  */}
        {/* START CAROUSEL 1 */}
        {/*  */}

        <div className="flex justify-center items-center w-full bg-gray-900 pt-4 mt-8">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={van01}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack"
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="">
                  ❮
                </a>
                <a href="#slide2" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image
                src={van02}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="">
                  ❮
                </a>
                <a href="#slide3" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Image
                src={qar01}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="">
                  ❮
                </a>
                <a href="#slide4" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <Image
                src={eco01}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="">
                  ❮
                </a>
                <a href="#slide5" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
              <Image
                src={rv01}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="">
                  ❮
                </a>
                <a href="#slide6" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
              <Image
                src={van01}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="">
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
          What the Numbers Say
        </h2>

        {/* GET MOVING CONTAINER */}
        <div className="flex flex-wrap gap-3 px-2 justify-center lg:flex">
          {/*  */}
          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <BsFillArrowUpCircleFill className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                107% Increase in Sales
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              A study conducted by Product Acceptance and Research, Inc. found
              that turning vehicles into mobile billboards resulted in a 107%
              increase in sales versus a 54% increase for static billboards
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <AiFillDollarCircle className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                $0.31 Per View
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              A van wrap can get up to 16 million views a year. You can get a
              thousand impressions for a little more than a quarter of a dollar.
              Keep the wrap for 5 years and it goes down to next to nothing.
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <BiTimeFive className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                5 Second Rule
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              When you come to us for a van wrap for your business, we make sure
              that your brand will be recognized. Your message will be conveyed
              within just five seconds of seeing your van.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VanWraps;
