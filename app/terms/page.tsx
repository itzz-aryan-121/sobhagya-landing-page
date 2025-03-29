import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10 max-w-3xl w-full border border-gray-200 relative">
        {/* Background Logo */}
        <div
          className="absolute inset-0 flex justify-center items-center opacity-10 sm:opacity-15"
          style={{
            backgroundImage: "url('/monk logo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#745802] text-center mb-6 underline">
          Terms of Service
        </h1>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Welcome to <strong>www.sohbhagya.com</strong>. By accessing or using our platform, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our services.
        </p>

        {/* Sections */}
        {[
          {
            title: "Acceptance of Terms",
            content:
              "We reserve the right to make changes to these terms of use and our privacy policy at our discretion, including updates to reflect new features, changes in business practices, or legal requirements. The latest version can always be found on our app and website. Please periodically review these terms and the privacy policy, as all modifications are effective upon publication. Your continued use of the sobhagya app and website after revisions indicates your acceptance of the terms of use. We will notify sobhagya users when we make modifications to the terms of use and/or privacy policy via our App.",
          },
          {
            title: "Eligibility",
            content:
              "sobhagya is a social platform designed to connect people globally for meaningful connections. By creating a sobhagya account, you confirm that: (1) You are at least 18 years old; (2) You can enter into a binding contract with sobhagya; (3) You are not prohibited from using the service under Indian laws or any other applicable jurisdiction; (4) You have no unspent convictions or active court orders related to assault, violence, sexual misconduct, or harassment; (5) You will not use our Website or App if you have been previously removed from sobhagya; (6) You will comply with this agreement and all applicable laws, rules, and regulations.",
          },
          {
            title: "User Accounts",
            content:
              "To use the Website or App, you must register and authenticate yourself using Facebook or Linkedin login. After registration, you can create a personal account ('Your Account'). During this process, we will need your pictures and additional information about yourself, such as your interests, story, pictures, philosophy, work, and an icebreaker, in addition to basic information like your name, gender, date of birth, height, relationship status, religion, ethnicity, and city of residence. Your email and phone number will serve as your identifier when contacting support. Your Account is registered via your phone number, Facebook, or Linkedin login. By logging in through Facebook or Linkedin, you authorize us to access and use your public profile information.",
          },
          {
            title: "Community Guidelines",
            content:
              "sobhagya users are expected to conduct themselves with dignity and professionalism. Unacceptable behavior may result in the termination of membership. Users must not post or transmit defamatory, inaccurate, abusive, obscene, profane, offensive, sexually-oriented, threatening, harassing, racially offensive, or illegal material. Do not use automated tools to retrieve or reproduce content from the service. Do not use sobhagya for soliciting your own business activities or commercial purposes. Do not provide inaccurate, misleading, or false information to sobhagya or other users.",
          },
          {
            title: "Intellectual Property",
            content:
              "As a sobhagya user, you grant us a free, non-exclusive, international, and permanent license to use, reproduce, modify, translate, and represent any intellectual property-related content (text, emojis, photos, videos, etc.) you provide through the App for the purpose of communicating with other users. We can use such content in various formats on the Website, App, ads, and other areas accessible by users and for internal purposes. You may not post, distribute, or reproduce copyrighted material, trademarks, or other proprietary information without obtaining prior written consent from the owner of such rights.",
          },
          {
            title: "Payment & Refund Policy",
            content:
              "Payments for services are non-refundable unless otherwise stated. Users must review the pricing and terms before making a purchase. Under any circumstances, purchases made on sobhagya will not be refundable.",
          },
          {
            title: "Limitation of Liability",
            content:
              "In no event shall sobhagya, its affiliates, employees, agents, licensors, or partners be liable for any damages whatsoever, including direct, indirect, general, special, compensatory, consequential, and/or incidental damages, arising out of or related to your conduct or anyone else's conduct in connection with the use of the service. This includes, but is not limited to, bodily injury, emotional distress, loss of use, loss of data, loss of income or profit, loss of or damage to property, wasted management or office time, breach of contract, or claims of third parties. sobhagya's maximum liability arising out of or in connection with the Website or App, regardless of the cause of action, will not exceed the fees you have paid for purchases on sobhagya.",
          },
          {
            title: "Safety",
            content:
              "sobhagya does not conduct criminal or formal background checks on its users and does not verify user statements. You are solely responsible for taking appropriate safety precautions when using the Website and App and contacting other users. Understand the risks of interacting online or offline with other users, including dating and meeting. We do not guarantee or verify the accuracy of information provided by other users. All content and services on the Website and App are provided 'as is' and 'as available.' Please note that we record all calls for safety and security purposes.",
          },
          {
            title: "Termination of Services",
            content:
              "We reserve the right to suspend or terminate access to our services for any user who violates these terms or engages in harmful activities. You can delete your sobhagya account at any time without notice. When you delete your account, your profile will be removed from the list of profiles on sobhagya, and you cannot reactivate your deleted profile. sobhagya reserves the right to terminate your membership, suspend your profile, or disable access due to a breach of these terms, with or without notice.",
          },
        ].map((section, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
              {section.title}
            </h2>
            <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* User Responsibilities Section */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            User Responsibilities
          </h2>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
            {[
              "Ensure the accuracy of personal information provided.",
              "Do not share account credentials with others.",
              "Comply with all applicable laws when using our services.",
              "Report any security breaches or unauthorized activity immediately.",
              "Use discretion when sharing personal information with other sobhagya users; exercise privacy and safety precautions.",
              "Do not upload viruses or malicious code or compromise the security of sobhagya's services.",
              "Use information provided by another sobhagya user in a lawful, responsible, and respectful manner.",
              "Immediately stop contacting any user who asks you to do so.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 font-medium mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Governing Law */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Governing Law
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
            These terms of use and privacy policy are governed by the laws of India, and you agree to submit to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
          </p>
        </div>

        {/* Disclaimers */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Disclaimers
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
            Sobhagya does not represent or warrant that: (1) Any matches or profiles presented will be compatible and/or guarantee success in finding a partner; (2) The service will be uninterrupted, secure, or error-free; (3) Any defects or errors in the service will be corrected; (4) Any content or information you obtain on or through the service will be accurate; (5) Any suggestions or feedback will be incorporated. Sobhagya facilitates outbound calls for communication between Astrologers and Users. These calls are intended to enhance the consultation experience, ensuring a seamless and direct connection between the parties.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-700 border-l-4 border-orange-500 pl-3">
            Copyright Infringement Claims
          </h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
            If you believe your work has been copied and posted on the Service in a way that constitutes copyright infringement, please provide us with the required information at support@sobhagya.in, including your contact details and a description of the copyrighted work that you claim has been infringed.
          </p>
        </div>

        {/* Last Updated */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          Last Updated: March 29, 2025
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;