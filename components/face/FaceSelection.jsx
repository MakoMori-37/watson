import React, { useState } from "react";

import Foam from "./foam/Foam";
import Serum from "./serum/Serum";
import Cream from "./cream/Cream";
import MakeUp from "./makeUp/MakeUp";

const HOST = process.env.HOST;

const RenderSelectd = (mode, section, onReset) => {
  switch (mode) {
    case 1:
      return <Foam onReset={onReset} />;
    case 2:
      return <Serum section={section} onReset={onReset} />;
    case 3:
      return <Cream onReset={onReset} />;
    case 4:
      return <MakeUp section={section} onReset={onReset} />;
    default:
      return <div></div>;
  }
};

const RenderSelectionTools = ({ onUpdate = () => {}, section = 0 }) => {
  const imageCream =
    section !== 1
      ? `${HOST}/image/face/section/cream_disabled.webp`
      : `${HOST}/image/face/section/cream.webp`;

  let imageExplain;

  switch (section) {
    case 1:
      imageExplain = `${HOST}/image/face/section/explain_1.webp`;
      break;
    case 2:
      imageExplain = `${HOST}/image/face/section/explain_2.webp`;
      break;
    case 3:
      imageExplain = `${HOST}/image/face/section/explain_3.webp`;
      break;
    case 4:
      imageExplain = `${HOST}/image/face/section/explain_4.webp`;
      break;
    case 5:
      imageExplain = `${HOST}/image/face/section/explain_5.webp`;
      break;

    default:
      break;
  }

  return (
    <>
      <div className="flex items-center justify-evenly w-full ">
        <div className="box__selection" onClick={() => onUpdate(1)}>
          <img
            src={`${HOST}/image/face/section/foam.webp`}
            alt="foam"
            className="w-full h-auto"
          />
        </div>
        <div className="box__selection" onClick={() => onUpdate(2)}>
          <img
            src={`${HOST}/image/face/section/serum.webp`}
            alt="serum"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="box__explain">
        <img src={imageExplain} alt="explain" className="w-full h-auto" />
      </div>
      <div className="flex items-center justify-evenly w-full z-0">
        <div
          className={`box__selection`}
          onClick={section !== 1 ? null : () => onUpdate(3)}
        >
          <img src={imageCream} alt="cream" className="w-full h-auto -z-10 " />
        </div>
        <div className="box__selection" onClick={() => onUpdate(4)}>
          <img
            src={`${HOST}/image/face/section/make_up.webp`}
            alt="make_up"
            className="w-full h-auto"
          />
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

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {mode === 0 ? (
        <RenderSelectionTools onUpdate={handleChangeMode} section={section} />
      ) : (
        RenderSelectd(mode, section, onReset)
      )}
    </div>
  );
};

export default FaceSelection;
