import React from "react";
import Image from "next/image";
import rzr01 from "../components/assets/RZR/Wolfpack_RZR_4 Seater_Dunes.jpg";
import mustang01 from "../components/assets/Car Wraps/Ford Mustang_matte blue Wrap.jpg";
import qar01 from "../components/assets/Car Wraps/Corvette z06_matte black wrap.jpg";
import eco01 from "../components/assets/Partial Wraps/F-150 Satin Black_Partial Wrap.jpg";
import rv01 from "../components/assets/RV Wraps/RV Wrap 01.jpg";
import fleet01 from "../components/assets/Fleet Wraps/DC_fleet.png";
import van01 from "../components/assets/Van Wraps/Ford Transit Wrap_Matte Black and Matte Metallic Grey.jpg";
import USA from "../components/assets/Flags/USA.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillKeyFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

const FleetWraps = () => {
  return (
    <>
      <Head>
        <title>DC Visual - Fleet Wraps</title>
        <meta
          name="description"
          content="Best Source for Fleet Wraps in Texoma, Dallas and all of North-Central Texas"
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
          Fleet Wraps
        </h1>
        <h2 className=" text-xl text-center text-yellow-500 pt-2 tracking-widest px-4">
          15 Times Greater Brand Recognition
        </h2>
        <p className=" text-sm text-center text-gray-300 p-4 sm:text-base tracking-widest px-4 sm:px-24 md:px-28 lg:px-48">
          Fleet vehicle advertising boosts name recognition 15 times greater
          than other advertising media. Promote your business all over town
          while you make that next delivery. Or, get your next customer as you
          park to grab some lunch.
        </p>
        {/*  */}
        {/* START CAROUSEL 1 */}
        {/*  */}

        <div className="flex justify-center items-center w-full bg-gray-900 pt-4 mt-8">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={fleet01}
                className=" object-cover pb-5"
                alt="DC Visual - UTV Wolfpack"
              />
            </div>
          </div>
        </div>

        {/*  */}
        {/* END CAROUSEL 1*/}
        {/*  */}
        {/*  */}

        <h2 className="text-center text-3xl font-bold text-yellow-500 pt-16 px-4">
          Maximize Your Fleet
        </h2>

        {/* GET MOVING CONTAINER */}
        <div className="flex flex-wrap gap-3 px-2 justify-center lg:flex">
          {/*  */}
          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <GiBrain className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                97% Recall
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              In a study done by the American Trucking Association, it was
              determined that a whopping 97% of survey participants recalled the
              ad on the test vehicle.
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <BiTimeFive className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                5 Years
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              Our fleet wraps can last up to five years with proper maintenance.
              Wrap your fleet and get a long-term advertising medium for a
              one-time expense.
            </p>
          </div>

          {/*  */}

          <div className=" bg-gray-800 p-4 mt-8 w-full sm:w-1/3 md:w-1/4 rounded-2xl">
            <div className="flex items-center gap-2">
              <AiFillDollarCircle className="text-2xl text-blue-500" />
              <h2 className="text-left text-2xl font-bold text-white">
                Fleet Discount
              </h2>
            </div>
            <p className=" text-white text-left tracking-wider text-sm">
              Minimize your fleet wrap costs and get more value. We give clients
              with pricing discounts relative to the number of vehicles in their
              fleet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FleetWraps;
