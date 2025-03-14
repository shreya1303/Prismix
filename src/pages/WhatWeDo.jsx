import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const WhatWeDo = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      src: "video-1",
      id: 1,
    },
    {
      src: "video-2",
      id: 2,
    },
    {
      src: "video-3",
      id: 3,
    },
  ];

  return (
    <section className="relative bg-black w-full h-screen flex items-center justify-center px-6 md:px-12">
      {/* Reversed Order for Mobile: md:flex-row-reverse */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-center justify-between gap-20">
        {/* Right Side - 3D Video Carousel (Appears First on Mobile) */}
        <div className="w-full md:w-[50%] relative">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 500,
              modifier: 2.5,
              scale: 1.2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full flex justify-center items-center h-[50vh]"
          >
            {videos.map((video) => (
              <SwiperSlide
                key={video.id}
                className="relative flex justify-center"
              >
                <div className="relative group w-[100%] max-w-[750px]">
                  {/* Video Player */}
                  <div className="w-full aspect-w-16 aspect-h-9">
                    <video
                      id={`video-${video.id}`}
                      src={video.src}
                      className="w-full h-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                      onPlay={() => setPlayingVideo(video.id)}
                      onPause={() => setPlayingVideo(null)}
                      playsInline
                    />
                  </div>

                  {/* Custom Play Button */}
                  {playingVideo !== video.id && (
                    <button
                      onClick={() => {
                        const vid = document.getElementById(
                          `video-${video.id}`
                        );
                        vid.play();
                        setPlayingVideo(video.id);
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-100 transition-opacity"
                    >
                      <FaPlay className="text-white text-5xl" />
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Left Side - Features List (Appears Second on Mobile) */}
        <div className="w-full md:w-[45%] flex flex-col gap-5">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl text-white"
          >
            AI-Driven Content Creation
          </motion.h2>

          <ul className="flex flex-col font-[arial] gap-4">
            {[
              "Short Films & Series – AI-generated storytelling for digital and OTT platforms.",
              "Animated Graphic Novels – Engaging visual narratives crafted with AI.",
              "Music Videos – AI-enhanced visuals that redefine the music experience.",
              "Corporate Content & Ad Campaigns – High-quality branding solutions powered by AI.",
              "Social Media Content – Scalable, AI-optimized content for all platforms.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-r from-[#1D2671] to [#C33764] backdrop-blur-lg text-white px-5 py-3 rounded-2xl shadow-lg w-max"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
