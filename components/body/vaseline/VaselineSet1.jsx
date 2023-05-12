import React, { useEffect, useState } from "react";
const HOST = process.env.HOST;

const RenderStep0 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full flex items-center justify-center h-screen"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/vaseline/title.webp`}
        alt="title"
        className="w-[70%] h-auto"
      />
    </div>
  );
};
const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="px-16 flex items-center h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/body/vaseline/vaseline_1.webp`}
        alt="title"
        className="w-full h-auto"
      />
    </div>
  );
};
const RenderStep2 = ({ onNext = () => {} }) => {
  return (
    <div className="p-28 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/body/vaseline/vaseline_2.webp`}
        alt="title"
        className="w-full h-auto"
      />
    </div>
  );
};
const RenderStep3 = ({ onNext = () => {} }) => {
  return (
    <div className="flex items-center p-20 pt-36 h-screen w-full" onClick={onNext}>
      <img
        src={`${HOST}/image/body/vaseline/vaseline_3.webp`}
        alt="title"
        className="w-full h-auto"
      />
    </div>
  );
};
const RenderStep4 = ({ onNext = () => {} }) => {
  return (
    <div className="p-28 h-screen w-full" onClick={onNext}>
      <img
        src={`${HOST}/image/body/vaseline/vaseline_4.webp`}
        alt="title"
        className="w-full h-auto "
      />
    </div>
  );
};
const RenderStep5 = ({ onNext = () => {} }) => {
  return (
    <div className="p-28 pt-36 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/body/vaseline/vaseline_5.webp`}
        alt="title"
        className="w-full h-auto"
      />
    </div>
  );
};

const VaselineSet1 = ({ onUpdateSection = () => {} }) => {
  const [step, setStep] = useState(0);

  const incrementStep = () => {
    setStep(step + 1);
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
        return <RenderStep5 onNext={onUpdateSection} />;
      default:
        return <div></div>;
    }
  };

  return <div className="h-screen w-full ">{renderPage()}</div>;
};

export default VaselineSet1;
