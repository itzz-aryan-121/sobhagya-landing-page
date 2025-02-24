import { notFound } from 'next/navigation';
import { RashiSign } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer'; // Assuming Footer is a separate component

const rashiSigns: RashiSign[] = [
  { name: 'Aries', hindiName: 'मेष', image: '/rashi/aries.png' },
  { name: 'Taurus', hindiName: 'वृषभ', image: '/rashi/taurus.png' },
];

export default function RashiPage({ params }: { params: { name: string } }) {
  const rashi = rashiSigns.find(
    (r) => r.name.toLowerCase() === params.name.toLowerCase()
  );

  if (!rashi) {
    notFound();
  }

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Show footer after a delay (or when content is fully loaded)
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <Image
            src={rashi.image}
            alt={rashi.name}
            width={80}
            height={80}
            className="text-orange-400"
          />
          <div>
            <h1 className="text-4xl font-bold text-[#745802] mb-2">
              {rashi.name} ({rashi.hindiName})
            </h1>
            <p className="text-gray-600">
              Detailed insights and predictions for {rashi.name} rashi
            </p>
          </div>
        </div>

        {/* Add your rashi information content here */}
        <div className="prose max-w-none">
          <h2>Characteristics</h2>
          <p>Content about {rashi.name} characteristics...</p>

          <h2>Love & Relationships</h2>
          <p>Content about love life...</p>

          <h2>Career & Finance</h2>
          <p>Content about career and money...</p>

          <h2>Health & Wellness</h2>
          <p>Content about health...</p>
        </div>
      </div>

      {/* Show footer only when state is true */}
      {showFooter && <Footer />}
    </div>
  );
}
