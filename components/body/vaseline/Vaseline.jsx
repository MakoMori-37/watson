import React, { useEffect, useState } from "react";
const HOST = process.env.HOST;

const RenderVaseline0 = ({ onNext = () => {} }) => {
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
const RenderVaseline1 = ({ onNext = () => {} }) => {
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
const RenderVaseline2 = ({ onNext = () => {} }) => {
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
const RenderVaseline3 = ({ onNext = () => {} }) => {
  return (
    <div
      className="flex items-center p-20 pt-36 h-screen w-full"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/vaseline/vaseline_3.webp`}
        alt="title"
        className="w-full h-auto"
      />
    </div>
  );
};
const RenderVaseline4 = ({ onNext = () => {} }) => {
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
const RenderVaseline5 = ({ onNext = () => {} }) => {
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
const RenderVaseline6 = ({ onNext = () => {} }) => {
  return (
    <div className="p-28 pt-36 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/body/vaseline/vaseline_6.webp`}
        alt="title"
        className="w-full h-auto"
      />
    </div>
  );
};
const RenderVaseline7 = ({ onNext = () => {} }) => {
  return (
    <div className="p-28 pt-36 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/body/vaseline/vaseline_7.webp`}
        alt="title"
        className="w-full h-auto"
      />
    </div>
  );
};

const Vaseline = ({
  onBack = () => {},
  isSection3 = false,
  reverseMode = false,
  onUpdateSection = () => {},
}) => {
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

  const renderSection2 = () => {
    switch (step) {
      case 0:
        return <RenderVaseline0 onNext={incrementStep} />;
      case 1:
        return <RenderVaseline1 onNext={incrementStep} />;
      case 2:
        return <RenderVaseline2 onNext={incrementStep} />;
      case 3:
        return <RenderVaseline3 onNext={incrementStep} />;
      case 4:
        return <RenderVaseline4 onNext={incrementStep} />;
      case 5:
        return <RenderVaseline5 onNext={onUpdateSection} />;
      default:
        return <div></div>;
    }
  };

  const renderSection3 = () => {
    switch (step) {
      case 0:
        return <RenderVaseline0 onNext={incrementStep} />;
      case 1:
        return <RenderVaseline6 onNext={incrementStep} />;
      case 2:
        return <RenderVaseline1 onNext={incrementStep} />;
      case 3:
        return <RenderVaseline3 onNext={incrementStep} />;
      case 4:
        return <RenderVaseline4 onNext={incrementStep} />;
      case 5:
        return <RenderVaseline5 onNext={incrementStep} />;
      case 6:
        return <RenderVaseline7 onNext={onUpdateSection} />;
      default:
        return <div></div>;
    }
  };

  useEffect(() => {
    if (reverseMode) {
      isSection3 ? setStep(6) : setStep(5);
    }
  }, []);

  return (
    <div className="h-screen w-full ">
      {isSection3 ? renderSection3() : renderSection2()}

      <img
        alt="btn_back"
        onClick={previousStep}
        src={`${HOST}/image/btn_back.webp`}
        className="w-20 absolute bottom-6 right-6 "
      />
    </div>
  );
};

export default Vaseline;
