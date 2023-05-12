import React from "react";

import BrighteningSection from "./BrighteningSection";

const Brightening = ({ onReset = () => {}, setHideLogo = () => {} }) => {
  return (
    <div>
      <BrighteningSection onReset={onReset} setHideLogo={setHideLogo} />
    </div>
  );
};

export default Brightening;
