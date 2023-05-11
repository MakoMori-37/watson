import React, { useState } from "react";

import Foam from "./Foam/Foam";
import Serum from "./Serum";
import Cream from "./Cream";
import MakeUp from "./MakeUp";

const RenderSelectd = (mode, section, onReset) => {
  switch (mode) {
    case 1:
      return <Foam onReset={onReset} />;
    case 2:
      return <Serum section={section} onReset={onReset} />;
    case 3:
      return <Cream section={section} />;
    case 4:
      return <MakeUp section={section} />;
    default:
      return <div></div>;
  }
};

const RenderSelectionTools = ({ onUpdate = () => {}, title = "" }) => {
  return (
    <>
      <div className="flex items-center justify-evenly w-full ">
        <div className="box__selection" onClick={() => onUpdate(1)}>
          โฟม
        </div>
        <div className="box__selection" onClick={() => onUpdate(2)}>
          เซรั่ม
        </div>
      </div>
      <div className="m-[-75px] z-50  w-48 h-48 bg-red-500 justify-center items-center flex rounded-full text-lg font-bold ">
        Set {title}
      </div>
      <div className="flex items-center justify-evenly w-full z-0">
        <div className="box__selection" onClick={() => onUpdate(3)}>
          ครีมบำรุง
        </div>
        <div className="box__selection" onClick={() => onUpdate(4)}>
          เมคอัพ
        </div>
      </div>
    </>
  );
};

const FaceSelection = ({ section = 0, onReset = () => {} }) => {
  const [mode, setMode] = useState(0);

  const handleChangeMode = (data) => {
    setMode(data);
  };

  const handleResetMode = () => {
    setMode(0);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {mode === 0 ? (
        <RenderSelectionTools onUpdate={handleChangeMode} />
      ) : (
        RenderSelectd(mode, section, onReset)
      )}
    </div>
  );
};

export default FaceSelection;
