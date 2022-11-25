import React from "react";
import { Ratings } from "./Ratings";
import { ReactComponent as leftIcon } from "../assets/svg/left.svg";
import { ReactComponent as RightIcon } from "../assets/svg/right.svg";
export const Testimonials = () => {
  return (
    <div className="container mx-auto mt-40 ">
      <h4 className="font-normal text-center text-lg">Testimonials</h4>
      <h3 className="text-[45px] text-center">What Customers Say</h3>
      <div className="h-[400px] mt-14 items-center flex relative after:bg-[#F2F2F2] after:h-full after:absolute after:w-4/5 after:-z-[1] after:left-1/2 after:-translate-x-2/4 ">
        <div className="testimonials flex justify-between ">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card w-[32%] shadow-2xl bg-white">
              <p className="font-semibold">Superb work!</p>
              <p className="my-5">
                “Blessing welcomed ladyship she met humoured sir breeding her.
                Six curiosity day assurance bed necessary.”
              </p>
              <span>
                <Ratings value={4} />
              </span>
              <p className="my-5 font-semibold">sabo masties</p>
            </div>
          ))}
        </div>
        <span>
          <span></span>
        </span>
      </div>
    </div>
  );
};
