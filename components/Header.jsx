import Image from "next/image";
import React, { useEffect, useState } from "react";
import dcLogo from "../components/assets/dcVisual-HeaderLogo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [servNav, setServNav] = useState(true);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
    if (nav == false) {
      setServNav(true);
    }
  };

  const handleServNav = () => {
    setServNav(!servNav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor("#101827");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed  left-0 top-0 w-full z-10 ease-in duration-300 sm:pt-2"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <Image
            src={dcLogo}
            alt=""
            className=" w-14 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
          />
        </Link>
        {servNav ? (
          <div className="flex flex-col">
            <ul
              style={{ color: `${textColor}` }}
              className="hidden lg:flex lg:gap-3 lg:justify-center"
            >
              <li className="text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer">
                <Link href="/">HOME</Link>
              </li>

              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
                <Link href="/Services">SERVICES</Link>
              </li>
              <li className="text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
                <Link href="/FAQ">FAQ</Link>
              </li>
              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
                <Link href="/Contact">GET IN TOUCH</Link>
              </li>
            </ul>
            <ul
              style={{ color: `${textColor}` }}
              className="hidden lg:flex lg:gap-3 lg:justify-center tracking-wider pt-3"
            >
              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer">
                <Link href="/CarWraps">CAR WRAPS</Link>
              </li>
              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer">
                <Link href="/TruckWraps">TRUCK WRAPS</Link>
              </li>
              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer">
                <Link href="/VanWraps">VAN WRAPS</Link>
              </li>
              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer">
                <Link href="/FleetWraps">FLEET WRAPS</Link>
              </li>
              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer text-center">
                <Link href="/WallWraps">WALL WRAPS</Link>
              </li>
              <li className=" text-xs hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer text-center">
                <Link href="/WindowWraps">WINDOW WRAPS</Link>
              </li>
            </ul>{" "}
          </div>
        ) : null}

        {/* Mobile Button */}
        <div className="flex  gap-2  items-center">
          <Link href="/Quote">
            <div className=" bg-gray-700 rounded-full text-xs sm:text-xs md:text-sm px-4 py-2 text-center tracking-wide hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg hover:bg-blue-700">
              Get a Quote
            </div>
          </Link>
          <a href="tel:+17149306037">
            <div className=" bg-gray-500 rounded-full text-xs sm:text-xs md:text-sm px-4 py-2 text-center tracking-wide hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg hover:bg-blue-700">
              Give us a Call
            </div>
          </a>
        </div>
        <div
          onClick={handleNav}
          className="block lg:hidden z-10 cursor-pointer hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
        >
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Meu */}
        <div
          className={
            nav
              ? " lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 overflow-scroll"
              : " lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
          }
        >
          <ul className="">
            <li
              className="p-2 text-2xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer"
              onClick={handleNav}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer"
              onClick={handleNav}
            >
              <Link href="/CarWraps">CAR WRAPS</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer"
              onClick={handleNav}
            >
              <Link href="/TruckWraps">TRUCK WRAPS</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer"
              onClick={handleNav}
            >
              <Link href="/VanWraps">VAN WRAPS</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer"
              onClick={handleNav}
            >
              <Link href="/FleetWraps">FLEET WRAPS</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer"
              onClick={handleNav}
            >
              <Link href="/WallWraps">WALL WRAPS</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg cursor-pointer"
              onClick={handleNav}
            >
              <Link href="/WindowWraps">WINDOW WRAPS</Link>
            </li>

            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
              onClick={handleNav}
            >
              <Link href="/Services">SERVICES</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
              onClick={handleNav}
            >
              <Link href="/FAQ">FAQ</Link>
            </li>
            <li
              className="p-2 text-xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
              onClick={handleNav}
            >
              <Link href="/Contact">GET IN TOUCH</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
