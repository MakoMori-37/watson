import React, { useEffect, useState } from "react";
const HOST = process.env.HOST;

const RenderStep1 = ({ onNext = () => {} }) => {
  return (
    <div className="px-8 pt-20 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/face/npd/npd_1.webp`}
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
        src={`${HOST}/image/face/npd/npd_2.webp`}
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
    <div className="px-8 pt-20 h-screen" onClick={onNext}>
      <img
        src={`${HOST}/image/face/npd/npd_5.webp`}
        alt="title"
        className="w-full h-auto mb-20 "
      />
    </div>
  );
};
const RenderStep6 = () => {
  return (
    <div className="px-8 pt-20 h-screen">
      <img
        src={`${HOST}/image/face/npd/npd_6.webp`}
        alt="title"
        className="w-full h-auto mb-20 "
      />
    </div>
  );
};

const FaceNpd = ({ onReset = {} }) => {
  const [step, setStep] = useState(1);

  const incrementStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    if (step === 6) {
      const timeout = setTimeout(() => {
        onReset();
      }, 6000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [step]);

  const renderPage = () => {
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
        return <RenderStep5 onNext={incrementStep} />;
      case 6:
        return <RenderStep6 />;
      default:
        return <div></div>;
    }
  };

  return <div className="h-screen w-full ">{renderPage()}</div>;
};

export default FaceNpd;
