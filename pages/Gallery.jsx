import Image from "next/image";
import Link from "next/link";
import React from "react";
import dcLogo from "../components/assets/dcVisual-HeaderLogo.png";

const Gallery = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center font-bold text-xl text-center pt-48 items-center px-4">
        <Image src={dcLogo} className=" w-36" />
      </div>
      <div className="flex justify-center font-bold text-xl text-white text-center pt-10 items-center px-4">
        We&apos;re working on something great for this at the moment! <br />
      </div>
      <div className="flex justify-center tracking-wider text-white text-center pt-5 items-center px-4">
        Please check back again soon!
      </div>
      <div className="flex justify-center items-center mt-5 rounded-full">
        <Link href="/Contact">
          <div className=" bg-gray-800 px-4 py-2 rounded-full">
            Get in Touch
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
