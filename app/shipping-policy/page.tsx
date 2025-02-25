export default function ShippingPolicy() {
    return (
      <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
        <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-cover opacity-20"
            style={{
              backgroundImage: "url('/monk logo.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
  
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-4 text-center text-[#745802] underline">
              Shipping Policy
            </h1>
            <p className="mb-4">
              At Sobhagya, your trust in us is paramount, and we're committed to
              delivering your treasures with the utmost care and reliability.
              Here's everything you need to know about our shipping process to
              ensure a smooth and secure experience:
            </p>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Safe & Secure Delivery Packaging
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Packaging:</strong> Every order is carefully packaged to
                ensure safe delivery.
              </li>
              <li>
                <strong>Insurance:</strong> Orders are fully insured during
                transit.
              </li>
              <li>
                <strong>Trusted Couriers:</strong> We use Shiprocket, Bluedart,
                and Aftership.
              </li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Shipping Timeline
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Dispatch Time:</strong> Orders are processed within 4
                business days.
              </li>
              <li>
                <strong>Delivery Duration:</strong> 7-10 days for domestic orders,
                longer for international orders.
              </li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Order Tracking
            </h2>
            <p className="mb-4">
              Once your order is shipped, you'll receive tracking details via
              email.
            </p>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Delivery Timelines
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Metro Cities in India: 2-3 days from dispatch.</li>
              <li>Other regions: 3-7 days.</li>
              <li>International: 30-35 days.</li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Shipping Costs
            </h2>
            <p className="mb-4">
              Shipping charges depend on destination and weight. Free shipping may
              be available for certain orders.
            </p>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Delivery Location
            </h2>
            <p className="mb-4">
              Ensure accurate address details for smooth delivery. Address changes
              should be communicated promptly.
            </p>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              What to Expect at Delivery
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>ID verification may be required for high-value orders.</li>
              <li>
                Courier partners attempt delivery three times before returning the
                package.
              </li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Handling Delays
            </h2>
            <p className="mb-4">
              Delays due to unforeseen circumstances (e.g., natural disasters)
              may occur. Updates will be provided.
            </p>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Non-Delivery & Returns
            </h2>
            <p className="mb-4">
              For delivery issues, contact support within 30 days of purchase.
              Damaged or missing items should be reported immediately.
            </p>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Cancellation Policy
            </h2>
            <p className="mb-4">
              Once an order is placed, cancellations are not permitted.
            </p>
  
            <h2 className="text-xl font-semibold mt-6 text-orange-700">
              Our Commitment to You
            </h2>
            <p className="mb-4">
              We strive to make your shopping experience seamless. For any
              queries, contact our support team.
            </p>
          </div>
        </div>
      </div>
    );
  }
  