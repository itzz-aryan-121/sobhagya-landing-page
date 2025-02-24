"use client";
import { RashiSign } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const rashiSigns: RashiSign[] = [
  { name: "Aries", hindiName: "मेष", image: "/Vector (18).png" },
  { name: "Taurus", hindiName: "वृषभ", image: "/Vector (19).png" },
  { name: "Gemini", hindiName: "मिथुन", image: "/Vector (20).png" },
  { name: "Cancer", hindiName: "कर्क", image: "/Vector (21).png" },
  { name: "Leo", hindiName: "सिंह", image: "/Vector (22).png" },
  { name: "Virgo", hindiName: "कन्या", image: "/Vector (23).png" },
  { name: "Libra", hindiName: "तुला", image: "/Vector (24).png" },
  { name: "Scorpio", hindiName: "वृश्चिक", image: "/Vector (25).png" },
  { name: "Sagittarius", hindiName: "धनु", image: "/Vector (26).png" },
  { name: "Capricorn", hindiName: "मकर", image: "/Vector (27).png" },
  { name: "Aquarius", hindiName: "कुंभ", image: "/Vector (28).png" },
  { name: "Pisces", hindiName: "मीन", image: "/Vector (29).png" },
];

const RashiSection: React.FC = () => {
  const router = useRouter();

  const handleClick = (rashiName: string) => {
    router.push(`/rashi/${rashiName.toLowerCase()}`);
  };

  return (
    <>
      <motion.section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-6 text-[#745802] text-5xl font-bold" style={{ fontFamily: "EB Garamond" }}>
            Astrology Insights for Your Rashi
          </h2>
          <p className="text-center mb-12 text-[#745802] text-base font-light">
            Get accurate predictions, guidance, and remedies for love, career, health, and more
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 max-w-6xl mx-auto">
            {rashiSigns.map((rashi) => (
              <div
                key={rashi.name}
                onClick={() => handleClick(rashi.name)}
                className="bg-white p-6 rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 mb-2">
                  <Image src={rashi.image} alt={rashi.name} width={64} height={64} />
                </div>
                <div className="text-gray-700 text-lg mb-2 mt-3">{rashi.hindiName}</div>
                <div className="text-gray-600 text-sm">{rashi.name}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default RashiSection;
