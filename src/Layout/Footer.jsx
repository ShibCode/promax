import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="contain justify-between items-center py-8 flex-col gap-6 md:flex-row md:gap-0">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" className="w-32 xl:w-36" />
        </Link>

        <p className="text-darkBlue font-poppins text-center leading-[1]">
          © 2023 promax. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-8 h-8 text-white bg-lightGreen rounded-full grid place-items-center cursor-pointer hover:opacity-90"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="w-8 h-8 text-white bg-lightGreen rounded-full grid place-items-center cursor-pointer hover:opacity-90"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="#"
            className="w-8 h-8 text-white bg-lightGreen rounded-full grid place-items-center cursor-pointer hover:opacity-90"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
