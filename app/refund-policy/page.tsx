import React from "react";

const RefundPolicy = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 text-gray-800 mt-5 mb-5 relative">
        {/* Blurred Monk Logo in Center */}
        <div
          className="absolute inset-0 flex justify-center items-center opacity-10 sm:opacity-20"
          style={{
            backgroundImage: "url('/monk logo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#745802] underline">
          Return & Refund Policy
        </h1>
        
        <p className="text-sm sm:text-base mb-6">
          Last updated: March 29, 2025
        </p>

        <section className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base">
            Thank you for using <span className="font-semibold">Sobhagya</span>, our audio call service.
            If, for any reason, you are not entirely satisfied with our service, we invite you to review our policy on refunds and returns. 
            This Return and Refund Policy outlines the terms and conditions applicable to any purchases made through our service.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-orange-700">
            Interpretation and Definitions
          </h2>
          <div className="mt-3 sm:mt-4 space-y-3">
            <div>
              <h3 className="text-base sm:text-lg font-medium text-orange-700">
                Interpretation
              </h3>
              <p className="text-sm sm:text-base">
                The words with initial capitalization have specific meanings defined under the following conditions. 
                These definitions apply whether they appear in singular or plural form.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium text-orange-700">
                Definitions
              </h3>
              <p className="text-sm sm:text-base">
                For the purpose of this Return and Refund Policy:
              </p>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base mt-2">
                <li><strong>Website and App:</strong> These terms apply to your use of the Sobhagya website (https://sobhagya.in) and mobile application.</li>
                <li><strong>Company:</strong> ELYSION SOFTWARES PRIVATE LIMITED (referred to as "we", "us", "our", or "Sobhagya").</li>
                <li><strong>Your IAP Account:</strong> Your account with your Software Store (Apple App Store or Google Play Store) used for in-app purchases.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-orange-700">
            Your Order Cancellation Rights
          </h2>
          <p className="text-sm sm:text-base">
            Since Sobhagya does not sell physical goods, there is no option for cancellation or return of purchases. 
            Users make payments to purchase digital goods, which can be used for connecting with other Sobhagya users. 
            Digital goods, including messages, coins, diamonds, etc., may be modified, removed, or expire 
            (typically within 12 months) from the date of acquisition.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-orange-700">
            In-App Purchases
          </h2>
          <p className="text-sm sm:text-base">
            When you make an in-app purchase, you will be prompted to enter details for your IAP Account, 
            and your account will be charged in accordance with the terms disclosed at the time of purchase 
            as well as the general terms for in-app purchases that apply to your account. 
            Some Software Stores may charge a sales tax, depending on your location.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-orange-700">
            Subscriptions
          </h2>
          <p className="text-sm sm:text-base">
            If you subscribe to an auto-recurring periodic subscription, your IAP Account will be billed until you cancel. 
            Even if you delete your Sobhagya account or uninstall the app, your subscription will continue until canceled through your IAP Account.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-orange-700">
            Refund Process
          </h2>
          <p className="text-sm sm:text-base">
            In general, payments once made are not refunded. However, we may make an exception if a refund is requested within 
            <span className="font-semibold"> 14 days </span> 
            of the transaction date, if the payment was made in a currency other than INR, the goods remain unused, 
            and if refunds are mandated by applicable law.
          </p>
          <p className="text-sm sm:text-base mt-2">
            In such cases, refunds will be processed within 
            <span className="font-semibold"> 7 business days </span> 
            and credited to your original payment method within 
            <span className="font-semibold"> 15 working days</span>, 
            subject to delays.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-orange-700">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base">
            If you have any questions about our Refund Policy, please contact us:
          </p>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base mt-2">
            <li><strong>By email:</strong> <a href="mailto:support@sobhagya.in" className="text-blue-600">support@sobhagya.in</a></li>
            <li><strong>By Address:</strong> F-10/9, Mandir Marg, Block-F, Opp. Lovely Public School, Krishna Nagar, Delhi East, Delhi DL 110051, IN.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;