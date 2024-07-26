import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1111] text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        <p className="mt-4">&copy; 2024 Fina. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-white hover:underline">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms-of-service" className="text-white hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
