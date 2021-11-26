import React from "react";
import Typed from "react-typed";
const Header = () => {
  return (
    <div className="header-wraper">
      <div className="maininfo">
        <h1> web development and websites promotions</h1>
        <Typed
          className="text-typed"
          strings={[
            "Node Js Developer",
            "React Js Developer",
            "MERN Stack Web Developer",
          ]}
          typeSpeed={80}
          backSpeed={150}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
