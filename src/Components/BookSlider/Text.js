import React from "react";
import "./BookSliderComponent.css";
import imga from "./Images/fitness-girl.jpg";
const Text = () => {
  return (
    <>
      <div className="text">
        The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum",
      </div>
      <img src={imga} alt="somthing" className="pic" />
    </>
  );
};

export default Text;
