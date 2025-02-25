import React from "react";

const RefundPolicy = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 ">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 text-gray-800 mt-5 mb-5 relative">
        {/* Blurred Monk Logo in Center */}
        <div
          className="absolute inset-0 flex justify-center items-center opacity-20"
          style={{
            backgroundImage: "url('/monk logo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h1 className="text-4xl font-bold text-center mb-6 text-[#745802] underline">
          Return & Refund Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">
            Return & Replacement Policy
          </h2>
          <p>
            At <span className="font-semibold">Sobhagya</span>, we take pride in offering handcrafted natural gemstones and jewelry. Due to the nature of our products, please review our return/exchange policy before making a request.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">
            Return & Exchange Policy
          </h2>
          <p>Return, refund, or exchange requests will be evaluated based on the conditions below:</p>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-medium text-orange-700">Eligibility</h3>
              <p>Returns or exchanges are only accepted for orders damaged during transit or if an incorrect product was received. Videographic proof is required.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-orange-700">Timeframe</h3>
              <p>Requests must be made within <span className="font-semibold">7 days</span> of receiving the product. The item must be returned in its original condition.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-orange-700">Exclusions</h3>
              <p>Returns and exchanges are not accepted after 7 days. If authenticity is a concern, customers may verify at a Government-certified gemological institute.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Non-Returnable Categories</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom Jewelry</li>
            <li>Beads Bracelets</li>
            <li>Rudraksha</li>
            <li>Crystal Trees</li>
            <li>Rakhi Products</li>
            <li>Gift Cards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Refund Process</h2>
          <p>
            If approved, refunds will be credited within <span className="font-semibold">10-12 working days</span> (subject to bank processing times). COD refunds above INR 2,00,000 may require additional details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Exclusions for Returns or Exchanges</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Change of Mind</li>
            <li>Minor Flaws or Packaging Issues</li>
            <li>Slight Color or Size Variations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Cancellation Policy</h2>
          <p>
            Once an order is placed, cancellations are <span className="font-semibold">not permitted</span> under any circumstances.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Late or Missing Refunds</h2>
          <p>
            If you haven’t received your refund, check with your bank or credit card provider. For further assistance, contact us at <a href="mailto:support@sobhagya.com" className="text-blue-600">support@sobhagya.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Sale Items</h2>
          <p>
            All sale or discounted items are final and <span className="font-semibold">not eligible</span> for return, exchange, or refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Exchanges</h2>
          <p>
            Defective or damaged items can be exchanged for the same item within <span className="font-semibold">7 days</span>. Contact us for assistance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Gifts</h2>
          <p>If the item was received as a gift, a gift credit will be issued for the return value.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">Refund Policy for International Orders</h2>
          <p>Refunds for international orders will be processed within <span className="font-semibold">40-45 days</span> in case of a delivery issue.</p>
          <p className="mt-6">
            For further queries, contact us at <a href="mailto:support@sobhagya.in" className="text-blue-600">support@sobhagya.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
