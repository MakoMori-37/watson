import React from "react";

const RenderFaceShop = () => {
    return (
        <div>
            dsds
        </div>
    )
}

const ManagementFace = () => {
  return (
    <div className="bg__default w-full h-screen relative">
      <img
        src="/image/logo.webp"
        alt="logo"
        className="w-auto h-auto absolute object-contain top-5 right-2 "
      />
      <RenderFaceShop/>
    </div>
  );
};

export default ManagementFace;
