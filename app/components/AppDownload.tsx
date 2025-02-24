import React from "react";

const DownloadAppSection = () => {
  return (
    <section
      className="py-12 text-center text-white flex flex-col md:flex-row items-center justify-center px-6"
      style={{
        backgroundImage: "url('/orange.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="/meditation (1).png"
          alt="Meditation"
          className="w-60 sm:w-72 md:w-80 lg:w-96 rounded-lg"
        />
      </div>

      {/* Text & Download Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{
            fontFamily: "EB Garamond",
            letterSpacing: "0.5px",
          }}
        >
          Download Our Mobile App
        </h2>

        <p
          className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed px-4 md:px-0"
          style={{
            fontFamily: "Poppins",
            fontWeight: "100",
            fontSize: '15px',

          }}
        >
          Get daily horoscope updates, personalized astrological insights, and
          expert guidance anytime, anywhere. Explore zodiac predictions,
          remedies, and live consultations—all at your fingertips! Download now
          and unlock the wisdom of the stars.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
          <a href="#">
            <img
              src="/appstore.png"
              alt="App Store"
              className="w-40 sm:w-44 md:w-48 cursor-pointer"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.sobhagya.sobhagya&hl=en">
            <img
              src="/playstore.png"
              alt="Google Play"
              className="w-40 sm:w-44 md:w-48 cursor-pointer"
            />
          </a>
        </div>

        {/* Tagline */}
        <p className="mt-4 italic text-center md:text-left text-sm sm:text-base md:text-lg" style={{ fontFamily: "Poppins", fontWeight: "300" }}>
          Stay Connected with Astrology!
        </p>
      </div>
    </section>
  );
};

export default DownloadAppSection;
