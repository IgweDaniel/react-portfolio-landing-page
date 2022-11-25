import React from "react";

import asanalogo from "../assets/svg/asana.svg";
import buzzFeedlogo from "../assets/svg/buzzfeed.svg";
import chaselogo from "../assets/svg/chase.svg";
import googlelogo from "../assets/svg/google.svg";
import walmartlogo from "../assets/svg/walmart.svg";

const logos = [chaselogo, asanalogo, googlelogo, buzzFeedlogo, , , walmartlogo];
export const Affiliates = () => {
  return (
    <div className="container flex justify-between mt-12">
      {logos.map((logo) => (
        <div className="" key={logo}>
          <img src={logo} alt="" className="h-[30px]" />
        </div>
      ))}
    </div>
  );
};
