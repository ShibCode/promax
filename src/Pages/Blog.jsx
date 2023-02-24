import React from "react";

import BlogBox from "../Components/BlogBox";
import Pagination from "../Components/Pagination";

const blogBoxes = [
  {
    title: "10 Mistakes to Avoid in Bedroom Interior Design",
    img: "/assets/blog/blog2.png",
  },
  {
    title: "10 Mistakes to Avoid in Bedroom Interior Design",
    img: "/assets/blog/blog3.png",
  },
  {
    title: "10 Mistakes to Avoid in Bedroom Interior Design",
    img: "/assets/blog/blog4.png",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="wrapper blog-bg relative bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-bannerGradient -z-10"></div>
        <section className="contain flex-col gap-6 justify-center h-80 sm:h-96">
          <h1 className="banner-heading">Blog</h1>
        </section>
      </div>

      <div className="wrapper mt-16">
        <section className="contain flex-col lg:flex-row lg:gap-8 gap-12">
          <div className="flex-1 flex flex-col gap-10">
            <div>
              <h2 className="text-blogTitle text-2xl leading-7 md:text-4xl font-bold md:leading-[50px]">
                10 Mistakes to Avoid in Bedroom Interior Design
              </h2>
              <div className="text-blogPara text-base sm:text-lg pt-3">
                May 25, 2023 . 5 mins read
              </div>
            </div>

            <div>
              <img
                src="/assets/blog/blog1.png"
                alt="interior design"
                className="pb-8"
              />
              <p className="text-blogPara font-poppins">
                Lorem ipsum dolor sit amet consectetur. Cursus volutpat risus
                netus pellentesque accumsan aenean tellus. In fermentum eget sed
                consectetur. A venenatis diam tortor sem quis egestas. Arcu arcu
                nulla feugiat quis. Fermentum ac eget in semper cursus vitae ut.
                Non enim nunc pellentesque interdum et a. Id interdum tincidunt
                commodo ut in. Pretium ut sed risus nunc nulla volutpat in nibh.
                Convallis sit tincidunt nunc est. Dui et id vel sed felis
                gravida leo platea. Id nec ullamcorper dapibus faucibus
                tincidunt. Nisl risus fringilla at egestas eget cras varius diam
                risus. Sed est at turpis luctus.
              </p>
              <p className="text-blogPara font-poppins">
                Risus magna volutpat non commodo venenatis. Vitae dignissim
                consectetur in donec nibh posuere pharetra. Donec velit nisl
                semper tellus elit fermentum in. Id neque sapien volutpat varius
                porta leo tellus. Vitae pretium arcu nec rutrum sed gravida
                posuere sit. Aliquam eu vulputate diam ipsum eget nec tristique
                massa. Enim nisi phasellus vitae sit vitae mauris justo ipsum
                facilisis. Ultrices iaculis suspendisse malesuada porttitor.
                Blandit morbi morbi turpis a. Nibh est ut consequat netus et
                eget ultricies non risus. Mattis morbi nisi vivamus in purus
                diam cum. Amet massa magna et fermentum. Nulla leo vulputate
                feugiat rhoncus.
              </p>
              <p className="text-blogPara font-poppins">
                Orci gravida morbi odio cras mattis arcu platea gravida
                accumsan. Felis viverra ut phasellus faucibus ornare mauris. Dui
                mattis enim hac mauris. Ut donec dignissim neque vestibulum nec
                sapien varius eu. Senectus urna nam blandit arcu consequat
                blandit tincidunt penatibus quam. Bibendum elementum habitasse
                pulvinar fringilla nulla lectus felis. Adipiscing amet interdum
                lacus blandit aliquet. Diam sem fermentum phasellus nisi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-80 flex flex-col gap-6">
            <div className="lg:mx-0 mx-auto">
              <h2 className="text-blogTitle text-2xl font-bold">
                Recent Event
              </h2>
              <div className="w-24 h-0.5 bg-blogTitle mx-auto lg:mx-0"></div>
            </div>

            <div className="flex items-center flex-col md:flex-row lg:flex-col gap-10">
              {blogBoxes.map(({ title, img }) => (
                <BlogBox title={title} img={img} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex gap-4 justify-center my-28">
        <Pagination pageCount={4} selectedPage={1} />
      </div>
    </div>
  );
};

export default Blog;
