import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Full-Screen Video Section */}
      <section className="relative w-full h-screen snap-start">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/home-animation.mp4" // Make sure the path is correct
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Smooth Gradient Overlay to Blend Video with Next Section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-[#140b0f] z-10"></div>
      </section>

      {/* Background & Text Section */}
      <section className="relative w-full h-screen flex items-start pt-16 snap-start">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-[center_top] bg-no-repeat z-10"
          style={{ backgroundImage: "url('/desktop-bg-home.png')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-20 flex items-start h-full py-10 px-10 md:px-48">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Text Content */}
            <h1 className="text-white text-4xl md:text-5xl sm:text-2xl tracking-wider leading-tight">
              Unleashing the Future of Media
            </h1>
            <h1 className="text-white text-4xl md:text-5xl sm:text-2xl tracking-wider leading-tight">
              With{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold tracking-wider text-5xl sm:text-lg md:text-6xl leading-tight">
                AI-POWERED
              </span>
            </h1>
            <h1 className="text-white text-4xl md:text-5xl tracking-wider leading-tight">
              storytelling
            </h1>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-white/10 border border-white backdrop-blur-lg text-white px-4 py-3 rounded-lg text-md md:text-lg hover:bg-white/20 transition duration-300 tracking-wider">
                Explore Our Work
              </button>
              <button className="border-2 border-white text-white px-4 py-3 rounded-lg text-md md:text-lg hover:bg-white hover:text-black transition duration-300 tracking-wider">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
