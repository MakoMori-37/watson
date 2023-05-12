import React from "react";

import MakeUpSection from "./MakeUpSection";

const MakeUp = ({ onReset = () => {} }) => {
  return (
    <div>
      <MakeUpSection onReset={onReset} />
    </div>
  );
};

export default MakeUp;
