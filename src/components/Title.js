import React from "react";
import Fade from 'react-reveal/Fade';
const Title = ({ title }) => {
  return (
    <div className="section-title">
      <Fade top delay={1000}>
      <h4>{title}</h4>
      </Fade>
      <div />
    </div>
  );
};

export default Title;