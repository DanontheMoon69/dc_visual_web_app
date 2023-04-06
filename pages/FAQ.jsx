import React from "react";
import Head from "next/head";
import Script from "next/script";

const FAQ = () => {
  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>DC Visual - Frequently Asked Wrap Questions</title>
        <meta
          name="description"
          content="We have the solution for your Vehicle Fleet Wraps, Wall Wraps, Window Wraps, Floor Wraps, from Design to Installation. We also offer Web Development!"
          key="desc"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <div className="flex flex-col justify-center items-center pt-24 w-full  max-w-2xl">
        <div className="flex text-3xl font-bold text-white text-center justify-center">
          Frequently Asked Questions
        </div>
        <div className="px-4 pt-4">
          <div className="flex flex-col pt-2">
            <div className="font-bold">What type of wraps do you offer?</div>
            <div className="text-sm pt-2">
              We can Wrap Trucks, Cars, Vans, Box Trucks, RV&apos;s, Boats,
              Trailers, Walls, Windows, Floors or anything else you might want
              to customize. We&apos;ve wrapped Piano&apos;s, Ice Cream Carts,
              Guns, and much more. If you have an idea for something that
              hasn&apos;t been listed, please reach out, We&apos;d be interested
              in trying something new!
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="font-bold">Can I customize my wrap? </div>
            <div className="text-sm pt-2">
              Yes, our Printed Wraps are Full Color Digitally Printed so the
              designs have no limitations. Whether you want a Camo Wrap, Custom
              Race Car Livery, or a Solid Color Two Tone, We have a solution for
              almost any wrap.
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="font-bold">
              How long will it take to wrap my car?{" "}
            </div>
            <div className="text-sm pt-2">
              In most cases, a fleet vehicle wrap installation can be completed
              in a day or 2, but the design and proofing process can sometimes
              take a week or two. Standard turn around time for a Fleet Wrap,
              from concept to completion, is from 10-14 days
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="font-bold">
              How much does it cost to wrap my car?
            </div>
            <div className="text-sm pt-2">
              We offer many different packages for vehicles which make the price
              vary. Our Spot Graphic kits start at $750. Partial Wraps start at
              $1,750 and our Full Wrap Packages start at $3,200. All prices are
              dependant on the work needed to complete the project.
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="font-bold">
              What type of materials do you use for wrapping?
            </div>
            <div className="text-sm pt-2">
              We only use Premium Brand Vinyls. Being a 3M preferred Installer,
              our Go To product is 3M, but we also use Avery Dennison, Hexis and
              Orafol, depending on the color, finish or application we are
              working on.
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="font-bold">
              Do you provide installation services?
            </div>
            <div className="text-sm pt-2">
              Yes, all of our wrap installations are done in-house. Our 3M
              Perferred Installers will ensure your wrap is installed
              professionally, the first time. We also offer Wholesale
              Installations to other local Wrap Companies.
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="font-bold">
              What kind of maintenance do I need to do on my wrap?
            </div>
            <div className="text-sm pt-2">
              Wash your wrap once a week or more often if your vehicle is
              exposed to a lot of dirt or pollutants. You should hand wash it
              using 3M Car Wash Soap 39000, or Meguiar&apos;s NXT Generation Car
              Wash or Deep Crystal Car Wash. We also recommend 3M Quick Detailer
              Spray Wax or Meguiar&apos;s Ultimate Quik Wax. You can use another
              gentle automotive detergent if necessary. Any good brand will
              work. Always use a nice automotive sponge or clean, soft cloth to
              wash your wrap. Rinse vehicle with clean water after washing.
              Minimize water spotting by using a silicone squeegee or chamois to
              remove water. Dry with a clean microfiber cloth.
              <br />
              <br />
              Clean bird droppings and difficult stains immediately. Letting
              them sit for too long will make them harder to remove and may
              permanently damage the wrap. Soak the affected area for a few
              minutes with warm, soapy water to loosen the contaminants. Rinse
              completely and dry with a microfiber cloth. For stubborn
              contaminants, use denatured alcohol, 3M® Citrus Base Cleaner,
              Meguiar&apos;s Gold Class™ Bug and Stain Remover or two parts
              isopropyl alcohol to one part water. Always test these solutions
              on a small area that&apos;s not easily noticeable to ensure the
              cleaner will not harm the wrap. Do not use solvents or oil based
              cleaning products!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
