"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import Loading from "../rashi/[name]/loading";

const AboutUs = () => {
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
    <section className="bg-white text-gray-800">
      {/* About Us Section with Background Image */}
      <div
        className="relative w-full h-[178px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image (6).png')" }}
      >
        <h2
          className="text-4xl font-bold text-white mx-auto items-center px-6 py-2 rounded-lg"
          style={{
            fontFamily: "EB Garamond",
            fontSize: "80px",
            fontWeight: "700",
            lineHeight: "41px",
          }}
        >
          About Us
        </h2>
      </div>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto text-center px-6 text-left mt-8">
        <h3
          className="text-2xl"
          style={{
            fontFamily: "EB Garamond",
            fontSize: "50px",
            fontWeight: "700",
            lineHeight: "39px",
            color: "#745802",
          }}
        >
          Introduction
        </h3>
        <p
          className="mt-1 "
          style={{
            fontFamily: "EB Garamond",
            fontSize: "15px",
            fontWeight: "300",
            lineHeight: "23px",
            color: "#745802",
          }}
        >
          Your Trusted Online Astrology Consulting App!
        </p>
        <p className="text-[#373737] mt-4">
          Sobhagya is a feature-rich astrology app that connects users with
          expert astrologers for personalized predictions and guidance. Whether
          you need insights about love, relationships, career, finances, health,
          or spiritual growth, this app provides accurate astrological solutions
          based on Vedic astrology, numerology, and palmistry. With live chat,
          voice, and video consultations, Shobhagya allows you to get real-time
          answers from professional astrologers anytime, anywhere. The app
          offers daily, weekly, and yearly horoscopes, so you can plan your life
          according to planetary movements and cosmic influences. Key Features
          of Sobhagya:
        </p>
      </div>

      {/* Content & Image Section (Astrology Icon on Right, Text on Left) */}
      <div className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row items-center px-6 gap-8">
        {/* Features List (Left) */}
        <div className="w-full md:w-2/3 text-left">
          <h3 className="text-xl font-bold mb-4">
            Key Features of Sobhagya:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong className="text-orange-600">
                Kundli (Birth Chart) Analysis
              </strong>{" "}
              – Understand your strengths, weaknesses, and life path.
            </li>
            <li>
              <strong className="text-orange-600">
                Love & Marriage Compatibility
              </strong>{" "}
              – Find your ideal match and strengthen relationships.
            </li>
            <li>
              <strong className="text-orange-600">
                Career & Business Guidance
              </strong>{" "}
              – Choose the right profession and time for success.
            </li>
            <li>
              <strong className="text-orange-600">Financial Astrology</strong> –
              Get predictions on investments, savings, and monetary gains.
            </li>
            <li>
              <strong className="text-orange-600">
                Health & Wellness Astrology
              </strong>{" "}
              – Discover planetary influences on your well-being.
            </li>
            <li>
              <strong className="text-orange-600">
                Numerology & Tarot Readings
              </strong>{" "}
              – Unveil hidden aspects of your destiny.
            </li>
            <li>
              <strong className="text-orange-600">Astrological Remedies</strong>{" "}
              – Gemstone suggestions, mantras, and pujas for positivity.
            </li>
            <li>
              <strong className="text-orange-600">
                Auspicious Muhurat Selection
              </strong>{" "}
              – Find the best dates for marriage, travel, and investments.
            </li>
            <li>
              <strong className="text-orange-600">Palmistry Readings</strong> –
              Decode your fate through palm lines and hand structure.
            </li>
            <li>
              <strong className="text-orange-600">
                Vastu Shastra Consultation
              </strong>{" "}
              – Improve home and workplace energy for prosperity.
            </li>
          </ul>
        </div>

        {/* Astrology Image (Right) */}
        <div className="md:w-1/3 w-full flex justify-center">
          <Image
            src="/monk logo.png"
            alt="Astrology Icon"
            width={800}
            height={800}
            className=""
            style={{
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-5xl mx-auto mt-12  my-auto">
        <h3 className="text-xl font-bold ">
          Why Choose Sobhagya?
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
          <li>
            <strong className="text-orange-500">
              Trusted & Verified Astrologers
            </strong>{" "}
            – Connect with experienced professionals.
          </li>
          <li>
            <strong className="text-orange-500">
              Instant & Accurate Guidance
            </strong>{" "}
            – Get real-time solutions to your concerns.
          </li>
          <li>
            <strong className="text-orange-500 mx-auto">User-Friendly Interface</strong>{" "}
            – Seamlessly explore astrology services.
          </li>
          <li>
            <strong className="text-orange-500">
              Multiple Astrology Systems
            </strong>{" "}
            – Vedic, KP astrology, numerology, and tarot in one place.
          </li>
          <li>
            <strong className="text-orange-500">24/7 Availability</strong> –
            Consult astrologers whenever you need guidance.
          </li>
        </ul>
      </div>

      {/* Closing Statement */}
      <div className="max-w-4xl mx-auto text-center px-6 mt-14">
        <p className="text-gray-700">
          From{" "}
          <span className="text-orange-500">
            love and relationships to career growth and financial stability
          </span>
          , Sobhagya provides expert astrology services tailored to your needs.
          Whether you are seeking solutions to life’s obstacles or wish to
          enhance your spiritual journey, this app serves as your personal
          astrology guide.
        </p>
        <p className="text-lg font-semibold text-[#785032] mt-4">
          Embrace the power of astrology with Sobhagya – Your gateway to a
          brighter future!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
