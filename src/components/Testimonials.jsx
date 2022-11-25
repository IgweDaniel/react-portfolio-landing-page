import React from "react";
import { Ratings } from "./Ratings";
import { ReactComponent as LeftIcon } from "../assets/svg/left.svg";
import { ReactComponent as RightIcon } from "../assets/svg/right.svg";

const ICON_SIZE = 18;
export const Testimonials = () => {
  return (
    <div className="container mx-auto mt-40 ">
      <h4 className="font-normal text-center text-lg">Testimonials</h4>
      <h3 className="text-[45px] text-center">What Customers Say</h3>
      <div className="h-[500px] mt-14 items-center justify-center flex relative after:bg-[#F2F2F2] after:h-full after:absolute after:w-4/5 after:-z-[1] after:left-1/2 after:-translate-x-2/4 ">
        <div>
          <div className="testimonials flex justify-between items-center">
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
          <span className="relative top-14 flex  items-center   mx-auto w-[120px] bg-[#FFFFFF] rounded-full h-[60px]">
            <span className="flex items-center justify-center w-1/2 h-full ">
              <LeftIcon height={ICON_SIZE} width={ICON_SIZE} />
            </span>
            <span className="flex items-center justify-center bg-[#313131] w-[50px] h-[50px]  rounded-full ">
              <RightIcon height={ICON_SIZE} width={ICON_SIZE} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
