import React, { useState } from "react";
const HOST = process.env.HOST;

const RenderStep0 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full flex items-center justify-center h-screen"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/face/npd/title.png`}
        alt="title"
        className="w-[70%] h-auto"
      />
    </div>
  );
};
const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-20 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/face/npd/npd_1.png`}
        alt="title"
        className="w-full h-auto mb-20 "
      />
    </div>
  );
};
const RenderStep2 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-20 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/face/npd/npd_2.png`}
        alt="title"
        className="w-full h-auto mb-20 "
      />
    </div>
  );
};
const RenderStep3 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-20 h-screen w-full bg__twotone " onClick={onNext}>
      <img
        src={`${HOST}/image/face/npd/npd_3.webp`}
        alt="title"
        className="w-full h-auto mb-20 "
      />
    </div>
  );
};
const RenderStep4 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-20 h-screen w-full bg__twotone" onClick={onNext}>
      <img
        src={`${HOST}/image/face/npd/npd_4.webp`}
        alt="title"
        className="w-full h-auto mb-20 "
      />
    </div>
  );
};
const RenderStep5 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full h-screen flex items-center  justify-center"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/face/npd/npd_5.webp`}
        alt="title"
        className="w-full h-auto "
      />
    </div>
  );
};
const RenderStep6 = () => {
  return (
    <div className="px-8 pt-20 h-screen">
      <img
        src={`${HOST}/image/face/npd/npd_6.png`}
        alt="title"
        className="w-full h-auto mb-20 "
      />
    </div>
  );
};

const FaceNpd = ({ onBack = {} }) => {
  const [step, setStep] = useState(0);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    if (step === 0) {
      onBack();
    } else {
      setStep(step - 1);
    }
  };

  const renderPage = () => {
    switch (step) {
      case 0:
        return <RenderStep0 onNext={incrementStep} />;
      case 1:
        return <RenderStep1 onNext={incrementStep} />;
      case 2:
        return <RenderStep2 onNext={incrementStep} />;
      case 3:
        return <RenderStep3 onNext={incrementStep} />;
      case 4:
        return <RenderStep4 onNext={incrementStep} />;
      case 5:
        return <RenderStep5 onNext={incrementStep} />;
      case 6:
        return <RenderStep6 />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="h-screen w-full ">
      {renderPage()}
      <img
        alt="btn_back"
        onClick={previousStep}
        src={`${HOST}/image/btn_back.webp`}
        className="w-20 absolute bottom-6 right-6 "
      />
    </div>
  );
};

export default FaceNpd;
