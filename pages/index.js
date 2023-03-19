import Image from "next/image";
import React from "react";
import Link from "next/link";
import rzr01 from "../components/assets/RZR/Wolfpack_RZR_4 Seater_Dunes.jpg";
import mustang01 from "../components/assets/Car Wraps/Ford Mustang_matte blue Wrap.JPG";
import qar01 from "../components/assets/Car Wraps/Corvette z06_matte black wrap.jpg";
import eco01 from "../components/assets/Partial Wraps/F-150 Satin Black_Partial Wrap.jpg";
import rv01 from "../components/assets/RV Wraps/RV Wrap 01.jpg";
import van01 from "../components/assets/Van Wraps/Ford Transit Wrap_Matte Black and Matte Metallic Grey.jpg";
import USA from "../components/assets/Flags/USA.png";
import texasFlag from "../components/assets/Flags/Texas.png";
import dcLogo from "../components/assets/dcVisual-HeaderLogo.png";
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
        <title>DC Visual - Best Wraps in Texoma</title>
        <meta
          name="description"
          content="#1 Source for Fleet Wraps, Wall Wraps, Windows Wraps & Floor Wraps in Texoma, Dallas and all of North-Central Texas"
          key="desc"
        />
      </Head>
      <div className=" flex flex-col items-center    text-center h-full pt-24 pb-15 ">
        <div className="bg-gray-900 h-3 sm:h-3 w-full"></div>
        <div className="flex gap-3 items-center text-gray-400 text-xs font-semibold tracking-widest p-4 mb-2">
          <Image src={texasFlag} alt="USA" className=" w-16" />
          <div className="flex flex-col">
            <div>Nation Wide Fleet Wrap Services</div>
            <div>3M Preferred Installers</div>
          </div>
          <Image src={USA} alt="USA" className=" w-16" />
        </div>
        <div className="bg-gray-900 h-3 w-full"></div>
        <div className=" text-gray-400 text-xs font-semibold tracking-widest mt-4">
          DESIGN | PRINT | INSTALL
        </div>
        <div className=" text-white  font-bold text-2xl sm:text-3xl mt-3">
          WE LOVE WHAT WE DO.
        </div>
        <div className=" text-gray-400 text-xs font-semibold tracking-widest mb-5 mt-2">
          FLEETS | WALLS | WINDOWS | FLOORS
        </div>

        {/* START CAROUSEL */}

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

        {/* END CAROUSEL */}

        <div className=" text-white text-md p-4 mx-5 max-w-3xl text-center">
          We get to do something amazing every day — create great, effective
          graphics for our clients who really need it and want to share it. We
          deliver original ideas that impact your commercial fleet and branding
          projects.
        </div>
        <div className=" text-white text-3xl font-bold bg-gray-900 sm:w-3/4 sm:rounded-md w-full p-4 animate-pulse">
          GET A QUOTE
          <Link href="/Quote">
            <div className="text-sm font-normal">
              Click here to Contact us Today
            </div>
          </Link>
        </div>
        <div className=" text-white text-xl font-bold mt-4 px-2 sm:text-3xl">
          Choosing The Right Product
        </div>
        <div className=" text-white text-sm tracking-wide mt-3 px-4 text-start max-w-3xl">
          Custom Vehicle Wraps & Graphics are a very important part of small
          business advertising, which is why we have a variety of different
          product options for our wraps available for your needs. Although, here
          at DC Visual we understand that not all companies are going to be the
          same. Our team of professionals are here to answer all of your Wrap
          and Graphic questions. Whether you&apos;re inquiring about product
          differences, material strength, or lifespan, our team has you covered!
          So, if you&apos;re even a little unsure about what you&apos;re
          ordering, reach out, and we can walk you through the whole process for
          our products and services from start to finish.
        </div>
        <div className=" mt-5 w-48">
          <Image src={dcLogo} alt="DC Visual" />
        </div>
        <div className="mt-2 tracking-widest font-bold text-gray-500 text-sm">
          WRAPS | GRAPHICS | DESIGN | WEB
        </div>
        <div className=" bg-gray-900 p-4 mt-6">
          <div className=" text-white text-xl font-bold  px-2 sm:text-3xl">
            Why Should you Get a Wrap?
          </div>
          <div className=" text-white text-sm tracking-wide mt-3 px-4 text-start max-w-3xl">
            Mobile advertising is the fastest growing form of advertising. There
            is no denying that fleet graphics offer the best cost per impression
            value due to the exposure they receive daily. With an average
            lifespan of 3-5 years, your wrap will be constantly exposed to
            potentially tens of thousands of people per day, depending on area.
            Keep in mind that these impressions are most likely individuals who
            are not out of your territory, or beyond your market, but are people
            who can access your services due to their close proximity to your
            business location. However, if you commute, you may be capable of
            capturing the attention of a much greater span of attention from
            multiple cities, and in some cases, even states. On average, the
            U.S. population spends two hours per day on the road, and what are
            they noticing, the vehicles changing lanes next to them, stopped at
            the red light, or simply driving alongside them. Don&apos;t miss the
            opportunity to reach out to these people. Consumers are bombarded by
            advertising everywhere they turn, and are desensitized to
            traditional media. Creative marketing is needed to maximize your
            advertising and branding budget. With today&apos;s fuel prices on
            the rise, deferring your costs in any way can help your bottom line.
            Mobile advertising costs only a fraction of TV, radio, print, or
            even conventional billboards.
          </div>
        </div>
      </div>
    </>
  );
}
