import React, { useEffect, useState } from "react";
const HOST = process.env.HOST;

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="px-14 pt-20 h-screen " onClick={onNext}>
      <img
        src={`${HOST}/image/body/sunProtect/title_1.webp`}
        alt="title"
        className="w-[70%] mb-20 "
      />
      <img
        src={`${HOST}/image/body/sunProtect/content_1.webp`}
        alt="content"
        className="w-full h-auto"
      />
    </div>
  );
};

const RenderStep2 = ({ onNext = () => {} }) => {
  return (
    <div className="px-14 pt-24 h-screen " onClick={onNext}>
      <img
        src={`${HOST}/image/body/sunProtect/content_2.webp`}
        alt="content"
        className="w-full h-auto"
      />
    </div>
  );
};

const RenderStep3 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center z-50"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/sunProtect/content_3.webp`}
        alt="content"
        className="w-full"
      />
    </div>
  );
};

const RenderStep4 = ({ onNext = () => {} }) => {
  return (
    <div className="w-full h-screen " onClick={onNext}>
      <img
        src={`${HOST}/image/body/sunProtect/content_4.webp`}
        alt="content"
        className="w-[95%] h-full"
      />
    </div>
  );
};

const RenderStep5 = () => {
  return (
    <div className="px-14 pt-24 h-screen bg__twotone ">
      <img
        src={`${HOST}/image/body/sunProtect/title_5.webp`}
        alt="content"
        className="w-full h-auto"
      />
      <div className="flex">
        <div className="flex-[0.5]">
          <img
            src={`${HOST}/image/body/sunProtect/content_5-1.webp`}
            alt="content"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-[0.5]">
          <img
            src={`${HOST}/image/body/sunProtect/content_5-2.webp`}
            alt="content"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

const SunProtectSection = ({ setHideLogo = () => {}, onReset = () => {} }) => {
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    if (step === 1) {
      onReset();
    } else {
      setStep(step - 1);
    }
  };

  const RenderStep = () => {
    switch (step) {
      case 1:
        return <RenderStep1 onNext={incrementStep} />;
      case 2:
        return <RenderStep2 onNext={incrementStep} />;
      case 3:
        return <RenderStep3 onNext={incrementStep} />;
      case 4:
        return <RenderStep4 onNext={incrementStep} />;
      case 5:
        return <RenderStep5 />;
      default:
        return <div></div>;
    }
  };

  useEffect(() => {
    if (step === 3) {
      setHideLogo(true);
    } else {
      setHideLogo(false);
    }
  }, [step]);

  return (
    <div className="z-20 w-full h-screen">
      {RenderStep()}
      <img
        alt="content"
        onClick={previousStep}
        src={`${HOST}/image/btn_back.webp`}
        className="w-20 absolute bottom-6 right-6 "
      />
    </div>
  );
};

export default SunProtectSection;
