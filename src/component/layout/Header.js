import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pages from "../../utils/pages";
import logoImage from "./assets/maskot_lampung.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const navlinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Header = () => {
  const { pathname } = useLocation();
  const [navExpanded, setNavExpanded] = useState(false);
  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to={pages.get("home").path}>
          <img src={logoImage} alt="logo pariwisata lampung" />
        </Link>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setNavExpanded(!navExpanded)}
        >
          {navExpanded ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>

        <ul
          className={navExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
          onClick={() => setNavExpanded(!navExpanded)}
        >
          {navlinks.map((navLink, index) => (
            <li key={index}>
              <Link
                className={pathname === navLink.path ? "current-location" : ""}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
