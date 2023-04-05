import Image from "next/image";
import React from "react";
import Link from "next/link";
import rzr01 from "../components/assets/RZR/Wolfpack_RZR_4 Seater_Dunes.jpg";
import mustang01 from "../components/assets/Car Wraps/Ford Mustang_matte blue Wrap.jpg";
import qar01 from "../components/assets/Car Wraps/Corvette z06_matte black wrap.jpg";
import eco01 from "../components/assets/Partial Wraps/F-150 Satin Black_Partial Wrap.jpg";
import rv01 from "../components/assets/RV Wraps/RV Wrap 01.jpg";
import van01 from "../components/assets/Van Wraps/Ford Transit Wrap_Matte Black and Matte Metallic Grey.jpg";
import USA from "../components/assets/Flags/USA.png";
import texasFlag from "../components/assets/Flags/Texas.png";
import dcLogo from "../components/assets/dcVisual-HeaderLogo.png";
import steezy from "../components/assets/Dimensional Lettering/Steezy_2 inch Thick Letters.jpg";
import libertyMoss from "../components/assets/Dimensional Lettering/Moss Wall Sign witih White Letters.jpg";
import pgc from "../components/assets/Dimensional Lettering/Interior Acrylic Lettering.jpg";
import swat from "../components/assets/Truck Wraps/f-150_Satin Black Wrap_Satin Graphic Kit.jpg";
import usBank from "../components/assets/Food Truck Wraps/US Bank Food Truck Wrap.jpg";
import vacTruck from "../components/assets/Vacuum Truck Wraps/Vacuum Truck Wrap 04.jpg";
import PreferredInstaller3m from "../components/assets/Logos/3M_Preferred Installer_Emblem.png";
import Script from "next/script";

// GOOGLE ANALYTICS

