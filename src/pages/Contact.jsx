import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          e.target.reset();
        },
        () => {
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-12">
      {/* Background Image */}
      <div
        className="absolute min-h-screen inset-0 bg-cover bg-center bg-no-repeat z-[-1]" // Fixed z-index issue
        style={{ backgroundImage: "url('/contact-bg.png')", opacity: 1 }} // Adjusted opacity
      ></div>

      {/* Overlay Container */}
      <div className="relative z-10 bg-black/50 backdrop-blur-lg rounded-xl p-10 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start shadow-lg">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 text-white flex flex-col items-center md:items-end justify-center text-center md:text-right pr-0 md:pr-10 self-stretch">
          <h2 className="text-3xl sm:text-lg md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-semibold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Want to <br />
            collaborate <br />
            or explore <br />
            AI-driven <br />
            storytelling?
          </h2>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#62137d] via-[#482177] to-[#1c326b] p-6 rounded-lg shadow-lg self-stretch flex flex-col justify-center">
          <h3 className="text-white text-4xl mb-6 text-center">Let's Talk</h3>

          {isSent ? (
            <p className="text-green-400 text-center text-lg">
              ✅ Message Sent Successfully!
            </p>
          ) : (
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="text-white text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="w-full p-2 bg-white/20 text-white rounded-2xl focus:outline-none placeholder-gray-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label className="text-white text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="w-full p-2 bg-white/20 text-white rounded-2xl focus:outline-none placeholder-gray-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label className="text-white text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-sm mb-1">
                  Type Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="4"
                  className="w-full p-2 bg-white/20 text-white rounded-2xl focus:outline-none placeholder-gray-300"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] text-white text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl px-3 py-1.5 rounded-md hover:bg-white hover:text-black transition-all inline-flex items-center"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
