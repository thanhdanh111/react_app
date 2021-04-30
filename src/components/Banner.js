import React from "react";
import Bounce from 'react-reveal/Bounce';
const Banner = ({ children, title, subtitle }) => {
  return (
    <Bounce>
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
    </Bounce>
  );
};

export default Banner;