import React, { useState } from "react";

const FaceSelection = ({ title = "" }) => {
  const [mode, setMode] = useState(0);

  const handleChangeMode = (data) => {
    setMode(data);
  };

  const handleResetMode = () => {
    setMode(0);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-evenly w-full ">
        <div className="box__selection" onClick={() => handleChangeMode(1)}>
          โฟม
        </div>
        <div className="box__selection" onClick={() => handleChangeMode(2)}>
          เซรั่ม
        </div>
      </div>
      <div className="m-[-75px] z-50  w-48 h-48 bg-red-500 justify-center items-center flex rounded-full text-lg font-bold ">
        Set {title}
      </div>
      <div className="flex items-center justify-evenly w-full z-0">
        <div className="box__selection" onClick={() => handleChangeMode(3)}>
          ครีมบำรุง
        </div>
        <div className="box__selection" onClick={() => handleChangeMode(4)}>
          เมคอัพ
        </div>
      </div>
    </div>
  );
};

export default FaceSelection;
