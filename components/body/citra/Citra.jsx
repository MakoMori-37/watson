import React, { useEffect, useState } from "react";
const HOST = process.env.HOST;

const RenderCitra0 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full flex items-center justify-center h-screen"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/citra/title.webp`}
        alt="title"
        className="w-[70%] h-auto"
      />
    </div>
  );
};
const RenderCitra1 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/citra/content_1.webp`}
        alt="title"
        className="w-full"
      />
    </div>
  );
};
const RenderCitra2 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/citra/content_2.webp`}
        alt="title"
        className="w-full"
      />
    </div>
  );
};
const RenderCitra3 = ({ onNext = () => {} }) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      onClick={onNext}
    >
      <img
        src={`${HOST}/image/body/citra/content_3.webp`}
        alt="title"
        className="w-full"
      />
    </div>
  );
};
const RenderCitra4 = () => {
  return (
    <div className="p-28 h-screen w-full">
      <img
        src={`${HOST}/image/body/citra/content_4.webp`}
        alt="content_4"
        className="w-full h-auto "
      />
    </div>
  );
};
const RenderPresenter1 = ({ onNext = () => {} }) => {
  return (
    <div className="p-20 w-full" onClick={onNext}>
      <img
        src={`${HOST}/image/body/citra/presenter_1.webp`}
        alt="presenter_1"
        className="w-full h-auto "
      />
    </div>
  );
};
const RenderPresenter2 = ({ onNext = () => {} }) => {
  return (
    <div className="p-20 h-screen w-full" onClick={onNext}>
      <img
        src={`${HOST}/image/body/citra/presenter_2.webp`}
        alt="presenter_2"
        className="w-full h-auto "
      />
    </div>
  );
};

const Citra = ({
  onBack = () => {},
  isSection3 = false,
  setHideLogo = () => {},
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

  useEffect(() => {
    if (!isSection3) {
      if (step === 1 || step === 2 || step === 3) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }
    }
  }, [step, isSection3]);

  const renderSection2 = () => {
    switch (step) {
      case 0:
        return <RenderCitra0 onNext={incrementStep} />;
      case 1:
        return <RenderCitra1 onNext={incrementStep} />;
      case 2:
        return <RenderCitra2 onNext={incrementStep} />;
      case 3:
        return <RenderCitra3 onNext={incrementStep} />;
      case 4:
        return <RenderPresenter1 onNext={incrementStep} />;
      case 5:
        return <RenderPresenter2 onNext={incrementStep} />;
      case 6:
        return <RenderCitra4 />;
      default:
        return <div></div>;
    }
  };
  const renderSection3 = () => {
    switch (step) {
      case 0:
        return <RenderCitra0 onNext={incrementStep} />;
      case 1:
        return <RenderPresenter1 onNext={incrementStep} />;
      case 2:
        return <RenderPresenter2 onNext={incrementStep} />;
      case 3:
        return <RenderCitra4 />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="h-screen w-full ">
      {isSection3 ? renderSection3() : renderSection2()}

      <img
        alt="content"
        onClick={previousStep}
        src={`${HOST}/image/btn_back.webp`}
        className="w-20 absolute bottom-6 right-6 "
      />
    </div>
  );
};

export default Citra;
