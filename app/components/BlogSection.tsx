import Image from 'next/image';

const BlogSection: React.FC = () => {
  const blogs = [
    {
      image: '/b1.png',
      title: 'The Power of Astrology in Everyday Life',
      excerpt: 'Many believe that astrology is just about daily horoscopes, but it\'s much more than that. It is the study of how planetary movements ...',
      author: 'Sadvik Tiwari',
      date: '31, January,2025'
    },
    {
      image: '/b4.jpg',
      title: 'Astrological Remedies: Balancing Cosmic Energies',
      excerpt: 'If you\'re experiencing struggles in life, astrology provides solutions. Remedies such as wearing gemstones, chanting mantras, performing ...',
      author: 'Sadhin M.',
      date: '10, February,2025'
    },
    {
      image: '/b3.png',
      title: 'Vedic vs. Western Astrology: Which One to Follow?',
      excerpt: 'Astrology comes in different forms, with Vedic Astrology (Indian astrology) focusing on moon signs and karmic influences, while Western Astrology ...',
      author: 'OmShri S.',
      date: '01, February,2025'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="mb-2"
            style={{
              fontFamily: 'EB Garamond',
              color: '#745802',
              fontSize: '50px',
              fontWeight: '700',
              lineHeight: '60px',
            }}
          >
            Our Blogs
          </h2>
          <p 
            style={{
              color: '#745802',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontWeight: '300',
              lineHeight: '23px',
            }}
          >
            Your daily source for astrology insights & guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-[200px]">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '27px',
                    color: '#333333',
                  }}
                >
                  {blog.title}
                </h3>
                <p 
                  className="mb-4"
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '21px',
                    color: '#666666',
                  }}
                >
                  {blog.excerpt}
                  <span className="text-[#D08F17] cursor-pointer ml-1">see more</span>
                </p>
                <div className="flex justify-between items-center" style={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  color: '#666666',
                }}>
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
