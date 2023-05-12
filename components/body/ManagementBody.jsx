import React, { useState } from "react";
import BodyShop from "./BodyShop";
import SunProtect from "./sunProtect/SunProtect";
import Brightening from "./brightening/Brightening";
import Moisture from "./moisture/Moisture";
import SmoothSkin from "./smoothSkin";
const HOST = process.env.HOST;

const RenderSelectd = (section, onReset, setHideLogo) => {
  switch (section) {
    case 1:
      return <SunProtect onReset={onReset} setHideLogo={setHideLogo} />;
    case 2:
      return <Brightening onReset={onReset} setHideLogo={setHideLogo} />;
    case 3:
      return <Moisture onReset={onReset} />;
    case 4:
      return <SmoothSkin onReset={onReset} />;
    default:
      return <div></div>;
  }
};

const ManagementBody = () => {
  const [section, setSection] = useState(0); //1-4
  const [hideLogo, setHideLogo] = useState(false)
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
        className={`w-auto h-auto absolute object-contain top-5 right-2 ${
          hideLogo && " hidden"
        } `}
        onClick={handleResetSection}
      />
      {section === 0 ? (
        <BodyShop onUpdate={handleChangeSection} />
      ) : (
        RenderSelectd(section, handleResetSection, setHideLogo)
      )}
    </div>
  );
};

export default ManagementBody;
