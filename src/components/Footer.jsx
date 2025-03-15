import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-10 flex flex-col items-center sm:flex-row sm:justify-between sm:px-20">
      {/* Logo - Appears on top in mobile view */}
      <div className="flex items-center mb-6 sm:mb-0">
        <img src="/logo.png" alt="Logo" className="h-32 w-auto sm:h-44" />
      </div>

      {/* Social Links - Appears below the logo in mobile view */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-3 tracking-wide sm:text-3xl">
          Connect with us
        </h2>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/prismixstudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-3xl hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/PrismixStudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-3xl hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/@prismixstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-3xl hover:text-red-500 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:Contact@prismixstudios.com"
            className="text-white text-2xl sm:text-3xl hover:text-green-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/company/prismixstudios/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-3xl hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
