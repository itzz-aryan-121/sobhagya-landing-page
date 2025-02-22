import Image from "next/image";
import lock from "@/public/Group 13357.png";

const StatsBar: React.FC = () => {
  return (
    <section className="relative text-white py-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[171px]">
        <Image
          src="/stats-bar.png"
          alt="Stats"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8">
        <div className="flex justify-evenly items-center space-x-16 text-center">
          {/* Secure & Privacy */}
          <div className="flex flex-col items-center">
            <Image src={lock} alt="lock" width={51} height={57} />
            <span className="text-lg font-normal" style={{ fontFamily: "Poppins" }}>
              100% secure & privacy
            </span>
          </div>

          {/* Play Store Rating */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <Image src="/Star 13.png" alt="small star" width={35} height={35} />
              <Image src="/Star 11.png" alt="big star" width={57} height={57} />
              <Image src="/Star 12.png" alt="small star" width={35} height={35} />
            </div>
            <span className="text-lg font-normal" style={{ fontFamily: "Poppins" }}>
              4.5 stars on Play Store
            </span>
          </div>

          {/* Total Calls */}
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">10,000+</span>
            <span className="text-lg font-normal items-center my-auto">Total Call</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
