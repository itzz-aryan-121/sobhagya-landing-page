import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="relative bg-white shadow-xl rounded-xl p-5 sm:p-8 md:p-10 max-w-4xl w-full border border-gray-200">
        
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

        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#745802] text-center mb-6 underline relative z-10">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed relative z-10 mb-6">
          www.sobhagya.in ("we", "Elysion Softwares Services Private Limited", "Sobhagya") is committed to protecting the privacy of users, including astrologers and buyers/customers, whether registered or not. Please read this privacy policy carefully to understand how we use your information.
        </p>

        {/* Interpretation and Definitions */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Interpretation and Definitions
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          
          <h3 className="mt-4 text-md sm:text-lg md:text-xl font-medium text-orange-600 pl-3">
            Definitions
          </h3>
          <ul className="mt-3 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base md:text-lg pl-3">
            {[
              "Account: A unique account created for You to access our Service or parts of our Service.",
              "Affiliate: An entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
              "Company: Refers to Elysion Softwares Private Limited, F-10/9, Mandir Marg, Block-F, Opp.- Lovely Public School, Krishna Nagar Delhi East Delhi DL 110051 IN.",
              "Cookies: Small files placed on Your device containing browsing details.",
              "Country: Refers to Delhi, India",
              "Device: Any device that can access the Service such as a computer, cellphone or digital tablet.",
              "Personal Data: Any information relating to an identified or identifiable individual.",
              "Service: Refers to the Website.",
              "Service Provider: Any person or company processing data on behalf of the Company.",
              "Usage Data: Data collected automatically from Service use.",
              "Website: Sobhagya, accessible from https://sobhagya.in/"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 font-medium mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* User's Consent */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            User's Consent
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            By accessing and using this website, you indicate that you understand and consent to the terms of this Privacy Policy. If you do not agree, please do not use this website.
          </p>
        </div>

        {/* Types of Data Collected */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Types of Data Collected
          </h2>
          
          <h3 className="mt-4 text-md sm:text-lg md:text-xl font-medium text-orange-600 pl-3">
            Personal Data
          </h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Creating a user profile with Sobhagya requires providing your phone number for OTP verification. Your first name, last name, and date of birth (DOB) are optional.
          </p>
          <ul className="mt-3 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base md:text-lg pl-3">
            {[
              "First name and last name",
              "Phone number",
              "Email address",
              "Usage Data",
              "Payment information for paid services"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 font-medium mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
          
          <h3 className="mt-4 text-md sm:text-lg md:text-xl font-medium text-orange-600 pl-3">
            Usage Data
          </h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Usage Data is collected automatically when using the Service. This may include information such as Your Device's Internet Protocol address (IP address), browser type, browser version, pages visited, time and date of Your visit, time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            When You access the Service by or through a mobile device, We may collect additional information automatically, including device type, unique ID, IP address, operating system, browser type, and similar diagnostic data.
          </p>
          
          <h3 className="mt-4 text-md sm:text-lg md:text-xl font-medium text-orange-600 pl-3">
            Tracking Technologies and Cookies
          </h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            We use Cookies and similar tracking technologies to track activity on Our Service and store certain information. These technologies include:
          </p>
          <ul className="mt-3 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base md:text-lg pl-3">
            {[
              "Cookies or Browser Cookies: Small files placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.",
              "Web Beacons: Small electronic files (also known as clear gifs, pixel tags, and single-pixel gifs) used for counting visitors and analyzing website usage."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 font-medium mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            We use both Session Cookies (deleted when you close your browser) and Persistent Cookies (remain on your device) for the following purposes:
          </p>
          <ul className="mt-3 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base md:text-lg pl-3">
            {[
              "Necessary/Essential Cookies: Required to provide services and enable basic functionality.",
              "Cookie Policy/Notice Acceptance Cookies: Track if users have accepted the cookie policy.",
              "Functionality Cookies: Remember your preferences and settings."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 font-medium mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Purpose and Use of Data */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Use of Your Personal Data
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            We collect this information to personalize user profiles and cater to specific needs. The Company may use Personal Data for the following purposes:
          </p>
          <ul className="mt-3 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base md:text-lg pl-3">
            {[
              "To provide and maintain our Service, including monitoring usage.",
              "To manage your account and give access to different functionalities.",
              "For performance of contracts for purchases or services.",
              "To contact you via email, phone, SMS, or other electronic communication regarding updates or information about functionalities and services.",
              "To provide news, offers, and information about similar goods or services.",
              "To manage your requests to us.",
              "For business transfers during mergers, acquisitions, or asset sales.",
              "For data analysis, identifying usage trends, and improving our services."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 font-medium mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Sharing Personal Information */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Sharing of Your Personal Data
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            We may share Your personal information in the following situations:
          </p>
          <ul className="mt-3 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base md:text-lg pl-3">
            {[
              "With Service Providers: To monitor and analyze service usage and contact you.",
              "For business transfers: During mergers, acquisitions, or company sales.",
              "With Affiliates: With our parent company or subsidiaries under common control.",
              "With business partners: To offer products, services, or promotions.",
              "With other users: When you interact in public areas of the service.",
              "With your consent: For any other purpose with your explicit permission.",
              "Law enforcement: When required by law or valid government requests.",
              "Other legal requirements: To comply with legal obligations, protect company rights, prevent wrongdoing, or protect user safety."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 font-medium mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Data Retention and Transfer */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Retention and Transfer of Your Personal Data
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            The Company will retain Your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Usage Data is generally retained for shorter periods.
          </p>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Your information may be transferred to and processed on computers located outside your jurisdiction. Your consent to this Privacy Policy followed by submission of information represents agreement to such transfers. The Company will ensure adequate controls for data security during any transfer.
          </p>
        </div>

        {/* Delete Your Personal Data */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Data Deletion
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            You have the right to delete or request assistance in deleting Personal Data we have collected about you. To delete your profile, navigate to the settings menu, click 'Delete your account,' and follow the instructions.
          </p>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            You may update or amend your information at any time by signing in to your account and visiting the account settings section. You may also contact us directly to request access, correction, or deletion of personal information you have provided.
          </p>
        </div>

        {/* Voice Recording */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Voice Recording and Microphone Permission
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Our app allows users to send voice messages instead of typing. We request microphone access to enable this feature.
          </p>
        </div>

        {/* Security Measures */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Security of Your Personal Data
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            The security of Your Personal Data is important to us. While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We take necessary security measures to protect user data but cannot guarantee absolute security.
          </p>
        </div>

        {/* Children's Privacy */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Children's Privacy
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
          </p>
        </div>

        {/* Links to Other Websites */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Links to Other Websites
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Changes to this Privacy Policy
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
          </p>
        </div>

        {/* Commitment */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Commitment
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            We protect user privacy and ensure no sale or rent of personal information. We do not provide mental health solutions and may share necessary information with law enforcement when required.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-6 sm:mt-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            If you have any questions about this Privacy Policy, You can contact us by email: info@sobhagya.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;