import React from "react";

import { ReactComponent as Frame7Svg } from "../assets/images/frame7.svg";
import { ReactComponent as Frame8Svg } from "../assets/images/frame8.svg";
import { Header } from "./Header";
export const Hero = () => {
  return (
    <section className="h-[90vh] bg-[#F2F2F2] relative  overflow-hidden flex justify-center items-center">
      <Header />
      <Frame7Svg
        className="absolute top-[100px] left-[-180px]"
        width="50%"
        height="80%"
      />

      <Frame8Svg
        className="absolute top-[80px] right-[-250px] "
        width="50%"
        height="80%"
      />

      <div className="w-[35%] text-center">
        <h1 className="font-sans leading-[45px] text-[45px] font-bold text-center">
          We Develop <br />
          <span className="text-[#49AD09]">Shopify</span> sites
        </h1>
        <p className="mt-5 text-lg">
          Slingback fabric heels. Thin wraparound ankle strap. Squared heel and
          toe. Pointed toes. Padded insole with geometrical design.{" "}
        </p>

        <a href="" className="btn-primary m-5">
          Contact Us
        </a>
        <a href="" className="">
          watch video
        </a>
      </div>
    </section>
  );
};
