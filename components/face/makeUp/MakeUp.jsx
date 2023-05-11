import React from "react";

import FoamSection from "./MakeUpSection";

const MakeUp = ({ onReset = () => {} }) => {
  return (
    <div>
      <FoamSection onReset={onReset} />
    </div>
  );
};

export default MakeUp;
