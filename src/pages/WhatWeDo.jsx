import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const WhatWeDo = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef({});
  const swiperRef = useRef(null);

  const videos = [
    {
      src: "video-3.mp4",
      id: 3,
      title: "International Women's Day Film for Tata Motors",
    },
    { src: "video-1.mp4", id: 1, title: "Being Human Body Building" },
    { src: "video-2.mp4", id: 2, title: "Book of Silence" },
  ];

  const togglePlayPause = (id) => {
    const vid = videoRefs.current[id];

    if (vid.paused) {
      Object.values(videoRefs.current).forEach((v) => v.pause());
      swiperRef.current?.autoplay.stop();
      vid.play();
      setPlayingVideo(id);
    } else {
      vid.pause();
      setPlayingVideo(null);
      swiperRef.current?.autoplay.start();
    }
  };

  const toggleMute = () => {
    Object.values(videoRefs.current).forEach((vid) => {
      vid.muted = !isMuted;
    });
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative bg-black w-full h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-center justify-between gap-4 md:gap-12">
        {/* Right Side - Video Carousel */}
        <div className="w-full md:w-[50%] relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full flex justify-center items-center h-[40vh] md:h-[50vh]"
          >
            {videos.map((video) => (
              <SwiperSlide
                key={video.id}
                className="relative flex justify-center"
              >
                <div
                  className="relative group w-[90%] sm:w-full max-w-[600px] mx-auto px-2"
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  {/* Video Title (Only show when the video is NOT playing) */}
                  {playingVideo !== video.id && (
                    <div className="absolute font-[arial] top-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base z-10">
                      {video.title}
                    </div>
                  )}

                  {/* Video Player */}
                  <div className="w-full aspect-video">
                    <video
                      ref={(el) => (videoRefs.current[video.id] = el)}
                      src={video.src}
                      className="w-full h-full rounded-lg object-cover transition-all duration-300"
                      onPlay={() => setPlayingVideo(video.id)}
                      onPause={() => setPlayingVideo(null)}
                      muted={isMuted}
                      playsInline
                    />
                  </div>

                  {/* Play Button (Shown when video is NOT playing) */}
                  {playingVideo !== video.id && (
                    <button
                      onClick={() => togglePlayPause(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg text-white p-4"
                    >
                      <FaPlay className="text-5xl" />
                    </button>
                  )}

                  {/* Pause Button (Shown only on hover when video is playing) */}
                  {playingVideo === video.id && hoveredVideo === video.id && (
                    <button
                      onClick={() => togglePlayPause(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg text-white p-4"
                    >
                      <FaPause className="text-5xl" />
                    </button>
                  )}

                  {/* Mute/Unmute Button (Always Visible, Bottom Right) */}
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 bg-black/50 text-white p-3 rounded-full"
                  >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots Over the Video */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="swiper-pagination"></div>
          </div>
        </div>

        {/* Left Side - Features List */}
        <div className="w-full md:w-[45%] flex flex-col gap-4 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-3xl md:text-6xl text-white leading-tight"
          >
            AI-Driven Content Creation
          </motion.h2>

          <ul className="flex flex-col font-[arial] gap-3 sm:gap-4">
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
                className="bg-gradient-to-r from-[#1D2671] to-black backdrop-blur-lg text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-lg w-full md:w-max text-sm sm:text-base md:text-md"
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
