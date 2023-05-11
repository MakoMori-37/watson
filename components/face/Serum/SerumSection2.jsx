import React, { useState } from "react";
import FaceNpd from "../FaceNpd";
const HOST = process.env.HOST;

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-28 h-screen " onClick={onNext}>
      <img
        src={`${HOST}/image/face/section/2/1/title.png`}
        alt="title"
        className="w-[70%] mb-20 "
      />
      <img
        src={`${HOST}/image/face/section/2/1/content.png`}
        alt="content"
        className="w-full h-auto"
      />
    </div>
  );
};

const RenderStep2 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-20 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/face/section/2/2/title.png`}
        alt="title"
        className="w-[50%] mb-20 "
      />
      <img
        src={`${HOST}/image/face/section/2/2/content.png`}
        alt="content"
        className="w-full h-auto"
      />
    </div>
  );
};

const SerumSection2 = ({ onReset = () => {} }) => {
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="z-20 w-full h-screen">
      {step === 1 ? (
        <RenderStep1 onNext={incrementStep} />
      ) : step === 2 ? (
        <RenderStep2 onNext={incrementStep} />
      ) : (
        <FaceNpd onReset={onReset} />
      )}
    </div>
  );
};

export default SerumSection2;
