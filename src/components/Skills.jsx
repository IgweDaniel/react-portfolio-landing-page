import React from "react";
import webflowIcon from "../assets/svg/webflow.svg";
import shopifyIcon from "../assets/svg/shopify.svg";
import figmaIcon from "../assets/svg/figma.svg";
import phpIcon from "../assets/svg/php.svg";
const skillList = [
  {
    name: "Webflow Development",
    icon: webflowIcon,
    desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    name: "Shopify Development",
    icon: shopifyIcon,
    desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    name: "Figma Web Designing",
    icon: figmaIcon,
    desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    name: "Php Development",
    icon: phpIcon,
    desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
];
export const Skills = () => {
  return (
    <div className="w-[60%] mx-auto mt-40 ">
      <h4 className="font-normal text-center text-lg">What we do?</h4>
      <h3 className="text-[45px] text-center">Our Specialization</h3>
      <div className="grid grid-cols-2 gap-7 my-16">
        {skillList.map((skill) => (
          <div className="card group" key={skill.name}>
            <h4 className="flex items-center font-semibold">
              <span className="">
                <img src={skill.icon} alt="" className="h-5" />
              </span>
              <span className="ml-3">{skill.name}</span>
            </h4>
            <p className="my-8">{skill.desc}</p>
            <a href="#" className="underline group-hover:text-[#49AD09]">
              Read More
            </a>
          </div>
        ))}
      </div>
      <a href="" className="btn-primary mx-auto w-fit block">
        Learn More
      </a>
    </div>
  );
};
