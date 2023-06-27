import React from "react";

import CreamSection from "./CreamSection";

const Cream = ({ onBack = () => {} }) => {
  return (
    <div>
      <CreamSection onBack={onBack} />
    </div>
  );
};

export default Cream;
