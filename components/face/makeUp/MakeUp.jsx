import React from "react";

import MakeUpSection from "./MakeUpSection";

const MakeUp = ({ onBack = () => {} }) => {
  return (
    <div>
      <MakeUpSection onBack={onBack} />
    </div>
  );
};

export default MakeUp;
