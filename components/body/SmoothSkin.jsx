import React, { useEffect } from "react";

const SmoothSkin = ({ onReset = () => {} }) => {
  const HOST = process.env.HOST;

  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       onReset();
  //     }, 9000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }, []);
  return (
    <div className="z-20 w-full h-screen">
      <div className="p-16 pt-40 flex flex-col items-center justify-center h-screen ">
        <img
          src={`${HOST}/image/body/smooth_skin.webp`}
          alt="smooth_skin"
          className="w-full h-auto "
        />
      </div>

      <img
        alt="btn_back"
        onClick={onReset}
        src={`${HOST}/image/btn_back.webp`}
        className="w-20 absolute bottom-6 right-6 "
      />
    </div>
  );
};

export default SmoothSkin;
