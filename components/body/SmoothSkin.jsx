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
    <div className="z-20">
      <div className="p-16 pt-40 flex flex-col items-center justify-center h-screen ">
        <img
          src={`${HOST}/image/body/smooth_skin.webp`}
          alt="smooth_skin"
          className="w-full h-auto "
        />
      </div>
    </div>
  );
};

export default SmoothSkin;
