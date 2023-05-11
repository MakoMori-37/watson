import React from "react";
import FaceShop from "./FaceShop";

const ManagementFace = () => {
  return (
    <div className="bg__default w-full h-screen relative">
      <img
        src="/image/logo.webp"
        alt="logo"
        className="w-auto h-auto absolute object-contain top-5 right-2 "
      />
      <FaceShop />
    </div>
  );
};

export default ManagementFace;
