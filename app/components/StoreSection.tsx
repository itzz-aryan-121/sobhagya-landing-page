import Image from "next/image";
import Link from "next/link";

const StoreSection: React.FC = () => {
  const storeItems = [
    {
      id: 1,
      title: "Crystal Set",
      image: "/ganesha.webp",
      price: "$49.99",
      link: "https://store.sobhagya.in/collections/spiritual-jewellery-collection/products/lord-ganesha-idol-brass-34-2-cm-9-8-kg",
    },
    {
      id: 2,
      title: "Gemstone Bracelet",
      image: "/p3_1000x.webp",
      price: "$29.99",
      link: "https://store.sobhagya.in/collections/spiritual-jewellery-collection/products/premium-trishul-om-and-damru-pendant-with-chain",
    },
    {
      id: 3,
      title: "Zodiac Journal",
      image: "/hanuman.webp",
      price: "$19.99",
      link: "https://store.sobhagya.in/collections/spiritual-jewellery-collection/products/panchmukhi-hanuman-ji-statue-brass",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-center mb-12 mx-auto"
          style={{
            fontFamily: "eb garamond",
            fontWeight: "700",
            fontSize: "50px",
            lineHeight: "10px",
            letterSpacing: "1%",
            color: "#745802",
            width: "100%",
            maxWidth: "682px",
          }}
        >
          Our Store
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {storeItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              {/* Image Wrapper with Fixed Height & Hover Effect */}
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Restored Orange Hover Effect */}
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Visit Store Button */}
                <Link href={item.link} target="_blank">
                  <button className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  જ⁀➴ Visit Store
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
