import React from "react";

import SerumSection1 from "./SerumSection1";
import SerumSection2 from "./SerumSection2";
import SerumSection3 from "./SerumSection3";
import SerumSection4 from "./SerumSection4";
import SerumSection5 from "./SerumSection5";

const Serum = ({ section = 0, onReset = () => {} }) => {
  const renderPage = () => {
    switch (section) {
      case 1:
        return <SerumSection1 onReset={onReset} />;
      case 2:
        return <SerumSection2 onReset={onReset} />;
      case 3:
        return <SerumSection3 onReset={onReset} />;
      case 4:
        return <SerumSection4 />;
      case 5:
        return <SerumSection5 />;
      default:
        return <div></div>;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Serum;
