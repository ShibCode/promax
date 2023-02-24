import React from "react";

const Service = ({ service, serviceDetails, img, alt, reverse }) => {
  return (
    <div
      className={`flex justify-between items-center gap-6 lg:gap-12 flex-col-reverse lg:flex-row ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h1 className="text-xl sm:text-2xl font-semibold uppercase">
          {service}
        </h1>
        <p className="para">{serviceDetails}</p>
      </div>

      <img
        src={img}
        alt={alt}
        className="max-w-sm w-[75%] lg:max-w-lg lg:w-1/2"
      />
    </div>
  );
};

export default Service;
