import React, { useState } from "react";
import Vaseline from "../vaseline/Vaseline";
import Citra from "../citra/Citra";
const HOST = process.env.HOST;

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div
      className="p-16 pt-24 flex flex-col items-center h-screen "
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/moisture/title.webp`}
        alt="title"
        className="w-[70%] mb-8"
      />
      <img
        src={`${HOST}/image/body/moisture/content.webp`}
        alt="content"
        className="w-[90%] h-auto"
      />
    </div>
  );
};

const MoistureSection = ({ onReset = () => {} }) => {
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const RenderStep = () => {
    switch (step) {
      case 1:
        return <RenderStep1 onNext={incrementStep} />;
      case 2:
        return <Vaseline onUpdateSection={incrementStep} isSection3={true} />;
      case 3:
        return <Citra onReset={onReset} />;
      default:
        return <div></div>;
    }
  };

  return <div className="z-20 w-full h-screen">{RenderStep()}</div>;
};

export default MoistureSection;
