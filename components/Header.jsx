import Image from "next/image";
import React, { useEffect, useState } from "react";
import dcLogo from "../components/assets/dcVisual-HeaderLogo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
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
      className="fixed  left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <Image
            src={dcLogo}
            alt=""
            className=" w-14 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
          />
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex text-xs"
        >
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
            <Link href="/">HOME</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
            <Link href="/Services">WHAT WE DO</Link>
          </li>

          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
            <Link href="/Gallery">SEE OUR WORK</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
            <Link href="/FAQ">FAQ</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
            <Link href="/Contact">GET IN TOUCH</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <Link href="/Quote">
          <div className=" bg-gray-700 rounded-full text-sm sm:text-xs md:text-sm px-4 py-2 text-center tracking-wide hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg">
            Get a Quote
          </div>
        </Link>
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
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
              ? " sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : " sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="">
            <li
              className="p-4  text-3xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
              onClick={handleNav}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className="p-4 text-3xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
              onClick={handleNav}
            >
              <Link href="/Services">WHAT WE DO</Link>
            </li>

            <li
              className="p-4 text-3xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
              onClick={handleNav}
            >
              <Link href="/Gallery">SEE OUR WORK</Link>
            </li>
            <li
              className="p-4 text-3xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
              onClick={handleNav}
            >
              <Link href="/FAQ">FAQ</Link>
            </li>
            <li
              className="p-4 text-3xl hover:text-gray-500 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
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
