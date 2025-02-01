import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetchApiWithSanity } from "../../../sanity";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faSearch,
  faUser,
  faExchangeAlt,
  faShoppingBag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 990); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsSmallScreen(window.innerWidth < 990);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <header
        className={`py-[22px] ${
          isSmallScreen && isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-md z-50" : "relative"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className={`lg:flex lg:basis-4/12 ${isSmallScreen ? "hidden" : "flex"}`}>
            <ul className="flex items-center text-[#555252]">
              <li className={`${styles.smthforabslt} flex items-center mr-[54px]`}>
                English <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" />
              </li>
              <li className={`${styles.smthforabslt} flex items-center mr-[54px]`}>
                EUR <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" />
              </li>
              <li className="flex items-center">Call Us 3965410</li>
            </ul>
          </div>

          <div className="lg:basis-4/12 flex justify-center">
            <div className="w-[200px] h-[51px] overflow-hidden">
              <Link to="/">
                <img className="object-contain" src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>

          <div className="lg:basis-4/12 flex items-center justify-end space-x-6">
            {!isSmallScreen && (
              <>
                <FontAwesomeIcon icon={faSearch} className="text-gray-700 cursor-pointer" />
                <FontAwesomeIcon icon={faUser} className="text-gray-700 cursor-pointer" />
              </>
            )}
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
            {isSmallScreen && (
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="text-gray-700 text-2xl cursor-pointer lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
          </div>
        </div>
      </header>

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
    <nav className={`w-full transition-all duration-300 border-t 
      ${isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-md z-50" : "lg:sticky lg:top-0"} 
      ${isSmallScreen && !isMenuOpen ? "hidden" : "block lg:flex lg:items-center lg:justify-center"}`}
    >
      <ul className={`flex ${isSmallScreen ? "flex-col" : "lg:flex-row"} text-center lg:w-full items-center justify-center text-gray-700 space-y-4 lg:space-y-0 lg:space-x-6`}>
        
        {isSmallScreen && isMenuOpen && (
          <>
            <li className="flex items-center text-[#555252]">
              English <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" />
            </li>
            <li className="flex items-center text-[#555252]">
              EUR <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" />
            </li>
            <li className="flex items-center text-[#555252]">Call Us 3965410</li>
          </>
        )}

        {NavItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              className="text-[#555252] leading-[72px] px-[15px]  tracking-[0.8px] hover:text-[#a749ff] transition-all duration-700 ease-in-out flex items-center"
            >
              {item.name}
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[10px]" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
