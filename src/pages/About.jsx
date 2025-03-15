import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Ajay Devgan",
      designation: "Chairman",
      image: "/ajay.jpeg",
      description:
        "John has over 15 years of experience in the industry and leads the team with a vision to innovate and excel.",
    },
    {
      name: "Danish Devgan",
      designation: "Co-Founder & Chief Business Officer",
      image: "/danish.jpeg",
      description:
        "Jane specializes in tech strategy and ensures our products meet the highest standards of quality.",
    },
    {
      name: "Vatsal Seth",
      designation: "Co-Founder & Chief Executive Officer",
      image: "/vatsal.jpg",
      description:
        "Jane specializes in tech strategy and ensures our products meet the highest standards of quality.",
    },
    {
      name: "Sahil Nayar",
      designation: "Co-Founder & Chief Creative Officer",
      image: "/sahil.jpg",
      description:
        "Jane specializes in tech strategy and ensures our products meet the highest standards of quality.",
    },
  ];

  return (
    <div className="w-full">
      {/* First Section - No Animation */}
      <div className="bg-black min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-10 text-white">
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-center">
          {/* Left Side - Image Collage with Animation */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-center mb-6 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="flex flex-col gap-4">
                <img
                  src="/image1.jpg"
                  alt="Image 1"
                  className="w-full bg-white h-[48%] rounded-lg shadow-lg object-cover"
                />
                <img
                  src="/image2.jpg"
                  alt="Image 2"
                  className="w-full h-[48%] bg-white rounded-lg shadow-lg object-cover"
                />
              </div>
              <img
                src="/image3.jpg"
                alt="Image 3"
                className="w-full h-full bg-white rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Static Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-semi-bold mb-6">
              Redefining media with generative AI
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-4 font-[calibri]">
              At <span className="text-[#3ec6e6]">Prismix Studios</span>, we
              bridge creativity and Generative AI to revolutionize storytelling
              across media. From short films to animated graphic novels, music
              videos, and corporate content, we bring untold stories to life
              that were once constrained by cost or complexity.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-[calibri]">
              Backed by India’s biggest Bollywood personality, we push the
              boundaries of creative storytelling, empowering brands, creators,
              and filmmakers to produce high-quality, scalable, and visually
              compelling content.
            </p>
          </div>
        </div>
      </div>
      {/* bg-gradient-to-r from-[#442063] via-[#342557] to-[#1d3263] */}
      {/* Our Team Section - Appears on Scroll */}
      <div className="bg-black">
        <motion.section
          className="w-full flex justify-center py-16" // Centers the section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-[#442063] via-[#342557] to-[#1d3263] text-white max-w-6xl w-full mx-4 sm:mx-8 md:mx-auto px-6 sm:px-8 md:px-12 py-12 rounded-lg shadow-2xl before:absolute before:inset-0 before:bg-black/10 before:rounded-lg before:blur-[8px]">
          
            <h2 className="text-4xl md:text-7xl sm:text-3xl font-semi-bold text-center mb-0">
              The Team
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-400 mb-10">
              Leaders and Legacy
            </h3>

            <div className="max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col lg:flex-row items-center gap-8 mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: Math.min(index * 0.3, 0.6),
                  }}
                  viewport={{ once: true }}
                >
                  {/* Left - Polaroid-Style Card */}
                  <motion.div
                    className="relative bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-4 flex flex-col items-center w-56 h-82"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.2, 0.5),
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Image */}
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-64 object-cover rounded-lg shadow-md" // Increased width & height
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(index * 0.2, 0.5),
                      }}
                      viewport={{ once: true }}
                    />

                    <h3 className="text-xl mt-2">{member.name}</h3>
                    <p className="text-gray-300 text-sm">
                      {member.designation}
                    </p>
                  </motion.div>

                  {/* Right - Description */}
                  <motion.div
                    className="w-full lg:w-2/3 text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: Math.min(index * 0.2, 0.5),
                    }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg leading-relaxed text-gray-300">
                      {member.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
