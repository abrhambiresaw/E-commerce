import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Brand Section  */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Tibeb logo" />
          <p className="w-full text-gray-600 leading-relaxed">
            Tibeb Habesha is your premier destination for authentic Ethiopian
            fashion. We celebrate the beauty of Ethiopian heritage through our
            carefully curated collection of traditional and modern clothing for
            women, men, and children. From stunning habesha kemis to timeless
            designs, we bring you quality craftsmanship with every piece.
          </p>
        </div>

        <div className="flex flex-row justify-between md:contents gap-8">
          {/* Company Links */}
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-black transition-colors"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/delivery"
                  className="hover:text-black transition-colors"
                >
                  Delivery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy"
                  className="hover:text-black transition-colors"
                >
                  Privacy policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a
                  href="tel:+251930142640"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  📞 +251-930-142-640
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=contact@tibeb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  📧 contact@tibeb.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                📍 Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <p className="text-xl font-medium mb-5">FOLLOW US</p>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  <FaInstagram size={20} className="text-pink-500" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <FaFacebookF size={20} className="text-blue-600" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <FaYoutube size={20} className="text-red-600" /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors flex items-center gap-2"
                >
                  <FaTiktok size={20} className="text-black" /> TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 transition-colors flex items-center gap-2"
                >
                  <FaTelegramPlane size={20} className="text-sky-500" />{" "}
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
