"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    image: "/b1.png",
    title: "The Power of Astrology in Everyday Life",
    content: "Many believe that astrology is just about daily horoscopes, but it's much more than that...",
    author: "Sadvik Tiwari",
    date: "31, January, 2025"
  },
  {
    id: 2,
    image: "/b4.jpg",
    title: "Astrological Remedies: Balancing Cosmic Energies",
    content: "If you're experiencing struggles in life, astrology provides solutions...",
    author: "Sadhin M.",
    date: "10, February, 2025"
  },
  {
    id: 3,
    image: "/b3.png",
    title: "Vedic vs. Western Astrology: Which One to Follow?",
    content: "Astrology comes in different forms...",
    author: "OmShri S.",
    date: "01, February, 2025"
  }
];

const BlogSection = () => {
  const router = useRouter();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-2 text-6xl font-bold text-[#745802]" style={{
            fontFamily:'EB Garamond'
          }}>Our Blogs</h2>
          <p className="text-[#745802] text-sm">Your daily source for astrology insights & guidance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => router.push(`/blog/${blog.id}`)}
            >
              <div className="relative h-[200px]">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="mb-4 text-sm text-gray-600">
                  {blog.content.substring(0, 100)}...
                  <span className="text-[#D08F17] cursor-pointer ml-1">see more</span>
                </p>
                <div className="flex justify-between text-sm text-gray-600">
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
