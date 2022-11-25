import React from "react";

export const Header = () => {
  return (
    <header className="flex container mt-[15px] absolute left-[50%] translate-x-[-50%] z-50 top-0">
      <h1 className="logo flex-1 font-bold">Web.Dev</h1>
      <nav className="flex-[2] flex justify-end">
        <div className="  w-fit">
          <a href="" className="inline-block ml-8">
            Home
          </a>
          <a href="" className="inline-block ml-8">
            About
          </a>
          <a href="" className="inline-block ml-8">
            Testimonials
          </a>
          <a href="" className="inline-block ml-8">
            Contact
          </a>
          <a href="" className="inline-block ml-8">
            Sign in
          </a>
          <a href="" className="inline-block ml-8 btn-primary">
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
};
