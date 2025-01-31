import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetchApiWithSanity } from "../../../sanity";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faSearch, faUser, faExchangeAlt, faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 990);

  // Detect scroll and screen resize
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 990); // Change < 990 to <= 990
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // Initialize on mount
  handleResize();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
  };
}, []);


  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Header (Top Section) */}
      <header className={`py-[22px] ${isSmallScreen && isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-md z-50" : "relative"}`}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Left Section: English, EUR, Call Us */}
          <div className="hidden lg:flex lg:basis-4/12">
            <ul className="flex items-center text-[#555252]">
              <li className={`${styles.smthforabslt} flex items-center mr-[54px]`}>
                English
                <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" />
              </li>
              <li className={`${styles.smthforabslt} flex items-center mr-[54px]`}>
                EUR
                <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" />
              </li>
              <li className="flex items-center">Call Us 3965410</li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="lg:basis-4/12 flex justify-center">
            <div className="w-[200px] h-[51px] overflow-hidden">
              <Link to="/">
                <img
                  className="object-contain"
                  src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          {/* Right Section: Icons and Hamburger Menu */}
          <div className="lg:basis-4/12 flex items-center justify-end space-x-6">
            <FontAwesomeIcon icon={faSearch} className="hidden lg:flex text-gray-700 cursor-pointer" />
            <FontAwesomeIcon icon={faUser} className="hidden lg:flex text-gray-700 cursor-pointer" />
            <div className="relative cursor-pointer">
              <FontAwesomeIcon icon={faExchangeAlt} className="text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            <div className="relative cursor-pointer">
              <FontAwesomeIcon icon={faHeart} className="text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            <div className="relative cursor-pointer">
              <FontAwesomeIcon icon={faShoppingBag} className="text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            {/* Hamburger Menu (Toggles Open/Close) */}
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-gray-700 text-2xl cursor-pointer lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </header>

      {/* Navbar (Visible on Large Screens, Burger Menu on Small Screens) */}
      <Navbar isMenuOpen={isMenuOpen} isSmallScreen={isSmallScreen} isScrolled={isScrolled} />
    </div>
  );
};

const Navbar = ({ isMenuOpen, isSmallScreen, isScrolled }) => {
  const { data: NavItems, error } = useSWR(
    '*[_type == "navbar" && isPublished == true] | order(order asc) {name, url}',
    fetchApiWithSanity
  );

  if (error) return <div>Error loading menu!</div>;
  if (!NavItems) return null;

  return (
    <nav className={`w-full transition-all duration-300  border-t 
      ${isScrolled ? "fixed bg-white shadow-md py-3 top-0 left-0 z-50" : "relative"} 
      ${isSmallScreen && !isMenuOpen ? "hidden" : "block lg:flex lg:items-center lg:justify-center"}`}>
      <ul className="flex flex-col lg:flex-row text-center lg:w-full items-center justify-center text-gray-700 space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Small screen only: Add English, EUR, Call Us */}
        <li className="lg:hidden flex items-center text-[#555252]">English <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" /></li>
        <li className="lg:hidden flex items-center text-[#555252]">EUR <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" /></li>
        <li className="lg:hidden flex items-center text-[#555252]">Call Us 3965410</li>

        {/* Small screen only: Add Search and User icons */}
        <li className="lg:hidden flex items-center text-[#555252]"><FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-700 cursor-pointer" />Search</li>
        <li className="lg:hidden flex items-center text-[#555252]"><FontAwesomeIcon icon={faUser} className="mr-2 text-gray-700 cursor-pointer" />User</li>

        {/* Navigation Items */}
        {NavItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className="text-[#555252] leading-[72px] px-[15px] font-medium tracking-[0.8px] hover:text-[#a749ff] transition-all cursor-pointer duration-700 ease-in-out flex items-center">
              {item.name}
              <FontAwesomeIcon icon={faChevronDown} className={`ml-1 text-[10px] ${item.name === "Collection" || item.name === "Contact Us" ? "hidden" : "block"}`} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
