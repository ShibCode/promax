import React from "react";

const Overlay = ({ showMenu, closeMenu }) => {
  return (
    <div
      className={`bg-black opacity-60 fixed inset-0 z-10 ${
        !showMenu && "hidden"
      }`}
      onClick={closeMenu}
    ></div>
  );
};

export default Overlay;
