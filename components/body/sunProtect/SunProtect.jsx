import React from "react";

import SunProtectSection from "./SunProtectSection";

const SunProtect = ({ onReset = () => {}, setHideLogo = () => {} }) => {
  return (
    <div>
      <SunProtectSection onReset={onReset} setHideLogo={setHideLogo} />
    </div>
  );
};

export default SunProtect;
