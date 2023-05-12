import React, { useState } from "react";
import BodyShop from "./BodyShop";
import SunProtect from "./sunProtect/SunProtect";
const HOST = process.env.HOST;

const RenderSelectd = (section, onReset) => {
  switch (section) {
    case 1:
      return <SunProtect onReset={onReset} />;
    // case 2:
    //   return <Serum section={section} onReset={onReset} />;
    // case 3:
    //   return <Cream onReset={onReset} />;
    // case 4:
    //   return <MakeUp section={section} onReset={onReset} />;
    default:
      return <div></div>;
  }
};

const ManagementBody = () => {
  const [section, setSection] = useState(0); //1-4
  console.log(section);
  const handleChangeSection = (data) => {
    setSection(data);
  };

  const handleResetSection = () => {
    setSection(0);
  };

  return (
    <div className="bg__default w-full h-screen relative z-50 ">
      <img
        src={`${HOST}/image/logo.webp`}
        alt="logo"
        className="w-auto h-auto absolute object-contain top-5 right-2 "
        onClick={handleResetSection}
      />
      {section === 0 ? (
        <BodyShop onUpdate={handleChangeSection} />
      ) : (
        RenderSelectd(section, handleResetSection)
      )}
    </div>
  );
};

export default ManagementBody;
