import React from "react";
import { useSelector } from "react-redux";

const Number = () => {
  const num = useSelector((state) => state.number);

  return <div className="main"> 
    <div className="divMain">
    {num}
    </div>
    </div>;
};

export default Number;
