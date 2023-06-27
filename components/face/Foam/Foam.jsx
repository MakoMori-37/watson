import React from "react";

import FoamSection from "./FoamSection";

const Foam = ({ onBack = () => {} }) => {
  return (
    <div>
      <FoamSection onBack={onBack} />
    </div>
  );
};

export default Foam;
