import React from "react";

import FoamSection from "./FoamSection";

const Foam = ({ onReset = () => {} }) => {
  return (
    <div>
      <FoamSection onReset={onReset} />
    </div>
  );
};

export default Foam;
