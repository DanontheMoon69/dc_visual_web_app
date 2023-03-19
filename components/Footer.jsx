import React from "react";
import Link from "next/link";
import Image from "next/image";
import dcLogo from "../components/assets/dcVisual-HeaderLogo.png";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col gap-3 justify-center items-center text-gray-400 mt-14 pb-24">
      <Image src={dcLogo} alt="" className=" w-14" />
      <ul className="flex flex-wrap justify-center text-xs text-center">
        <li className=" p-1 ">
          <Link href="/">HOME</Link>
        </li>
        <li className=" p-1 ">
          <Link href="/Services">SERVICES</Link>
        </li>

        <li className=" p-1 ">
          <Link href="/Gallery">GALLERY</Link>
        </li>
        <li className=" p-1 ">
          <Link href="/Calendar">PRICING</Link>
        </li>
        <li className=" p-1 ">
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>
      <span className=" text-xs text-center tracking-widest">
        Lewisville, Texas <br /> 714-930-6037
      </span>
    </div>
  );
};

export default Footer;