import { Montserrat } from "next/font/google";
import Head from "next/head";
const montserrat = Montserrat({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>DC Visual - Fleet Branding Company</title>
        <meta
          name="description"
          content="#1 Source for Fleet Wraps, Wall Wraps, Windows Wraps & Floor Wraps in Texoma, Dallas and all of North-Central Texas"
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
      <div className=" flex flex-col items-center    text-center h-full pt-24 pb-15 ">
        {/*  */}
        {/* "RIGHT PRODUCT" MODAL */}
        {/*  */}
        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">We&apos;re Here to Help!</h3>
            <p className=" text-start py-4 text-sm tracking-wider">
              Custom Vehicle Wraps & Graphics are a very important part of small
              business advertising, which is why we have a variety of different
              product options for our wraps available for your needs. Although,
              here at DC Visual we understand that not all companies are going
              to be the same. Our team of professionals are here to answer all
              of your Wrap and Graphic questions. Whether you&apos;re inquiring
              about product differences, material strength, or lifespan, our
              team has you covered! So, if you&apos;re even a little unsure
              about what you&apos;re ordering, reach out, and we can walk you
              through the whole process for our products and services from start
              to finish.
            </p>
            <div className="flex justify-end">
              <Link href="/Quote">
                <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                  Get a Quote
                </button>
              </Link>
              <label
                htmlFor="my-modal-1"
                className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
              >
                Close
              </label>
            </div>
          </div>
        </div>
        {/*  */}
        {/* END "RIGHT PRODUCT" MODAL */}
        {/*  */}
        {/*  */}
        {/* "WHY GET A WRAP" MODAL */}
        {/*  */}
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Why Should You Get a Wrap?</h3>
            <p className=" text-start py-4 text-sm tracking-wider">
              Mobile advertising is the fastest growing form of advertising.
              There is no denying that fleet graphics offer the best cost per
              impression value due to the exposure they receive daily. With an
              average lifespan of 3-5 years, your wrap will be constantly
              exposed to potentially tens of thousands of people per day,
              depending on area. Keep in mind that these impressions are most
              likely individuals who are not out of your territory, or beyond
              your market, but are people who can access your services due to
              their close proximity to your business location. However, if you
              commute, you may be capable of capturing the attention of a much
              greater span of attention from multiple cities, and in some cases,
              even states. On average, the U.S. population spends two hours per
              day on the road, and what are they noticing, the vehicles changing
              lanes next to them, stopped at the red light, or simply driving
              alongside them. Don&apos;t miss the opportunity to reach out to
              these people. Consumers are bombarded by advertising everywhere
              they turn, and are desensitized to traditional media. Creative
              marketing is needed to maximize your advertising and branding
              budget. With today&apos;s fuel prices on the rise, deferring your
              costs in any way can help your bottom line. Mobile advertising
              costs only a fraction of TV, radio, print, or even conventional
              billboards.
            </p>
            <div className="flex justify-end">
              <Link href="/Quote">
                <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                  Get a Quote
                </button>
              </Link>
              <label
                htmlFor="my-modal-2"
                className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
              >
                Close
              </label>
            </div>
          </div>
        </div>
        {/*  */}
        {/* END "WHY GET A WRAP" MODAL */}
        {/*  */}
        {/*  */}
        {/* PAGE START */}
        {/*  */}
        <div className=" w-full bg-gray-900 scrollbar-hide">
          <div className="flex gap-3 items-center justify-center text-gray-400 text-xs font-semibold tracking-widest p-4 mb-2">
            <Image src={USA} alt="USA" className=" w-16" />

            <div className="flex flex-col px-1 text-2xl text-white font-black">
              <h1>DC VISUAL</h1>
              <h2 className="text-sm font-normal">Lewisville, TX</h2>
              <h2 className="text-sm font-normal">Texoma Vehicle Wraps</h2>
            </div>
            <Image src={texasFlag} alt="USA" className=" w-16" />
          </div>
        </div>
        <div className="flex items-center text-white font-bold text-left leading-8 mt-5 text-3xl">
          <Image
            src={PreferredInstaller3m}
            height={80}
            width={80}
            className="pr-3"
          />{" "}
          3M Preferred
          <br />
          Installer
        </div>
        <h3 className=" text-yellow-500 text-xs sm:text-lg font-semibold tracking-widest mt-4">
          FULL SERVICE FLEET BRANDING COMPANY
        </h3>
        <div className=" text-white text-3xl sm:text-4xl font-bold  mt-1 tracking-wider">
          DRIVE YOUR BRAND
        </div>
        <h3 className=" text-yellow-500 text-md sm:text-lg font-semibold tracking-widest mb-5 mt-1">
          DESIGN | PRINT | INSTALL
        </h3>

        {/*  */}
        {/* START CAROUSEL 1 */}
        {/*  */}

        <div className="flex justify-center items-center w-full bg-gray-900 pt-4">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={rzr01}
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
                src={mustang01}
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
        <div className="  w-full flex justify-center items-center">
          <div className="flex flex-col ">
            <div className=" text-yellow-500  font-bold text-2xl sm:text-3xl mt-3">
              WE LOVE WHAT WE DO.
            </div>
            <div className=" text-white text-md p-4 mx-3 max-w-3xl text-center">
              We get to do something amazing every day — create great, effective
              graphics for our clients who really need it and want to share it.
              We deliver original ideas that impact your commercial fleet and
              branding projects.
            </div>
            <div className=" p-4 mt-6 mb-4">
              <div className=" text-yellow-500 mb-4 text-xl font-bold sm:text-3xl">
                Why Should You Get A Wrap?
              </div>
              <div className="  text-md   px-2 ">
                <label
                  htmlFor="my-modal-2"
                  className=" bg-gray-700 px-4 py-2  hover:bg-gray-800 transition hover:cursor-pointer hover:ease-in hover:duration-200 rounded-full mt-5"
                >
                  Learn More Here!
                </label>
              </div>
            </div>
            <div className=" text-white text-3xl font-bold bg-gray-600  sm:rounded-md  p-4 animate-pulse">
              GET A QUOTE
              <Link href="/Quote">
                <div className="text-sm font-normal">
                  Click here to Contact us Today
                </div>
              </Link>
            </div>
            <div className=" text-yellow-500 font-bold mt-8 px-2 sm:text-3xl">
              Need Help Choosing the Right Product?
            </div>
            <div className="flex justify-center w-full text-sm">
              <label
                htmlFor="my-modal-1"
                className=" bg-gray-700 px-4 py-2 hover:cursor-pointer hover:bg-gray-800 transition hover:ease-in hover:duration-200 rounded-full mt-4 tracking-wide"
              >
                Click Here. We&apos;ve Got You Covered!
              </label>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex w-full sm:w-1/2 justify-center items-center mt-5"></div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* START CAROUSEL 2 */}
        {/*  */}
        {/*  */}
        <div className="flex justify-center items-center w-full bg-gray-900 pt-4">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide7" className="carousel-item relative w-full">
              <Image
                src={steezy}
                className=" object-cover pb-5"
                alt="DC Visual - STEEZY 3 Inch Deep Dimensional Lettering"
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide12" className="">
                  ❮
                </a>
                <a href="#slide8" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide8" className="carousel-item relative w-full">
              <Image
                src={libertyMoss}
                className=" object-cover pb-5"
                alt="DC Visual - Moss Wall Dimensional Letters"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide7" className="">
                  ❮
                </a>
                <a href="#slide9" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide9" className="carousel-item relative w-full">
              <Image
                src={pgc}
                className=" object-cover pb-5"
                alt="DC Visual - Interior Acrylic Dimensional Lettering"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide8" className="">
                  ❮
                </a>
                <a href="#slide10" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide10" className="carousel-item relative w-full">
              <Image
                src={swat}
                className=" object-cover pb-5"
                alt="DC Visual - Satin Black Truck Wrap with Spot Graphic Overlays"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide9" className="">
                  ❮
                </a>
                <a href="#slide11" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide11" className="carousel-item relative w-full">
              <Image
                src={usBank}
                className=" object-cover pb-5"
                alt="DC Visual - US Bank Food Truck Wrap"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide10" className="">
                  ❮
                </a>
                <a href="#slide12" className="">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide12" className="carousel-item relative w-full">
              <Image
                src={vacTruck}
                className=" object-cover pb-5"
                alt="DC Visual - Vacuum Truck Wrap"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide11" className="">
                  ❮
                </a>
                <a href="#slide7" className="">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* END CAROUSEL 2*/}
        {/*  */}
        {/*  */}
      </div>
    </>
  );
}
