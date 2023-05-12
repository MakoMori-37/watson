import React from "react";

import BrighteningSection from "./BrighteningSection";

const Brightening = ({ onReset = () => {} }) => {
  return (
    <div>
      <BrighteningSection onReset={onReset} />
    </div>
  );
};

export default Brightening;
