import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Pagination = ({ pageCount, selectedPage }) => {
  return (
    <>
      {[...Array(pageCount)].map((e, index) => (
        <div
          className={`w-10 h-10 sm:w-14 sm:h-14 font-poppins shadow-pagination text-base sm:text-lg font-medium grid place-items-center rounded-lg cursor-pointer duration-100 ${
            index + 1 === selectedPage
              ? "bg-bannerGradient text-white"
              : "hover:bg-gray-200"
          }`}
        >
          {index + 1}
        </div>
      ))}
      <div className="w-10 h-10 sm:w-14 sm:h-14 shadow-pagination grid place-items-center rounded-lg cursor-pointer hover:bg-gray-200 duration-100">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  );
};

export default Pagination;
