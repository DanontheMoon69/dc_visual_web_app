import React from "react";
import Image from "next/image";
import partyWith01 from "../components/assets/Wall Wraps/Window Wrap 01.jpg";
import partyWith02 from "../components/assets/Wall Wraps/Window Wrap 02.jpg";
import Head from "next/head";
import Script from "next/script";
import { AiFillDollarCircle, AiOutlineEye } from "react-icons/ai";
import { BsFillKeyFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { WiSnowflakeCold } from "react-icons/wi";
import { FaHandPointRight } from "react-icons/fa";

const WindowWraps = () => {
  return (
    <>
      <Head>
        <title>DC Visual - Window Wraps</title>
        <meta
          name="description"
          content="Best Source for Window Wraps in Texoma, Dallas and all of North-Central Texas"
          key="desc"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <div className=" w-full">
        <h1 className=" text-3xl pt-24 text-center text-white font-bold">
          Window Wraps
        </h1>
        <h2 className=" text-xl text-center text-yellow-500 pt-2 tracking-widest px-4">
          Window Shopping with DC Visual
        </h2>
        <p className=" text-sm text-center text-gray-300 p-4 sm:text-base tracking-widest px-4 sm:px-24 md:px-28 lg:px-48">
          Visual merchandising is one of the most important parts of any
          retail-based business. How will you sell anything if no one is looking
          at it? A strong window display will help your business blossom.
        </p>
        {/*  */}
        {/* START CAROUSEL 1 */}
        {/*  */}

        <div className="flex justify-center items-center w-full bg-gray-900 pt-4 mt-8">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={partyWith01}
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
                src={partyWith02}
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
          </div>
        </div>

        {/*  */}
        {/* END CAROUSEL 1*/}
        {/*  */}
        {/*  */}

        <h2 className="text-center text-3xl font-bold text-yellow-500 pt-16 px-4">
          Maximize Your Space
        </h2>

        {/* GET MOVING CONTAINER */}
        <div className="flex flex-wrap gap-3 px-2 justify-center lg:flex">
          {/*  */}
          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <FaHandPointRight className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                Practical
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              Window graphics can be a very practical branding, promotional, and
              sponsor signage solution as they can provide an added sense of
              privacy while still conveying the desired message.
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <AiOutlineEye className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                See Through
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              Our most popular window graphics material is a one-way viewable
              perforated film that can be mounted on either interior or exterior
              surfaces and allows for some light to shine through the graphics
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <WiSnowflakeCold className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                Frosted
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              A popular option for branding windows and doors with window
              graphics and door graphics is to use a frosted vinyl version of
              custom vinyl lettering that gives the appearance of etched glass.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WindowWraps;
