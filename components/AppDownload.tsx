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
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/meditation (1).png"
          alt="Meditation"
          className="w-72 md:w-96 rounded-lg"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2
          className="text-3xl md:text-4xl font-bold text-white"
          style={{
            fontFamily: "eb garamond",
            fontWeight: "700",
            fontSize: "50px",
            lineHeight: "10px",
            letterSpacing: "1%",
            width: "596px",
            height: "48px",
            left: "672px",
            margin: "auto",
          }}
        >
          Download Our Mobile App
        </h2>
        <p className="w-[562px] h-[92px]"style={{
            margin: "auto",
            lineHeight: "23px",
            fontFamily: "Poppins",
            fontWeight:'500',
            fontSize: "15px",
            alignContent: "center",
        }}>
          Get daily horoscope updates, personalized astrological insights, and
          expert guidance anytime, anywhere. Explore zodiac predictions,
          remedies, and live consultations—all at your fingertips! Download now
          and unlock the wisdom of the stars.
        </p>
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex flex-row gap-4">
            <a href="#">
              <img
                src="/appstore.png"
                alt="App Store"
                className="w-[156px] h-[53px] cursor-pointer"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.sobhagya.sobhagya&hl=en">
              <img
                src="/playstore.png"
                alt="Google Play"
                className="w-[156px] h-[53px] cursor-pointer"
              />
            </a>
          </div>
          <p className="mt-4 italic text-center w-[562px] h-[23px] left-[689px]" style={{
                fontWeight: '300',
                fontFamily: 'Poppins',
                fontSize:'16px',
                lineHeight:'23px',
                letterSpacing:'0%',
                color:'#ffffff',
                margin: 'auto',
          }}>
            Stay Connected with Astrology!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
