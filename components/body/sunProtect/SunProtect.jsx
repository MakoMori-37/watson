import React from "react";

import SunProtectSection from "./SunProtectSection";

const SunProtect = ({ onReset = () => {} }) => {
  return (
    <div>
      <SunProtectSection onReset={onReset} />
    </div>
  );
};

export default SunProtect;
