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
    <div className="px-16 flex items-center h-screen" onClick={onNext}>
      {/* <img
        src={`${HOST}/image/body/citra/content_1.webp`}
        alt="title"
        className="w-full h-auto"
      /> */}
      รอรูป
    </div>
  );
};
const RenderCitra2 = ({ onNext = () => {} }) => {
  return (
    <div className="p-28 h-screen" onClick={onNext}>
      {/* <img
        src={`${HOST}/image/body/citra/content_2.webp`}
        alt="title"
        className="w-full h-auto"
      /> */}
      รอรูป
    </div>
  );
};
const RenderCitra3 = ({ onNext = () => {} }) => {
  return (
    <div
      className="flex items-center p-20 pt-36 h-screen w-full"
      onClick={onNext}
    >
      {/* <img
        src={`${HOST}/image/body/citra/content_3.webp`}
        alt="title"
        className="w-full h-auto"
      /> */}
      รอรูป
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

const Citra = ({ onReset = () => {}, isSection3 = false }) => {
  const [step, setStep] = useState(0);

  const incrementStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    const lastStep = isSection3 ? 1 : 4;
    if (step === lastStep) {
      const timeout = setTimeout(() => {
        onReset();
      }, 6000);

      return () => {
        clearTimeout(timeout);
      };
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
        return <RenderCitra4 />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="h-screen w-full ">
      {isSection3 ? renderSection3() : renderSection2()}
    </div>
  );
};

export default Citra;
