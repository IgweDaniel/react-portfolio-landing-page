import React from "react";
import fashionImg from "../assets/images/fashion.png";
import funitureImg from "../assets/images/funiture.png";
import healthImg from "../assets/images/health.png";
import ITImg from "../assets/images/ITsolutions.png";

const works = [
  {
    coverImg: fashionImg,
    title: "Fashion Landing Page",
  },
  {
    coverImg: funitureImg,
    title: "Health & Fitness",
  },
  {
    coverImg: healthImg,
    title: "Funiture Shop",
  },
  {
    coverImg: ITImg,
    title: "IT Solution Provider",
  },
];
export const Portfolio = () => {
  return (
    <div className="w-[70%] mx-auto mt-40 ">
      <h4 className="font-normal text-center text-lg">Our Work</h4>
      <h3 className="text-[45px] text-center">Our Portfolio</h3>
      <div className="grid grid-cols-2 gap-10 my-16">
        {works.map((work) => (
          <div className="even:relative top-10" key={work.title}>
            <img src={work.coverImg} alt={work.title} />
            <div className="flex justify-between mt-3">
              <h3 className="text-lg font-semibold">{work.title}</h3>
              <a href="" className="text-[#49AD09]">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="" className="btn-primary mx-auto w-fit block mt-24">
        All Projects
      </a>
    </div>
  );
};
