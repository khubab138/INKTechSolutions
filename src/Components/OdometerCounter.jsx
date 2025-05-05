import React from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import RevealOnScroll from "./RevealOnScroll";

const OdometerCounter = ({ value }) => {
  return ( <RevealOnScroll>
    <div className="odometer-container">
      <Odometer value={value} format="d" />
    </div>
    </RevealOnScroll>
  );
};

export default OdometerCounter;
