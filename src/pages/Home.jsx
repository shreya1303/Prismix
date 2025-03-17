import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Full-Screen Video Section */}
      <div className="bg-gradient-to-b from-black to-[#0b1035]"></div>

      {/* Background & Text Section */}
      <section className="relative w-full h-screen flex items-start snap-start">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-[center_top] bg-no-repeat z-10 opacity-25"
          style={{ backgroundImage: "url('/desktop-bg-home.png')" }}
        ></div>

        {/* Semi-Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-20 flex items-start h-full py-40 px-10 md:px-48">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Text Content */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-wider leading-tight">
              Unleashing the Future of Media
            </h1>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-wider leading-tight">
              With{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
                AI-POWERED
              </span>
            </h1>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-wider leading-tight">
              Storytelling
            </h1>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <Link
                to="/whatwedo"
                onClick={() => window.scrollTo(0, 0)} // Scroll to top on navigation
                className="bg-white/10 border border-white/20 backdrop-blur-lg text-white px-4 py-3 rounded-lg text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl hover:bg-white hover:text-black transition duration-300 tracking-wider"
              >
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section
        className="py-16 px-10 flex justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/desktop-bg-home.png')" }} 
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full max-w-6xl z-10">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-wider font-semi-bold text-center text-white mb-10">
            Latest News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
            {/* News Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img
                src="/news1.jpg"
                alt="News 1"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                Exciting Announcement
              </h3>
            </div>

            {/* News Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img
                src="/news2.jpg"
                alt="News 2"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                Collaboration with XYZ
              </h3>
            </div>

            {/* News Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img
                src="/news3.jpg"
                alt="News 3"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                Event Participation
              </h3>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center mt-8">
            {/* News Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img
                src="/news4.jpg"
                alt="News 4"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                Product Launch
              </h3>
            </div>

            {/* News Card 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img
                src="/news5.jpg"
                alt="News 5"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                Industry Recognition
              </h3>
            </div>

            {/* News Card 6 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img
                src="/news6.jpg"
                alt="News 6"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                New AI Breakthrough
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 px-10 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <img src="/client1.png" alt="Client 1" className="h-16 w-auto" />
          <img src="/client2.png" alt="Client 2" className="h-16 w-auto" />
          <img src="/client3.png" alt="Client 3" className="h-16 w-auto" />
          <img src="/client4.png" alt="Client 4" className="h-16 w-auto" />
          <img src="/client5.png" alt="Client 5" className="h-16 w-auto" />
        </div>
      </section>
    </div>
  );
};

export default Home;
