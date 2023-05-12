import React from "react";

import MoistureSection from "./MoistureSection";

const Moisture = ({ onReset = () => {} }) => {
  return (
    <div>
      <MoistureSection onReset={onReset} />
    </div>
  );
};

export default Moisture;
