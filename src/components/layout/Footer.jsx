import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6"; // FaTiktok is from react-icons/fa6 or use tfi from tfi library

import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6 md:px-16 border-t border-cyan-900 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={Logo} />
          <p className="text-sm text-[#9CA3AF] pt-2">
            The ultimate gaming platform for quiz enthusiasts. Compete, win, and
            earn daily.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm text-[#9CA3AF]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Wallet</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-[#9CA3AF]">
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Game Rules</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            {/* <a
              href="https://www.facebook.com/pluckedme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] p-2 rounded-full"
            >
              <FaFacebookF className="text-cyan-400" />
            </a> */}
            <a
              href="https://x.com/Plucked_Me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] p-2 rounded-full"
            >
              <FaXTwitter className="text-cyan-400" />
            </a>
            <a
              href="https://www.instagram.com/pluckedme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] p-2 rounded-full"
            >
              <FaInstagram className="text-cyan-400" />
            </a>
            <a
              href="https://www.tiktok.com/@plucked.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] p-2 rounded-full"
            >
              <FaTiktok className="text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
