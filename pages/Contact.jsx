import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Script from "next/script";
const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
    ph_num: "",
  });
  const route = useRouter();
  const form = useRef();

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_6lyxxel",
        "template_bnenccd",
        currentForm,
        "iGfY2czai-0quZduT"
      )
      .then(
        (result) => {
          alert(
            "Your message has been received! We will get back to you as soon as we can!"
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
    <div className="flex justify-center items-center pt-24">
      <Head>
        <title>DC Visual - Contact</title>
        <meta
          name="description"
          content="Contact DC Visual about your next Wrap Project"
          key="desc"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <section className=" w-full sm:w-3/4  text-gray-800  sm:mt-10">
        <div className="text-4xl font-bold mb-5 flex items-center align-middle justify-center text-white text-center">
          CONTACT US
        </div>
        <div className="flex w-full h-500 ">
          <div className="flex w-full justify-center ">
            <div className=" block w-3/4  items-center justify-center align-middle mb-10 py-2 px-4 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160369.881528814!2d-97.04722011469201!3d33.035023767785944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2c75c10c5065%3A0xf1a21a5dca2b198d!2sLewisville%2C%20TX!5e0!3m2!1sen!2sus!4v1679032004116!5m2!1sen!2sus"
                className="h-48 w-full rounded-xl mt-2 mr-2"
              ></iframe>
              <div className="flex justify-center items-center text-center text-white mt-2 text-xs">
                DC Visual - Lewisville, Texas
              </div>

              <div className="flex justify-center mt-3">
                <form ref={form} onSubmit={sendEmail} className="w-full ">
                  <div className="flex justify-center mt-4 mb-4 text-sm sm:text-lg font-bold text-white">
                    Send us a message!
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Name"
                      name="from_name"
                      //value={toSend.from_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="reply_to"
                      //value={toSend.reply_to}
                      name="reply_to"
                      onChange={handleChange}
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      //value={toSend.reply_to}
                      name="ph_num"
                      onChange={handleChange}
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="
                  form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      rows="3"
                      name="message"
                      placeholder="Message"
                      //value={toSend.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className=" w-full px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-10"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
