import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../views/Style.css";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 10;

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ...

  return (
    <nav className={`w-full ${isScrolled ? "scrolled" : ""}`}>
      <ul className="container mx-auto flex items-center justify-between py-4">
        <li className="flex items-center">
          <div className="judul_navbar font-bold text-lg">
            Galeri Nasional Indonesia
          </div>
        </li>
        <li
          className={`md:flex space-x-4 text ${
            isMenuOpen ? "flex-col mt-4" : "hidden"
          }`}
        >
          {/* Elemen <li> */}
          <NavLink
            to="/"
            active={location.pathname === "/"}
            onClick={() => setIsMenuOpen(false)}
          >
            Beranda
          </NavLink>
          <NavLink
            to="/blog"
            active={location.pathname === "/blog"}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/museum"
            active={location.pathname === "/museum"}
            onClick={() => setIsMenuOpen(false)}
          >
            Museum
          </NavLink>
          <NavLink
            to="/kontak"
            active={location.pathname === "/kontak"}
            onClick={() => setIsMenuOpen(false)}
          >
            Kontak
          </NavLink>
        </li>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            <svg
              className={`h-6 w-6 fill-current ${
                isScrolled ? "text-white" : "text-gray-500"
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${isMenuOpen ? "hidden" : "block"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
              <path
                className={`${isMenuOpen ? "block" : "hidden"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18H18V16H6V18ZM6 13H18V11H6V13ZM6 8H18V6H6V8Z"
              />
            </svg>
          </button>
        </div>
      </ul>
    </nav>
  );
};

const NavLink = ({ to, active, children }) => {
  return (
    <li className={active ? "active" : ""}>
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

export default Navigation;
