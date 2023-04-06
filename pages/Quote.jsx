import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/navigation";

const Quote = () => {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    reply_to: "",
    ph_num: "",
    service: "",
    project_description: "",
  });
  const route = useRouter();
  const form = useRef();

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const currentEmail = form.current;
    if (currentEmail == null) return;

    emailjs
      .sendForm(
        "service_6lyxxel",
        "template_j8imrgk",
        currentEmail,
        "iGfY2czai-0quZduT"
      )
      .then(
        (result) => {
          alert(
            "Quote Request Received! We will get back to you as soon as we can!"
          );

          route.push("/");
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-transparent pt-24">
      <Head>
        <title>DC Visual - Wrap Quote</title>
        <meta
          name="description"
          content="Get a quote for your next Car Wrap, Truck Wrap, Van Wrap, Fleet Wrap, Wall Wrap or Window Wrap"
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
      <div className="flex flex-col">
        <h2 className=" text-white text-4xl font-bold text-center">
          Looking to get a wrap?
        </h2>
        <span className="text-center p-4">
          Please submit the quote form below and one of our team members will
          reach out to you as soon as possible!
        </span>
        <div className="flex justify-center mt-3 px-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-1/2 sm:w-3/4"
          >
            <h1 className="flex justify-center  mt-2 mb-4 text-xl sm:text-2xl font-bold text-white">
              Let us Quote your Wrap Project!
            </h1>
            <div className="block sm:flex sm:gap-2 mb-6">
              <div className=" sm:w-1/2 w-full">
                <label className="block text-xs mb-2">First Name *</label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" sm:w-1/2 w-full">
                <label className="block text-xs mt-2 mb-2 sm:mt-0">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mt-2 sm:mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <label className="block text-xs mb-2">Company</label>
              <input
                type="text"
                name="company"
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Company"
              />
            </div>
            <div className="form-group mb-6">
              <label className="block text-xs mb-2">Address *</label>
              <input
                type="text"
                name="address1"
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Street Address"
                required
              />
              <input
                type="text"
                name="address2"
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal mt-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Street Address Line 2"
              />
            </div>
            <div className="flex  gap-3 mb-6">
              <div className="w-1/2">
                <label className="block text-xs mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="City"
                  required
                />
              </div>
              <div className=" w-1/2">
                <label className="block text-xs mb-2">State *</label>
                <select
                  name="state"
                  onChange={handleChange}
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                >
                  <option value={null}>Select State</option>

                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">Dist of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
            <div className="form-group mb-6">
              <label className="block text-xs mb-2">Zip Code *</label>
              <input
                type="text"
                name="zip"
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Zip Code"
                required
              />
            </div>

            <div className="form-group mb-6">
              <label className="block text-xs mb-2">Email Address *</label>
              <input
                type="text"
                name="reply_to"
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>
            <div className="form-group mb-6">
              <label className="block text-xs mb-2">Phone Number *</label>
              <input
                type="text"
                name="ph_num"
                onChange={handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="flex  gap-3 mb-6">
              <div className=" w-full">
                <label className="block text-xs mb-2">Service Needed *</label>
                <select
                  name="service"
                  onChange={handleChange}
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                >
                  <option value={null}>Select a Service</option>

                  <option value="Fleet Wrap">Fleet Vehicle Wrap</option>
                  <option value="Partial Wrap">Vehicle Partial Wrap</option>
                  <option value="Spot Graphics">Vehicle Spot Graphics</option>
                  <option value="Vehicle Restyling / Color Change">
                    Vehicle Restyling / Color Change
                  </option>
                  <option value="Wall Wrap">Wall Wrap</option>
                  <option value="Window Wrap or Graphics">
                    Window Wrap or Graphics
                  </option>
                  <option value="Floor Wrap or Graphics">
                    Floor Wrap or Graphics
                  </option>
                  <option value="Signage">Signage</option>
                  <option value="Design Services">Design Services</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>
            </div>
            <div className="form-group mb-6">
              <label className="block text-xs mb-2">
                Please Decribe Your Project
              </label>
              <textarea
                className="
                  form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                rows="5"
                name="project_description"
                placeholder="For example, if you need a quote for a vehicle wrap, please let us know the Make, Year and Model of the vehicle, as well as an Idea of what you're looking for"
                //value={toSend.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className=" w-full px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-10"
            >
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
