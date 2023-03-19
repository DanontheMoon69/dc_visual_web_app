import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 w-full">
      <Head>
        <title>DC Visual - Wraps | Graphics | Signs</title>
        <meta
          name="description"
          content="#1 Source for Wraps - Fleets, walls, windows & floors"
          key="desc"
        />
      </Head>
      <div className={montserrat.className}>
        <div>
          <Header />
        </div>

        <div>{children}</div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
