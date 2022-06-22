import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Random from "./Random";
import Reset from "./Reset";

const Buttons = () => {
  return (
    <>
    <div className="button">
      <Increment />
      <Reset/>
      <Decrement/>
      <Random/>
    </div>
    </>
  );
};

export default Buttons;
