import React from "react";

import SerumSection1 from "./SerumSection1";
import SerumSection2 from "./SerumSection2";
import SerumSection3 from "./SerumSection3";
import SerumSection5 from "./SerumSection5";

const Serum = ({ section = 0, onBack = () => {} }) => {
  const renderPage = () => {
    switch (section) {
      case 1:
        return <SerumSection1 onBack={onBack} />;
      case 2:
        return <SerumSection2 onBack={onBack} />;
      case 3:
        return <SerumSection3 onBack={onBack} />;
      case 4:
        return <SerumSection3 onBack={onBack} />;
      case 5:
        return <SerumSection5 onBack={onBack} />;
      default:
        return <div></div>;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Serum;
