import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import dcFleet from "../components/assets/Fleet Wraps/DC_fleet.png";
import peterbilt from "../components/assets/Partial Wraps/Peterbilt_PartialWrap.jpg";
import ram from "../components/assets/Truck Wraps/Ram 2500_Graphic Kit.jpg";
import porsche from "../components/assets/Porsche Wraps/Porsche GT3 Wrap 03.jpg";
import exteriorWall from "../components/assets/Wall Wraps/Exterior Wall Wrap 01.jpg";
import windowWrap from "../components/assets/Wall Wraps/Window Wrap 01.jpg";
import floorWrap from "../components/assets/Floor Wraps/danceFloorWrap_01.jpg";
import design from "../components/assets/Design/graphicDesigner.jpeg";
import webDesign from "../components/assets/Design/WebDesign.jpeg";

const Services = () => {
  return (
    <div className=" flex justify-center w-full  text-white pt-24">
      <Head>
        <title>DC Visual - What We Do</title>
        <meta
          name="description"
          content="From Logo Design & Brand Development to Fleet Wraps and Websites. We've Got You Covered!"
          key="desc"
        />
      </Head>
      {/* MODALS */}

      {/* FLEET WRAPS MODAL */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">What is a Full Wrap?</h3>
          <p className="py-4 text-sm tracking-wider">
            At DC Visual a full wrap in most cases includes both sides, the hood
            and the rear of any vehicle. If warranted, all applicable and
            necessary windows will be wrapped in a see through perforated window
            film. Customers always have the option of adding the roof, bumpers,
            and mirrors if not already included in the wrap. Full wraps do tend
            to be the most effective advertising option when it comes to vehicle
            graphics.
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

      {/* END WRAPS MODAL */}

      {/* PARTIAL WRAPS MODAL */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">What is a Partial Wrap?</h3>
          <p className="py-4 text-sm tracking-wider">
            What is a partial vehicle wrap? A partial wrap at DC Visual is
            anything digitally printed less than a full wrap. For example, on
            pickup trucks the most common partial wrap is all the way down the
            side of the truck, below the windows, and includes the tailgate.
            <br />
            <br />
            These types of wraps offer a more affordable solution to those
            customers who may not have it in their budget to do a full wrap, or
            maybe have multiple vehicles in their fleet that they wish do have
            vehicle graphics put on for advertising. There are endless
            possibilities and options for partial wraps, and each clients needs
            may be unique. In most cases we at DC Visual can integrate the color
            of the vehicle into the actual wrap to give the partial wrap the
            effect of being a complete wrap.
            <br />
            <br /> Partial wraps are equally effective and just as attractive as
            full wraps when our professional artists and installers are working
            on your project.
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

      {/* END PARTIAL WRAPS MODAL */}

      {/* SPOT GRAPHICS MODAL */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">What Are Spot Graphics?</h3>
          <p className="py-4 text-sm tracking-wider">
            Spot graphics are the most affordable solution to advertising on
            your vehicle or fleet of vehicles. Effective and simple,
            strategically placed logos, phone numbers, and descriptive verbiage
            itemizing your companies services will still successfully convey
            what you are trying to get across to the end-user.
            <br />
            <br />
            Most spot graphics projects start as low as $100 and end up being
            less than $1000. <br />
            <br />
            With the professional staff at DC Visual, we will ensure successful
            placement of your graphics in order to successfully get the
            attention of your target demographic, on time, and on budget!
          </p>
          <div className="flex justify-end">
            <Link href="/Quote">
              <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                Get a Quote
              </button>
            </Link>
            <label
              htmlFor="my-modal-3"
              className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      {/* END SPOT GRAPHICS MODAL */}

      {/* WALL WRAPS MODAL */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Transform Your Space</h3>
          <p className="py-4 text-sm tracking-wider">
            The best way to creatively modify an interior or exterior wall is
            with a wall wrap from DC Visual. You can use your graphics, photos
            or both to permanently or temporarily make a vibrant wall that will
            display your images so much different than paint. The image on our
            full wall decals appear as if it is painted on the surface because
            it covers all of the cracks and crevices. However, it is actually
            heated into the surface. Our professionally installed full wall
            wraps will leave your visitors in awe. A few advantages of a wall
            wrap versus a painted wall include the ability to adhere an actual
            photo to the surface, the ability to remove the wrap while
            maintaining the surface behind it, and total clarity of the graphic.
            Just as companies frequently wrap vehicles for advertising we have
            the ability to do the same with facilities. DC Visual can help your
            brand and promote your message or your organization in many
            different ways.
            <br />
            <br />
            Some of the facilities where we have installed custom wall wraps
            include:
            <br />
            <br />
            <span className=" font-semibold">Schools</span>
            <br />
            <span className=" font-semibold">Sports Facilities</span>
            <br />
            <span className=" font-semibold">Hospitals</span>
            <br />
            <span className=" font-semibold">Event Centers</span>
            <br />
            <span className=" font-semibold">Catering Halls</span>
            <br />
            <span className=" font-semibold">Office Buildings</span>
          </p>
          <div className="flex justify-end">
            <Link href="/Quote">
              <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                Get a Quote
              </button>
            </Link>
            <label
              htmlFor="my-modal-4"
              className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      {/* END WALL WRAPS MODAL */}

      {/* WINDOW WRAPS MODAL */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Window Shopping with DC Visual</h3>
          <p className="py-4 text-sm tracking-wider">
            Visual merchandising is one of the most important parts of any
            retail-based business. How will you sell anything if no one is
            looking at it? A strong window display will help your business
            blossom. DC Visual has a number of different solutions for sprucing
            up your drab windows. From perforated window decals that allow
            shoppers to see inside the store while looking at your ad to basic
            vinyl window lettering that welcomes customers with a cool logo, DC
            Visual pieces will excite your customers. We offer fully
            customizable pieces, both big and small, that can fit any budget or
            business
          </p>
          <div className="flex justify-end">
            <Link href="/Quote">
              <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                Get a Quote
              </button>
            </Link>
            <label
              htmlFor="my-modal-6"
              className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      {/* END WINDOW WRAPS MODAL */}

      {/* FLOOR WRAPS & GRAPHICS MODAL */}
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            To the Windows... To the Walls... What about the Floors?
          </h3>
          <p className="py-4 text-sm tracking-wider">
            With DC Visuals Removable Floor Graphics you can add branding,
            advertising, or imagery to the floor of your business, home or
            event. Design your very own unique floor decals for your wedding,
            party or promotional event, and choose from a variety of durable
            materials that are ideal for the floor you want to dress, outdoor or
            indoor. DC Visual Floor Graphics apply smooth, stick great and are
            slip resistant. And when you&apos;re ready to remove your Floor
            Graphics, you can rest assured that they won&apos;t damage the
            flooring or leave a sticky residue behind. Take your advertising and
            promotional tactics to the next level with our custom floor wraps
            and graphics!
          </p>
          <div className="flex justify-end">
            <Link href="/Quote">
              <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                Get a Quote
              </button>
            </Link>
            <label
              htmlFor="my-modal-7"
              className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      {/* END FLOOR WRAPS MODAL */}

      {/* LUXURY COLOR CHANGE MODAL */}
      <input type="checkbox" id="my-modal-8" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Rollin&apos; in Style</h3>
          <p className="py-4 text-sm tracking-wider">
            Vehicle wraps and graphics are not just for advertising purposes.
            Sometimes you simply want to make your vehicles unique, and stand
            out when parked next to the same make and model at the local mall or
            car show. Matte black and matte white do tend to be the hottest
            trend available right now, but here at DC Visiual we are not limited
            by any one color, be it solid, or maybe even a camouflage or
            textured wrap.
          </p>
          <div className="flex justify-end">
            <Link href="/Quote">
              <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                Get a Quote
              </button>
            </Link>
            <label
              htmlFor="my-modal-8"
              className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      {/* END LUXURY COLOR CHANGE MODAL */}

      {/* DESIGN SERVICES MODAL */}
      <input type="checkbox" id="my-modal-9" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            High-Quality Designs at Affordable Costs
          </h3>
          <p className="py-4 text-sm tracking-wider">
            Your logo and branding are a reflection of your professionalism and
            your company&apos;s individual style. Staying consistent in the
            world of branding and design is critical. Which is why every design
            created by our team is formatted using your unique ideas and design
            preference. There is no limit to what DC Visual can help design for
            you. Whether you are looking for a new brand logo, interior decor,
            outdoor signage, or vehicle branding concepts for a fleet, our
            talented design team can make it happen. At DC Visual we pride
            ourselves on high quality designers who deliver creative concepts
            and services.
          </p>
          <div className="flex justify-end">
            <Link href="/Quote">
              <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                Get a Quote
              </button>
            </Link>
            <label
              htmlFor="my-modal-9"
              className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      {/* END DESIGN SERVICES MODAL */}

      {/* DESIGN SERVICES MODAL */}
      <input type="checkbox" id="my-modal-10" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Turn Clicks Into Customers</h3>
          <p className="py-4 text-sm tracking-wider">
            The internet is a goldmine of opportunities for all kinds of
            businesses worldwide. Leverage its power to your advantage.
            Establish your digital presence today and discover your market
            potential with DC Visual&apos;s website design services. From
            website design and development to search engine optimization (SEO)
            and site maintenance, we&apos;ve got you covered!
          </p>
          <div className="flex justify-end">
            <Link href="/Quote">
              <button className="bg-gray-600 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl mr-2">
                Get a Quote
              </button>
            </Link>
            <label
              htmlFor="my-modal-10"
              className="bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-xl"
            >
              Close
            </label>
          </div>
        </div>
      </div>

      {/* END DESIGN SERVICES MODAL */}

      {/* END MODALS */}

      {/* PAGE START */}

      <div className="flex flex-col">
        <div className=" flex justify-center items-center text-4xl font-bold text-center">
          WHAT WE DO
        </div>
        <h3 className="flex justify-center items-center text-center tracking-widest bg-gray-900 w-full my-2 p-2">
          From Concept to Completion
        </h3>
        <h1 className="flex justify-center items-center text-md text-center sm:text-lg tracking-widest px-4 font-bold">
          Custom Wraps, Graphics & Signs
        </h1>
        <h3 className="flex justify-center items-center text-sm text-center tracking-widest px-4 py-2 sm:text-xl text-gray-200 animate-pulse">
          Now Offering Full-Stack Web Development
        </h3>
        {/* FLEET WRAPS */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={dcFleet} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Fleet Wraps</h3>
            <p className=" text-xs">
              Full Color Digital Printed w/ Gloss or Matte Lamination
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-1"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* END FLEET WRAPS */}

        {/* PARTIAL WRAPS */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={peterbilt} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Partial Wraps</h3>
            <p className=" text-xs">
              Full Color Digital Printed Partial Wrap w/ Gloss or Matte
              Lamination
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-2"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* END PARTIAL WRAPS */}

        {/* SPOT GRAPHICS */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={ram} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Spot Graphics</h3>
            <p className=" text-xs">
              - Full Color Digital Printed w/ Gloss <br />- Matte Lamination or
              Die-Cut Vinyl Decals in any available finish.
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-3"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* END SPOT GRAPHICS */}

        {/* LUXURY COLOR CHANGE */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={porsche} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Luxury Color Change</h3>
            <p className=" text-xs">
              - Full Color Digital Printed w/ Gloss or Matte Lamination <br />-
              Any Solid Color in Gloss, Matte or Satin Finish
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-8"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* END SPOT GRAPHICS */}

        {/* WALL WRAPS */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image
              src={exteriorWall}
              alt="USA"
              className=" w-96 object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Wall Wraps</h3>
            <p className=" text-xs">
              Full Color Digital Printed w/ Matte or Luster Lamination.
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-4"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* END WALL WRAPS */}

        {/* WINDOW WRAPS */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={windowWrap} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Window Wraps & Graphics</h3>
            <p className=" text-xs">
              - Full Color Digital Printed w/ Gloss or Matte Lamination
              <br />
              - Printed Perforated Vinyl <br />
              -Die-Cut Vinyl Decals.
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-6"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* END WINDOW WRAPS */}

        {/* FLOOR WRAPS & GRAPHICS */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={floorWrap} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Floor Wraps & Graphics</h3>
            <p className=" text-xs">
              Full Color Digital Printed w/ slip resistant Lamination
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-7"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* END FLOOR WRAPS */}

        {/* DESIGN SERVICES */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={design} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Design Services</h3>
            <p className=" text-xs">High-Quality Designs at Affordable Costs</p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-9"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* DESIGN SERVICES */}

        {/* WEB DESIGN */}

        <div className="card lg:card-side shadow-xl m-3 p-3 bg-gray-900 bg-opacity-30">
          <figure className="p-2">
            <Image src={webDesign} alt="USA" className=" w-96 object-cover" />
          </figure>
          <div className="card-body">
            <h3 className=" text-2xl font-black">Web Design Services</h3>
            <p className=" text-xs">
              Get Found Online and Turn Clicks Into Customers With a
              Well-Optimized Website
            </p>
            <div className="card-actions justify-start">
              <label
                htmlFor="my-modal-10"
                className=" bg-gray-700 px-4 py-2 hover:bg-gray-900 transition hover:ease-in hover:duration-200 rounded-full  mt-5"
              >
                More Info
              </label>
            </div>
          </div>
        </div>

        {/* WEB DESIGN */}
      </div>
    </div>
  );
};

export default Services;
