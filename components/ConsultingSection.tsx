import Image from 'next/image';
import { ConsultingTopic } from '@/types';

const consultingTopics: ConsultingTopic[] = [
  {
    title: 'Love & Relationship Issues',
    description: 'Struggling with love, marriage, or compatibility problems? Astrology helps resolve conflicts and find harmony in relationships.',
    image: '/icons/Group 13367.png',
  },
  {
    title: 'Career & Financial Struggles',
    description: 'Facing job instability, business losses, or financial hurdles? Get guidance on the right career path and remedies for success.',
    image: '/icons/Group 13368.png',
  },
  {
    title: 'Health & Well-being Concerns',
    description: 'Experiencing ongoing health issues or emotional stress? Astrology identifies planetary influences affecting your well-being.',
    image: '/icons/Group 13369.png',
  },
];

const ConsultingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4" style={{
          fontFamily: 'EB Garamond',
          color: '#745802',
          fontSize: '50px',
          fontWeight: '700',
          lineHeight: '49px',
        }}>
          Problems and Consulting
        </h2>
        <p className="text-center mb-14" style={{
          color: '#745802',
          fontSize: '15px',
          lineHeight: '27px',
          fontWeight: '300',
          fontFamily: 'Poppins',
          maxWidth: '660px',
          margin: '0 auto',
        }}>
          Solve Your Life's Biggest Problems with Astrologers
        </p>

        <div className="grid md:grid-cols-2 gap-20 items-start max-w-8xl mx-auto">
          <div className="relative">
            <Image
              src="/palm-reading.png"
              alt="Palm Reading"
              width={500}
              height={500}
              className="w-full"
              priority
            />
          </div>

          <div className="space-y-14">
            {consultingTopics.map((topic, index) => (
              <div key={topic.title} className="flex items-start gap-10">
                <div className="relative">
                  {index !== consultingTopics.length - 1 && (
                    <div className="absolute left-1/2 top-[calc(100%+1rem)] h-16 w-[2px] bg-orange-200 -translate-x-1/2"></div>
                  )}
                  <div className="flex items-center justify-center">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 ">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{topic.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-md">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
  