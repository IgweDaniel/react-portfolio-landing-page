import React from "react";
import { ReactComponent as CheckIcon } from "../assets/svg/check.svg";

const ICON_SIZE = 16;
const prices = [
  {
    title: "for starters",
    amount: "$1499",
    features: [
      "Feedback Categorization",
      "Features prioritization",
      "Real-time collaboration",
      "Feedback loop notifications",
      "Essential dev tools integrations",
    ],
  },
  {
    title: "for Teams",
    amount: "$2999",
    features: [
      "Feedback Categorization",
      "Features prioritization",
      "Real-time collaboration",
      "Feedback loop notifications",
      "Essential dev tools integrations",
    ],
  },
  {
    title: "for company",
    amount: "custom",
    features: [
      "Feedback Categorization",
      "Feedback loop notifications",
      "Essential dev tools integrations",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="container mx-auto mt-40 ">
      <h4 className="font-normal text-center text-lg">Pricing</h4>
      <h3 className="text-[45px] text-center">Pricing Policy</h3>
      <div className=" flex justify-between mt-14">
        {prices.map((price, i) => (
          <div
            className={`group card  ${
              i % 2 != 0 ? "float shadow-2xl" : "!shadow-none"
            } flex flex-col items-center w-[30%] !p-8`}
            // className="group card flex flex-col items-center w-[30%] !p-8"
            key={price.title}
          >
            <h3 className="capitalize text-xl text-center">{price.title}</h3>
            <h4 className="font-semibold text-3xl capitalize my-3 text-center">
              {price.amount}
            </h4>
            <div className="my-8 h-[120px] flex items-center">
              <ul className="">
                {price.features.map((feature) => (
                  <li className="flex items-center my-1" key={feature}>
                    <span className="mr-2 block">
                      <CheckIcon height={ICON_SIZE} width={ICON_SIZE} />
                    </span>
                    <span className="">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href=""
              className="py-3 px-9 rounded-[2.5px]  inline-block border-[#514040] border-solid border text-[#514040] group-[.float]:text-white group-[.float]:bg-[#49AD09] group-[.float]:border-none group-[.float]:shadow-2xl"
            >
              Request demo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
