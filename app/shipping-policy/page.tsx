export default function ShippingPolicy() {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-6 bg-gray-100 min-h-screen">
      <div className="relative bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-4xl w-full overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10"
          style={{
            backgroundImage: "url('/monk logo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-[#745802] underline">
            Shipping Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 text-center">
            <strong>Last updated: September 20, 2023</strong>
          </p>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-700">
            At <span className="font-semibold">Sobhagya</span>, your trust is paramount. We are committed to delivering your treasures with care and reliability. Below is an overview of our shipping process:
          </p>

          {/* Dynamic Sections */}
          {sections.map(({ title, content }, index) => (
            <section key={index} className="mt-6">
              <h2 className="text-lg sm:text-xl font-semibold text-orange-700">{title}</h2>
              {Array.isArray(content) ? (
                <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-600">
                  {content.map((item, idx) => (
                    <li key={idx} className="mt-1">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm sm:text-base text-gray-600">{content}</p>
              )}
            </section>
          ))}

          {/* Contact Information */}
          <section className="mt-6">
            <h2 className="text-lg sm:text-xl font-semibold text-orange-700">Contact Us</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              If you have any questions about our Shipping Policy, please contact us:
            </p>
            <ul className="list-none mt-2 text-sm sm:text-base text-gray-600">
              <li><strong>Email:</strong> <a href="mailto:support@sobhagya.in" className="text-blue-600 hover:underline">support@sobhagya.in</a></li>
              <li><strong>Address:</strong> F-10/9, Mandir Marg, Block-F, Opp. Lovely Public School, Krishna Nagar, Delhi East, Delhi DL 110051, IN</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Safe & Secure Delivery",
    content: [
      "Every order is carefully packaged to ensure that your products (including gemstones, rudraksha, crystals, etc.) arrive in pristine condition.",
      "Your order is fully insured during transit.",
      "We partner with reliable courier services such as Shiprocket, Bluedart, and Aftership.",
    ],
  },
  {
    title: "Shipping Timeline",
    content: [
      "Orders are processed and dispatched within 4 business days of confirmation. Customized items may take longer.",
      "Standard delivery is typically 7-10 days from dispatch for domestic orders. International orders may take 12-15 days, due to customs procedures.",
      "Timelines are subject to change due to factors beyond our control.",
    ],
  },
  {
    title: "Order Tracking",
    content: "Once your order is on its way, you will receive a confirmation email with tracking details. You can follow your package’s journey via the provided link.",
  },
  {
    title: "Delivery Location",
    content: [
      "Please provide complete and accurate delivery information. We deliver only to residential or business addresses.",
      "If you need to update your delivery address, please contact our customer support immediately.",
    ],
  },
  {
    title: "What to Expect at Delivery",
    content: [
      "For high-value orders, a signature and ID verification may be required.",
      "Our courier partner will attempt delivery up to three times. If all attempts fail, the package will be returned to us. Please contact our support at support@sobhagya.com for assistance.",
    ],
  },
  {
    title: "Handling Delays",
    content: "In the event of delays caused by unforeseen circumstances (e.g., natural disasters, public holidays, strikes, or other Force Majeure events), we will notify you of a revised delivery schedule. The Company is not liable for such delays.",
  },
  {
    title: "Non-Delivery & Returns",
    content: [
      "If your package is not delivered within the expected timeframe, please contact our customer support at support@sobhagya.com within 30 days of purchase.",
      "If you receive damaged or missing items, kindly refuse the delivery and contact us immediately with supporting details.",
    ],
  },
  {
    title: "Cancellation Policy",
    content: "Once an order is placed, cancellations are not permitted.",
  },
  {
    title: "Our Commitment to You",
    content: "We aim to make your shopping experience seamless and delightful. If you have any questions or concerns, please do not hesitate to reach out to our customer support team.",
  },
];
