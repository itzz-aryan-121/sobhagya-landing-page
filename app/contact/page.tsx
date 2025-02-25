'use client';
import { useEffect, useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="bg-[#fff]">
      {/* Header Section */}
      <div
        className="relative h-32 md:h-44 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hh.png')" }}
      >
        <h1
          className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
          style={{
            fontFamily: "EB Garamond",
            fontSize: "clamp(40px, 8vw, 80px)",
            lineHeight: "1.2",
          }}
        >
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Get In Touch */}
        <div className="space-y-6">
          <h2
            className="text-[#745802]"
            style={{
              fontFamily: "EB Garamond",
              fontSize: "clamp(35px, 5vw, 55px)",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            Get In Touch
          </h2>
          <p className="text-[#373737] leading-relaxed text-lg md:w-[80%]">
            <span className="font-medium">
              Have questions or need astrological guidance?
            </span>
            <br />
            <span className="text-sm">
              Our experts are here to help! Reach out for consultations,
              inquiries, or support, and let us assist you on your journey.
            </span>
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="/Ellipse 879.png"
                  alt="Ellipse"
                  className="w-full h-full absolute z-0"
                />
                <img
                  src="/Vector (30).png"
                  alt="Phone"
                  className="w-6 h-6 z-10"
                />
              </div>
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                +91 8077781807 &nbsp; +91 8383962622
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src="/Ellipse 879.png"
                  alt="Ellipse"
                  className="w-full h-full absolute z-0"
                />
                <img
                  src="/Vector (31).png"
                  alt="Email"
                  className="w-6 h-6 z-10"
                />
              </div>
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                support@sobhagya.in
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <p className="mt-6 text-gray-700">Connect with us today!</p>
          <div className="flex flex-wrap gap-4">
            {["Instagram Circle.png", "YouTube.png", "Facebook.png", "Google Play.png"].map((icon, index) => (
              <div
                key={index}
                className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              >
                <img src="/Ellipse 879.png" alt="Ellipse" className="absolute w-full h-full z-0" />
                <img src={`/${icon}`} alt={icon.split(".")[0]} className="w-5 sm:w-6 h-5 sm:h-6 z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#fcf4e9] p-6 sm:p-10 md:p-16 shadow-lg rounded-lg">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#745802] mb-4"
            style={{ fontFamily: "EB Garamond" }}
          >
            Send a Message
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815] text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone No./ Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815] text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815] h-28 sm:h-32 text-sm sm:text-base"
              />
            </div>
            <div className="flex justify-center">
              <button className="w-full sm:w-[214px] bg-[#fff] text-[#F7971D] py-3 rounded-md font-semibold hover:bg-[#e09e3c] hover:text-white transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
