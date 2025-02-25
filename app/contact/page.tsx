const Contact = () => {
  return (
    <div className="bg-[#fff] ">
      {/* Header Section */}
      <div
        className="relative h-38 md:h-44 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hh.png')" }}
      >
        <h1
          className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg"
          style={{
            fontFamily: "EB Garamond",
            fontSize: "80px",
            lineHeight: "41px",
          }}
        >
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 gap-10">
        {/* Left Section - Get In Touch */}
        <div className="space-y-6">
          <h2
            className="text-[#745802]"
            style={{
              fontFamily: "EB Garamond",
              fontSize: "55px",
              fontWeight: "700",
              lineHeight: "68px",
            }}
          >
            Get In Touch
          </h2>
          <p className="text-[#373737] w-[491px] leading-relaxed">
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "27px",
                letterSpacing: "1%",
              }}
            >
              Have questions or need astrological guidance?
            </span>
            <br />
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: "100",
                fontSize: "13px",
                lineHeight: "27px",
                letterSpacing: "1%",
              }}
            >
              Our experts are here to help! Reach out for consultations,
              inquiries, or support, and let us assist you on your journey.
            </span>
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <img
                  src="/Ellipse 879.png"
                  alt="Ellipse"
                  className="w-full h-full absolute z-0"
                />
                <img
                  src="/Vector (30).png"
                  alt="Phone"
                  className="w-7 h-7 z-10"
                />
              </div>
              <p className="text-gray-700 font-medium">
                +91 98765 43201, +91 89765 43201
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <img
                  src="/Ellipse 879.png"
                  alt="Ellipse"
                  className="w-full h-full absolute z-0"
                />
                <img
                  src="/Vector (31).png"
                  alt="Email"
                  className="w-7 h-7 z-10"
                />
              </div>
              <p className="text-gray-700 font-medium">SobhagyaApp@gmail.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <p className="mt-6 text-gray-700">
            Connect with us today and discover the wisdom of astrology!
          </p>
          <div className="flex space-x-4">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src="/Ellipse 879.png"
                alt="Ellipse"
                className="w-full h-full absolute z-0"
              />
              <img
                src="/Instagram Circle.png"
                alt="Instagram"
                className="w-6 h-6 z-10"
              />
            </div>

            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src="/Ellipse 879.png"
                alt="Ellipse"
                className="w-full h-full absolute z-0"
              />
              <img src="/Youtube.png" alt="Youtube" className="w-6 h-6 z-10" />
            </div>

            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src="/Ellipse 879.png"
                alt="Ellipse"
                className="w-full h-full absolute z-0"
              />
              <img
                src="/Facebook.png"
                alt="Facebook"
                className="w-6 h-6 z-10"
              />
            </div>

            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src="/Ellipse 879.png"
                alt="Ellipse"
                className="w-full h-full absolute z-0"
              />
              <img
                src="/Google Play.png"
                alt="Google Play"
                className="w-6 h-6 z-10"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#fcf4e9] p-20 shadow-lg">
          <h2
            className="text-3xl font-bold text-[#745802] mb-4"
            style={{
              fontFamily: "EB Garamond",
            }}
          >
            Send a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700"></label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815]"
              />
            </div>
            <div>
              <label className="block text-gray-700"></label>
              <input
                type="text"
                placeholder="Phone No./ Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815]"
              />
            </div>
            <div>
              <label className="block text-gray-700"></label>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815] h-32"
              />
            </div>
            <div className="flex justify-center">
              <button className="w-[214px] bg-[#fff] text-[#F7971D] py-3 rounded-md font-semibold hover:bg-[#e09e3c] hover:text-white transition">
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
