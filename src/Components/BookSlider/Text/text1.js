import React from "react";
import "../BookSliderComponent.css";

import family from "../Images/family.jpg";

const text1 = () => {
  return (
    <>
      <h2 >Money Basics</h2>
      <div className="text">
        We use money to buy what we need or want. Some of those include housing,
        food, clothes, fun, and many other things.
        <br />
        <div className="paragraph">
          When living in a house or apartment, we have to pay the bank or owner
          money.
        </div>
      </div>
      <img src={family} alt="somthing" className="pic" />
    </>
  );
};

export default text1;
