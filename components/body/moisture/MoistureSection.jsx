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
  const [reverseMode, setReverseMode] = useState(false);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    if (step === 2) {
      setReverseMode(false);
      setStep(1);
    } else {
      setReverseMode(true);
      setStep(2);
    }
  };

  const RenderStep = () => {
    switch (step) {
      case 1:
        return <RenderStep1 onNext={incrementStep} />;
      case 2:
        return (
          <Vaseline
            isSection3={true}
            onBack={previousStep}
            reverseMode={reverseMode}
            onUpdateSection={incrementStep}
          />
        );
      case 3:
        return (
          <Citra onBack={previousStep} onReset={onReset} isSection3={true} />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="z-20 w-full h-screen">
      {RenderStep()}

      {step == 1 ? (
        <img
          alt="btn_back"
          onClick={onReset}
          src={`${HOST}/image/btn_back.webp`}
          className="w-20 absolute bottom-6 right-6 "
        />
      ) : null}
    </div>
  );
};

export default MoistureSection;
