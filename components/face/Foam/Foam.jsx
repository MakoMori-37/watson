import React from "react";

import FoamSection1 from "./FoamSection1";
import FoamSection2 from "./FoamSection2";
import FoamSection3 from "./FoamSection3";
import FoamSection4 from "./FoamSection4";
import FoamSection5 from "./FoamSection5";

const Foam = ({ section = 0 }) => {
  const renderPage = () => {
    switch (section) {
      case 1:
        return <FoamSection1 />;
      case 2:
        return <FoamSection2 />;
      case 3:
        return <FoamSection3 />;
      case 4:
        return <FoamSection4 />;
      case 5:
        return <FoamSection5 />;
      default:
        return <div></div>;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Foam;
