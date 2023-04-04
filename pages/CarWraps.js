import React from "react";
import Image from "next/image";
import rzr01 from "../components/assets/RZR/Wolfpack_RZR_4 Seater_Dunes.jpg";
import mustang01 from "../components/assets/Car Wraps/Ford Mustang_matte blue Wrap.jpg";
import qar01 from "../components/assets/Car Wraps/Corvette z06_matte black wrap.jpg";
import eco01 from "../components/assets/Partial Wraps/F-150 Satin Black_Partial Wrap.jpg";
import rv01 from "../components/assets/RV Wraps/RV Wrap 01.jpg";
import van01 from "../components/assets/Van Wraps/Ford Transit Wrap_Matte Black and Matte Metallic Grey.jpg";
import porsche1 from "../components/assets/Porsche Wraps/Porsche GT3 Wrap 04.jpg";
import porsche2 from "../components/assets/Porsche Wraps/Porsche GT3 Wrap 02.jpg";
import fisker from "../components/assets/Car Wraps/Fisker Wrap 01.jpeg";
import mustang02 from "../components/assets/Car Wraps/Ford Mustan_Matte Military Green_Satin Black Wrap.jpg";

const CarWraps = () => {
  return (
    <>
      <div className=" w-full">
        <h1 className=" text-3xl pt-24 text-center text-white font-bold">
          Car Wraps
        </h1>
        <h2 className=" text-xl text-center text-blue-500 pt-2 tracking-widest px-4">
          Every Traffic Jam is an Opportunity to Market your Business
        </h2>
        <p className=" text-sm text-center text-gray-300 p-4 sm:text-base tracking-widest">
          Your car is a rent-free mobile advertising machine that can turn every
          traffic jam into a marketing opportunity.
        </p>
        {/*  */}
        {/* START CAROUSEL 1 */}
        {/*  */}

        <div className="flex justify-center items-center w-full bg-gray-900 pt-4 mt-8">
          <div className="carousel w-full sm:w-3/4 h-72">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={porsche1}
                className=" object-cover pb-5"
                alt="DC Visual - Mr Tempo Porsche GT3 Car Wrap"
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
                src={porsche2}
                className=" object-cover pb-5"
                alt="DC Visual - Porsche GT3 Red Camo Car Wrap"
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
                alt="DC Visual - Feras Qartoumy Matte Black Printed Race Liver Car Wrap"
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
                src={fisker}
                className=" object-cover pb-5"
                alt="DC Visual - Fisker Gloss Red Car Wrap"
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
                src={mustang02}
                className=" object-cover pb-5"
                alt="DC Visual - Mustang Matte Green and Black two tone Car Wrap"
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
                src={mustang01}
                className=" object-cover pb-5"
                alt="DC Visual - Metallic Matte Blue Mustang Car Wrap"
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

        <div className="">
          <h2 className="text-center text-2xl font-bold text-blue-500 pt-16 px-4">
            A Guide to Car Wraps in Texas
          </h2>

          <p className="sm:px-16 md:px-32 text-white p-4 text-center tracking-wider">
            Are you a looking to get your car wrapped? If so, you&apos;ve come
            to the right place! Here, we&apos;ll tell you all you need to know
            about getting a car wrap in Texas. We&apos;ll try answer questions
            like “What is a car wrap?”, “How much does it cost?”, and “Where can
            I get one?” So buckle up and let&apos;s go!
          </p>
        </div>

        <h1 className="text-center text-3xl font-bold text-blue-500 pt-8">
          What is a Car Wrap?
        </h1>
        <p className="sm:px-16 md:px-32 text-white p-4 text-center tracking-wider">
          A car wrap is essentially a large vinyl sticker that covers your
          entire vehicle. It can be printed with any design or color
          imaginable—from wild colors and patterns to subtle designs and logos.
          Not only do they look great, but most wraps also serve to protect the
          paint on your vehicle from UV damage and scratches caused by everyday
          wear-and-tear. With wrap materials that are warrantied for 3-5 years
          you can be assured your vehicle will be looking great as it ages.{" "}
        </p>
        <h1 className="text-center text-3xl font-bold text-blue-500 pt-8 px-4">
          How Much Does a Car Wrap cost in Texas ?
        </h1>
        <p className="sm:px-16 md:px-32 text-white p-4 text-center tracking-wider ">
          Make an impactful statement on the roads of Texas with a fresh car
          wrap. Depending on your vehicle size, materials and design complexity,
          you could be looking at anything from $1500 to $5000 for full coverage
          or even more if it&apos;s extra special. Our qualified in-house
          professionals can provide great advice on getting started as well as
          give you an exact quote to make sure everything works out perfectly.
        </p>
        <h1 className="text-center text-3xl font-bold text-blue-500 pt-8 px-4">
          Where Can I Get One?
        </h1>
        <p className="sm:px-16 md:px-32 text-white p-4 text-center tracking-wider ">
          Fortunately, there are a few places in Texas to get your car wrapped
          but if you want quality work backed by more than a decade of
          experience you have come to the right place. Not all car wrap places
          are the same , at DC Visual we use materials and techniques that we
          have determined to work great from our years of hands on experience in
          wrapping vehicles. Car wraps are an excellent way to customize your
          ride while also protecting its paint job from wear-and-tear. Whether
          you&apos;re looking for something flashy or something subtle, there
          are plenty of options available to suit any taste or budget. Just make
          sure you consult with experienced professionals before
          committing—it&apos;ll save you time and money in the long run! Now
          that you&apos;ve got all the info you need about car wraps, what are
          you waiting for? Get out there and turn those heads! Vinyl car wraps
          are completely customized. You can literally get any design, which
          allows your company to display its logo and any other relevant
          information that you would like to include. Unlike painting, you have
          the chance to see the completed project before it is done with a 3D
          rendering. You can inspect the printed vinyl before installation,
          giving you a chance to make any last minute revisions.
        </p>
      </div>
    </>
  );
};

export default CarWraps;
