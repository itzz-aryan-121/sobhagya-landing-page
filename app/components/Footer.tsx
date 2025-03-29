import Image from "next/image";
import Link from "next/link";
import { Eagle_Lake, Poppins } from "next/font/google";

const eagleLake = Eagle_Lake({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const Footer: React.FC = () => {
  return (
    <footer
      className={`bg-[#373737] text-white py-12 relative overflow-hidden ${poppins.className}`}
    >
      {/* Top Left Zodiac Background Image */}
      <div className="absolute top-[-50px] left-[-150px] w-[400px] h-[300px] opacity-20">
        <Image
          src="/zodiac-right.png"
          alt="Zodiac Signs"
          layout="fill"
          objectFit="contain"
          className="rotate-[-15deg]"
        />
      </div>

      {/* Bottom Right Zodiac Background Image */}
      <div className="absolute bottom-[-100px] right-[20px] w-[400px] h-[300px] opacity-20">
        <Image
          src="/zodiac-right.png"
          alt="Zodiac Signs"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Title text */}
        <h2 className="text-orange-400 text-center text-2xl mb-12 underline decoration-orange-400 underline-offset-8">
          Your Trusted Astrology App for Accurate Predictions & Expert Guidance!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center  md:pr-10">
            <div className="relative w-[300px] h-[300px] -mb-8">
              <Image
                src="/monk logo.png"
                alt="Sobhagya"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p
              className={`${eagleLake.className} text-orange-400 text-3xl mb-6`}
            >
              Sobhagya
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/Group 13405.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/Group 13406.png"
                  alt="Email"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/Group 13407.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/Group 13408.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links - Two columns */}
          <div className="">
            <div className="space-y-2">
              <Link
                href="/"
                className="flex items-center text-white hover:text-orange-400"
              >
                <span className="text-orange-400 mr-2 text-lg">›</span> Home
              </Link>
              <Link
                href="/about"
                className="flex items-center text-white hover:text-orange-400"
              >
                <span className="text-orange-400 mr-2 text-lg">›</span> About us
              </Link>
            </div>
            <div className="space-y-2 mt-4 flex flex-col ">
              <Link
                href="/privacy-policy"
                className="flex items-center text-white hover:text-orange-400"
              >
                <span className="text-orange-400 mr-2 text-lg">›</span> Privacy
                Policy
              </Link>
              <Link
                href="/terms"
                className="flex items-center text-white hover:text-orange-400"
              >
                <span className="text-orange-400 mr-2 text-lg">›</span> Terms of
                Services
              </Link>
              <Link
                href="/refund-policy"
                className="flex items-center text-white hover:text-orange-400 whitespace-nowrap"
              >
                <span className="text-orange-400 mr-2 text-lg whitespace-normal">›</span> Return
                and Refund Policy
              </Link>
              <Link
                href="/shipping-policy"
                className="flex items-center text-white hover:text-orange-400"
              >
                <span className="text-orange-400 mr-2 text-lg">›</span> Shipping
                Policy
              </Link>
              <Link
                href="https://store.sobhagya.in"
                className="flex items-center text-white hover:text-orange-400"
                target="_blank"
              >
                <span className="text-orange-400 mr-2 text-lg">›</span> Sobhagya
                Store
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 ">
            <div className="flex items-center gap-x-2 ">
              <img src="/Vector (1).png" alt="Website" className="w-5 h-5  " />
              <a
                href="https://www.sobhagya.in"
                className="text-white hover:text-orange-400  "
              >
                www.sohbhagya.com
              </a>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/Vector (2).png" alt="Email" className="w-5 h-5" />
              <a
                href="mailto:support@sobhagya.in"
                className="text-white hover:text-orange-400"
              >
                support@sobhagya.in
              </a>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/Vector (3).png" alt="Phone" className="w-5 h-5" />
              <span>
                <a
                  href="tel:+918077781807"
                  className="text-white hover:text-orange-400"
                >
                  +91 8077781807
                </a>
                ,{" "}
                <a
                  href="tel:+918383962622"
                  className="text-white hover:text-orange-400"
                >
                  +91 8383962622
                </a>
              </span>
            </div>
            <div className="flex items-start gap-x-2">
              <img
                src="/Vector (4).png"
                alt="Location"
                className="w-5 h-5 mt-1"
              />
              <p className="text-sm">
              F-Block 10/9 Krishna Nagar Temple, Delhi, India, 110051
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <img src="/Vector (5).png" alt="Company" className="w-5 h-5" />
              <p>ELYSION SOFTWARES PRIVATE LIMITED</p>
            </div>

            <div className="flex space-x-4 mt-6 cursor-pointer">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/appstore.png"
                  alt="App Store"
                  width={130}
                  height={40}
                />
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.sobhagya.sobhagya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/playstore.png"
                  alt="Google Play"
                  width={130}
                  height={40}
                />
              </Link>
            </div>

            <p className="text-center text-sm italic mt-4">
              Stay Connected with Astrology!
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>(© ELYSION SOFTWARES PRIVATE LIMITED. All Rights Reserved)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
