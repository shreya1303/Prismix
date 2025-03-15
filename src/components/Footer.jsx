import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-20 flex justify-between items-center">
      {/* Left Side - Logo */}
      <div className="flex items-center ml-40">
        <img src="/logo.png" alt="Logo" className="h-44 w-auto" />
      </div>

      {/* Right Side - Social Links */}
      <div className="flex flex-col items-center mr-40">
        <h2 className="text-3xl mb-3 tracking-wide">Connect with us</h2>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/prismixstudios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/PrismixStudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/@prismixstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-red-500 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:Contact@prismixstudios.com"
            className="text-white text-3xl hover:text-green-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/company/prismixstudios/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
