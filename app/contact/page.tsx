const Contact = () => {
    return (
      <div className="bg-[#fdf8ef] min-h-screen">
        {/* Header Section */}
        <div className="relative w-full h-48 md:h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hh.png')" }}>
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">Contact Us</h1>
        </div>
  
        {/* Contact Section */}
        <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 gap-10">
          {/* Left Section - Get In Touch */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a5815]">Get In Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions or need astrological guidance? Our experts are here to help! Reach out for consultations, inquiries, or support, and let us assist you on your journey.
            </p>
  
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img src="/phone-icon.png" alt="Phone" className="w-7 h-7" />
                <p className="text-gray-700 font-medium">+91 98765 43201, +91 89765 43201</p>
              </div>
  
              <div className="flex items-center space-x-4">
                <img src="/email-icon.png" alt="Email" className="w-7 h-7" />
                <p className="text-gray-700 font-medium">SobhagyaApp@gmail.com</p>
              </div>
            </div>
  
            {/* Social Media Links */}
            <p className="mt-6 text-gray-700">Connect with us today and discover the wisdom of astrology!</p>
            <div className="flex items-center space-x-4 mt-4">
              <img src="/instagram-icon.png" alt="Instagram" className="w-10 h-10" />
              <img src="/youtube-icon.png" alt="YouTube" className="w-10 h-10" />
              <img src="/facebook-icon.png" alt="Facebook" className="w-10 h-10" />
              <img src="/playstore-icon.png" alt="Play Store" className="w-10 h-10" />
            </div>
          </div>
  
          {/* Right Section - Contact Form */}
          <div className="bg-[#fcf5e9] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#7a5815] mb-4">Send a Message</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815]"
              />
              <input
                type="text"
                placeholder="Phone No./ Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815]"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7a5815] h-32"
              />
              <button className="w-full bg-[#f1b24a] text-white py-3 rounded-md font-semibold hover:bg-[#e09e3c] transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  