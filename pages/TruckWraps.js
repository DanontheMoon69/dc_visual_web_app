import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import eco01 from "../components/assets/Partial Wraps/F-150 Satin Black_Partial Wrap.jpg";
import rockstarTruck from "../components/assets/Truck Wraps/Chase Truck Wrap_01.jpg";
import swatTruck from "../components/assets/Truck Wraps/f-150_Satin Black Wrap_Satin Graphic Kit.jpg";
import koaTruck from "../components/assets/Truck Wraps/Matte Military Green_Ram 2500.jpg";
import futuresFinsTruck from "../components/assets/Truck Wraps/Chevy Silverado Matte Metallic Grey Wrap.jpg";
import rockstarTruck2 from "../components/assets/Truck Wraps/Ram 2500_Graphic Kit.jpg";

import { AiOutlineClockCircle, AiFillDollarCircle } from "react-icons/ai";
import { BsFillKeyFill } from "react-icons/bs";

const TruckWraps = () => {
  return (
    <>
      <Head>
        <title>DC Visual - Truck Wraps</title>
        <meta
          name="description"
          content="Best Source for Truck Wraps in Texoma, Dallas and all of North-Central Texas"
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
          Truck Wraps
        </h1>
        <h2 className=" text-xl text-center text-yellow-500 pt-2 tracking-widest px-4">
          Get Your Name Out There
        </h2>
        <p className=" text-sm text-center text-gray-300 p-4 sm:text-base tracking-widest px-4 sm:px-24 md:px-28 lg:px-48">
          Truck wraps offer businesses a smart and unique solution to boost
          brand awareness, especially for small businesses looking to expand
          their client base.
        </p>
        {/*  */}
        {/* START CAROUSEL 1 */}
        {/*  */}

        <div className="flex justify-center items-center w-full bg-gray-900 pt-4 mt-8">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={rockstarTruck}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack F-350 Truck Wrap"
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
                src={swatTruck}
                className=" object-cover pb-5"
                alt="DC Visual - Swat F-150 Truck Wrap"
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
                src={koaTruck}
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
                alt="DC Visual - Ecoworkz F-150 Truck Wrap"
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
                src={futuresFinsTruck}
                className=" object-cover pb-5"
                alt="DC Visual - Futures Fins Chevy Silverado Truck Wrap"
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
                src={rockstarTruck2}
                className=" object-cover pb-5"
                alt="DC Visual - Rockstar Energy Ram 2500 Truck Wrap"
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
          Let&apos;s Get Moving
        </h2>

        {/* GET MOVING CONTAINER */}
        <div className="flex flex-wrap gap-3 px-2 justify-center lg:flex">
          {/*  */}
          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <AiOutlineClockCircle className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                48 Hours
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              At DC Visual, we understand how important your truck is for your
              daily business operations. The installation process of our truck
              wraps can be completed in just 48 hours.
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <BsFillKeyFill className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                Nationwide
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              We have a nationwide network of wrap installers, so you have the
              option of having your truck wrapped near your place of work.
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <AiFillDollarCircle className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                Cost Effective
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              When it comes to outdoor advertising, mobile billboards are the
              most cost effective option. Truck wraps have the lowest cost per
              thousand impressions, or CPM.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TruckWraps;
