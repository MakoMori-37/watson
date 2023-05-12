import React, { useState } from "react";
import Vaseline from "../vaseline/Vaseline";
import Citra from "../citra/Citra";
const HOST = process.env.HOST;

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="p-24 h-screen " onClick={onNext}>
      <img
        src={`${HOST}/image/body/brightening/title.webp`}
        alt="title"
        className="w-[70%] mb-8 "
      />
      <img
        src={`${HOST}/image/body/brightening/content.webp`}
        alt="content"
        className="w-full h-auto"
      />
    </div>
  );
};

const BrighteningSection = ({ onReset = () => {} }) => {
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const RenderStep = () => {
    switch (step) {
      case 1:
        return <RenderStep1 onNext={incrementStep} />;
      case 2:
        return <Vaseline onUpdateSection={incrementStep} />;
      case 3:
        return <Citra onReset={onReset} />;
      default:
        return <div></div>;
    }
  };

  return <div className="z-20 w-full h-screen">{RenderStep()}</div>;
};

export default BrighteningSection;
