const Contact = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top] bg-no-repeat z-0"
        style={{ backgroundImage: "url('/contact-bg.png')" }}
      ></div>

      {/* Overlay Box */}
      <div className="relative z-10 bg-black/30 backdrop-blur-lg rounded-xl p-10 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start shadow-lg">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 text-white flex flex-col items-center md:items-end justify-center text-center md:text-right pr-0 md:pr-10 self-stretch">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Want to <br />
            collaborate <br />
            or explore <br />
            <span className="text-blue-400">AI-driven</span> <br />
            storytelling?
          </h2>
        </div>

        {/* Right Side - Form Box */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#62137d] via-[#482177] to-[#1c326b] p-6 rounded-lg shadow-lg self-stretch flex flex-col justify-center">
          <h3 className="text-white text-4xl mb-6 text-center">Let's Talk</h3>

          <form className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 bg-white/20 text-black rounded-2xl focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-white/20 text-black rounded-2xl focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-1">
                Type Your Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                className="w-full p-2 bg-white/20 text-black rounded-2xl focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] text-white text-sm px-3 py-1.5 rounded-md hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,255,255,1)] transition-all inline-flex items-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
