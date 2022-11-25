import React from "react";
import {
  Hero,
  Affiliates,
  Skills,
  Portfolio,
  Testimonials,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Affiliates />
      <Skills />
      <Portfolio />
      <Testimonials />
      <div className="h-[500px]"></div>
    </React.Fragment>
  );
}

export default App;
