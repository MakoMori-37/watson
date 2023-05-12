import React, { useEffect, useState } from "react";
const HOST = process.env.HOST;

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="p-24 h-screen " onClick={onNext}>
      <img
        src={`${HOST}/image/body/brightening/title.webp`}
        alt="title"
        className="w-[70%] mb-20 "
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
      // case 2:
      //   return <RenderStep2 onNext={incrementStep} />;
      // case 3:
      //   return <RenderStep3 onNext={incrementStep} />;
      default:
        return <div></div>;
    }
  };

  // useEffect(() => {
  //   if (step === 5) {
  //     const timeout = setTimeout(() => {
  //       onReset();
  //     }, 6000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [step]);

  return <div className="z-20 w-full h-screen">{RenderStep()}</div>;
};

export default BrighteningSection;
