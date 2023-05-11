import React from "react";

import CreamSection from "./CreamSection";

const Cream = ({ onReset = () => {} }) => {
  return (
    <div>
      <CreamSection onReset={onReset} />
    </div>
  );
};

export default Cream;
