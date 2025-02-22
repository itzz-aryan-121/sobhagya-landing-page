import { notFound } from 'next/navigation';
import { RashiSign } from '@/types';
import Image from 'next/image';
import {
  getDateRange,
  getElement,
  getQuality,
  getOverview,
  getPositiveTraits,
  getChallenges,
  getLoveLife,
  getCompatibleSigns,
  getCareer,
  getRecommendedCareers,
  getHealth,
  getHealthStrengths,
  getHealthConcerns,
  getRulingInfo
} from '@/types/rashiContent';

const rashiSigns: RashiSign[] = [
    { name: 'Aries', hindiName: 'मेष', image: '/Vector (6).png' },
    { name: 'Taurus', hindiName: 'वृषभ', image: '/Vector (7).png' },
    { name: 'Gemini', hindiName: 'मिथुन', image: '/Vector (8).png' },
    { name: 'Cancer', hindiName: 'कर्क', image: '/Vector (9).png' },
    { name: 'Leo', hindiName: 'सिंह', image: '/Vector (10).png' },
    { name: 'Virgo', hindiName: 'कन्या', image: '/Vector (11).png' },
    { name: 'Libra', hindiName: 'तुला', image: '/Vector (12).png' },
    { name: 'Scorpio', hindiName: 'वृश्चिक', image: '/Vector (13).png' },
    { name: 'Sagittarius', hindiName: 'धनु', image: '/Vector (14).png' },
    { name: 'Capricorn', hindiName: 'मकर', image: '/Vector (15).png' },
    { name: 'Aquarius', hindiName: 'कुंभ', image: '/Vector (16).png' },
    { name: 'Pisces', hindiName: 'मीन', image: '/Vector (17).png' },
];

export default function RashiPage({ params }: { params: { name: string } }) {
const rashi = rashiSigns.find(sign => sign.name.toLowerCase() === params.name.toLowerCase());

if (!rashi) {
    notFound();
  }

  const rulingInfo = getRulingInfo(rashi.name);

  return (
    <div className="bg-orange-50/30 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
          {/* Header Section */}
          <div className="flex items-center gap-6 mb-8 border-b border-orange-100 pb-6">
            <Image
              src={rashi.image}
              alt={rashi.name}
              width={100}
              height={100}
              className="text-orange-400"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#745802] mb-2">
                {rashi.name} ({rashi.hindiName})
              </h1>
              <p className="text-gray-600 text-lg">
                {getDateRange(rashi.name)}
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="text-[#745802] font-semibold">Element</h3>
              <p className="text-gray-700">{getElement(rashi.name)}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="text-[#745802] font-semibold">Quality</h3>
              <p className="text-gray-700">{getQuality(rashi.name)}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="text-[#745802] font-semibold">Ruling Planet</h3>
              <p className="text-gray-700">{rulingInfo.planet}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="text-[#745802] font-semibold">Lucky Stone</h3>
              <p className="text-gray-700">{rulingInfo.stone}</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#745802] mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              {getOverview(rashi.name)}
            </p>
          </div>

          {/* Characteristics Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#745802] mb-4">Positive Traits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {getPositiveTraits(rashi.name).map((trait, index) => (
                  <li key={index}>{trait}</li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#745802] mb-4">Challenges</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {getChallenges(rashi.name).map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Love Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#745802] mb-4">Love & Relationships</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{getLoveLife(rashi.name)}</p>
            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="font-semibold text-[#745802] mb-2">Compatible Signs</h4>
              <div className="flex flex-wrap gap-2">
                {getCompatibleSigns(rashi.name).map((sign, index) => (
                  <span key={index} className="bg-white px-3 py-1 rounded-full text-gray-700">
                    {sign}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Career Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#745802] mb-4">Career & Finance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{getCareer(rashi.name)}</p>
            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="font-semibold text-[#745802] mb-2">Recommended Careers</h4>
              <div className="grid grid-cols-2 gap-4">
                {getRecommendedCareers(rashi.name).map((career, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-gray-700">
                    {career}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Health Section */}
          <section>
            <h2 className="text-2xl font-semibold text-[#745802] mb-4">Health & Wellness</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{getHealth(rashi.name)}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="font-semibold text-[#745802] mb-2">Health Strengths</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {getHealthStrengths(rashi.name).map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="font-semibold text-[#745802] mb-2">Areas of Attention</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {getHealthConcerns(rashi.name).map((concern, index) => (
                    <li key={index}>{concern}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 