import React from "react";

const BlogBox = ({ img, title }) => {
  return (
    <div className="flex-1 max-w-xs shadow-shadow">
      <img src={img} alt="living room" className="w-full" />
      <h2 className="text-blogTitle text-lg leading-[1.4] lg:text-xl font-bold p-5">
        {title}
      </h2>
    </div>
  );
};

export default BlogBox;
