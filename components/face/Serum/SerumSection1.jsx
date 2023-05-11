import React, { useState } from "react";
import FaceNpd from "../FaceNpd";

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-28 h-screen " onClick={onNext}>
      <img
        src="/image/face/section/2/1/title.png"
        alt="title"
        className="w-[70%] mb-20 "
      />
      <img
        src="/image/face/section/2/1/content.png"
        alt="content"
        className="w-full h-auto"
      />
    </div>
  );
};

const SerumSection1 = ({ onReset = () => {} }) => {
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="z-20 w-full h-screen">
      {step === 1 ? (
        <RenderStep1 onNext={incrementStep} />
      ) : (
        <FaceNpd onReset={onReset} />
      )}
    </div>
  );
};

export default SerumSection1;
