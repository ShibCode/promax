import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Pagination from "../Components/Pagination";

const Gallery = () => {
  return (
    <>
      <div className="wrapper gallery-bg relative bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-bannerGradient -z-10"></div>
        <section className="contain flex-col gap-6 justify-center h-80 sm:h-96">
          <h1 className="banner-heading">Gallery</h1>
        </section>
      </div>

      <div className="wrapper py-16">
        <section className="contain flex-col gap-8">
          <div className="flex justify-between w-full items-center flex-wrap gap-4">
            <div className="text-lg text-lightGray md:text-2xl">
              <span className="font-semibold">May 25th, 2021 -</span>{" "}
              <span>9 Images</span>
            </div>

            <div className="flex w-72 shadow-input">
              <button className="h-12 aspect-square">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type="text"
                placeholder="Search Photos"
                className="text-placeholderColor text-sm font-light py-3.5 outline-none"
              />
            </div>
          </div>

          <div className="shadow-gallery p-0 sm:p-6 lg:p-12 grid gap-2 grid-cols-2 grid-rows-5 sm:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 place-items-center sm:gap-4 md:gap-6 lg:gap-8">
            <img src="/assets/gallery/orangeflowers.png" alt="orange flowers" />
            <img src="/assets/gallery/manyframes.png" alt="wall with frames" />
            <img src="/assets/gallery/door.png" alt="door" />
            <img src="/assets/gallery/orangewall.png" alt="orange wall" />
            <img src="/assets/gallery/paintbowl.png" alt="paint in bowl" />
            <img src="/assets/gallery/warisoverframe.png" alt="frames" />
            <img
              src="/assets/gallery/girlpainting.png"
              alt="girl looking at paints"
              className="col-span-2 row-span-2"
            />
            <img
              src="/assets/gallery/spiralstairs.png"
              alt="spiral staircase"
            />
            <img src="/assets/gallery/yellowflowers.png" alt="yellow flowers" />
          </div>
        </section>
      </div>

      <div className="wrapper py-4">
        <section className="contain flex-col gap-8">
          <div className="flex justify-between w-full">
            <div className="text-lg text-lightGray sm:text-xl lg:text-2xl">
              <span className="font-semibold">May 25th, 2021 -</span>{" "}
              <span>5 Images</span>
            </div>
          </div>

          <div className="shadow-gallery p-0 sm:p-6 lg:p-12 grid gap-2 grid-col-2 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 place-items-center sm:gap-4 lg:gap-8">
            <img src="/assets/gallery/destroyedroom.png" alt="destroyed room" />
            <img src="/assets/gallery/yellowsofa.png" alt="yellow sofa" />
            <img
              src="/assets/gallery/tea.png"
              alt="tea"
              className="col-span-2 row-span-2"
            />
            <img src="/assets/gallery/woodenroom.png" alt="wooden room" />
            <img src="/assets/gallery/tableman.png" alt="man sitting" />
          </div>
        </section>
      </div>

      <div className="flex gap-4 justify-center mt-20 mb-28">
        <Pagination pageCount={4} selectedPage={1} />
      </div>
    </>
  );
};

export default Gallery;
