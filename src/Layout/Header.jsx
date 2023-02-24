import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../Components/Overlay";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }
  return (
    <div className="wrapper sticky top-0 bg-white shadow-lg z-10">
      <div className="contain items-center py-4 xl:py-6 justify-between">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" className="w-32 xl:w-36" />
        </Link>

        <button
          className="xl:hidden z-30 grid place-items-center w-8 h-8 text-2xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
        </button>

        <Overlay showMenu={showMenu} closeMenu={closeMenu} />

        <nav
          className={`${
            showMenu ? "translate-x-0" : "translate-x-full"
          } fixed right-0 top-0 w-full max-w-xs bg-white items-start h-full flex flex-col px-6 py-12 gap-4 duration-100 z-20 xl:max-w-7xl xl:flex xl:items-center xl:gap-8 xl:flex-row xl:bg-transparent xl:w-auto xl:h-auto xl:p-0 xl:static xl:translate-x-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-darkGreen font-semibold" : "text-lightGray"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <a href="#" className="text-lightGray" onClick={closeMenu}>
            Interior Painting
          </a>
          <a href="#" className="text-lightGray" onClick={closeMenu}>
            Exterior Painting
          </a>
          <a href="#" className="text-lightGray" onClick={closeMenu}>
            Commercial Painting
          </a>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-darkGreen font-semibold" : "text-lightGray"
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <a href="#" className="text-lightGray" onClick={closeMenu}>
            Reviews
          </a>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-darkGreen font-semibold" : "text-lightGray"
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <Link
            to="/contact"
            className="green-btn my-3 lg:m-0"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
