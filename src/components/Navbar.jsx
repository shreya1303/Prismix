import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close menu only if it's open and the click is outside
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="bg-black h-20 px-10 shadow-lg flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Links */}
        <ul className="hidden md:flex flex-1 justify-end gap-x-16 text-2xl text-white tracking-wider">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Logo in the Center */}
        <div className="mx-24">
          <img
            src="/logo.png"
            alt="Prismix Logo"
            className="h-auto max-h-32 w-auto"
          />
        </div>

        {/* Right Links */}
        <ul className="hidden md:flex flex-1 justify-start gap-x-16 text-2xl text-white tracking-wider">
          <li>
            <Link
              to="/whatwedo"
              className="hover:text-gray-300 transition duration-300"
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl hamburger"
          onClick={(e) => {
            e.stopPropagation(); // Prevent immediate closing
            setIsOpen(true);
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
  initial={{ x: "-100%", opacity: 0 }}
  animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center space-y-5 mobile-menu z-50 pt-50 ${
    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>

        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white text-4xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        {["Home", "About Us", "What We Do", "Contact"].map((text, index) => (
          <motion.li
            key={text}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Link
              to={`/${text.toLowerCase().replace(" ", "-")}`}
              className="text-2xl text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </Link>
          </motion.li>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
