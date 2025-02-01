import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-[100px] pb-[70px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className=" lg:text-left">
          <div className="w-[200px] h-[51px] overflow-hidden">
              <Link to="/">
                <img className="object-contain" src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="Logo" />
              </Link>
            </div>            <p className="text-gray-600 mt-2">© 2025 Flone.</p>
            <p className="text-gray-600">All Rights Reserved</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About us</li>
              <li>Store location</li>
              <li>Contact</li>
              <li>Orders tracking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Returns</li>
              <li>Support Policy</li>
              <li>Size guide</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
            <p className="text-gray-600 mb-2">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="flex items-center border-b border-gray-400 pb-1">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-grow outline-none bg-transparent text-gray-600"
              />
            </div>
            <button className="mt-3  underline font-normal  hover:text-[#a749ff] transition-all duration-700 ease-in-out ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
