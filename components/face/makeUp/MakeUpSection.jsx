import React, { useState } from "react";
import FaceNpd from "../FaceNpd";
const HOST = process.env.HOST;

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="p-14 h-screen " onClick={onNext}>
      <img
        src={`${HOST}/image/face/section/4/title.png`}
        alt="title"
        className="w-[40%] h-auto mb-10 "
      />
      <img
        src={`${HOST}/image/face/section/4/content.png`}
        alt="content"
        className="w-full h-auto"
      />
    </div>
  );
};

const MakeUpSection = ({ onBack = () => {} }) => {
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    if (step === 1) {
      onBack();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="z-20 w-full h-screen">
      {step === 1 ? (
        <RenderStep1 onNext={incrementStep} />
      ) : (
        <FaceNpd onBack={onBack} />
      )}

      {step !== 3 ? (
        <img
          alt="btn_back"
          onClick={previousStep}
          src={`${HOST}/image/btn_back.webp`}
          className="w-20 absolute bottom-6 right-6 "
        />
      ) : null}
    </div>
  );
};

export default MakeUpSection;
