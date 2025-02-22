'use client';
import { RashiSign } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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



const RashiSection: React.FC = () => {
  const [loading, setLoading] = useState<string | null>(null);

  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-6 text-[#745802] text-5xl font-bold" style={{
          fontFamily:'EB Garamond'
        }}>
          Astrology Insights for Your Rashi
        </h2>
        <p className="text-center mb-12 text-[#745802] text-base font-light">
          Get accurate predictions, guidance, and remedies for love, career, health, and more
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {rashiSigns.map((rashi) => (
            <Link 
              href={`/rashi/${rashi.name.toLowerCase()}`} scroll={true}
              key={rashi.name}
              onClick={() => setLoading(rashi.name)}
            >
              <div className={`bg-white p-6 rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer relative ${loading === rashi.name ? 'opacity-50' : ''}`}>
                {loading === rashi.name && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
                  </div>
                )}
                <div className="w-16 h-16 mb-2">
                  <Image
                    src={rashi.image}
                    alt={rashi.name}
                    width={64}
                    height={64}
                    className="text-orange-400"
                  />
                </div>
                <div className="text-gray-700 text-lg mb-1">{rashi.hindiName}</div>
                <div className="text-gray-600 text-sm">{rashi.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RashiSection;