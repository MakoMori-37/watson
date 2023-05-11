import React, { useState } from "react";
import FaceShop from "./FaceShop";
import FaceSelection from "./FaceSelection";
const HOST = process.env.HOST;

const ManagementFace = () => {
  const [section, setSection] = useState(0); //1-5

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
        <FaceShop onUpdate={handleChangeSection} />
      ) : (
        <FaceSelection section={section} onReset={handleResetSection} />
      )}
    </div>
  );
};

export default ManagementFace;
