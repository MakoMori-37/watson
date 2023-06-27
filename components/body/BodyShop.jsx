import React from "react";
const HOST = process.env.HOST;

const BodyShop = ({ onUpdate = () => {} }) => {
  return (
    <div className="p-14 w-full h-screen space-y-2 ">
      <div className="flex items-center justify-center">
        <img
          src={`${HOST}/image/body/home/title.webp`}
          alt="title"
          className="w-[60%] h-auto object-contain"
        />
      </div>
      {/* Row 1 */}
      <div className="grid grid-cols-5 gap-2 h-16 ">
        <img
          src={`${HOST}/image/body/home/row1/row1_1.png`}
          alt="row1_1"
          className="w-full h-16 object-contain"
        />
        <img
          src={`${HOST}/image/body/home/row1/row1_2.png`}
          alt="row1_2"
          className="w-full h-16 object-contain"
        />
        <img
          src={`${HOST}/image/body/home/row1/row1_3.png`}
          alt="row1_3"
          className="w-full h-16 object-contain"
        />
        <img
          src={`${HOST}/image/body/home/row1/row1_4.png`}
          alt="row1_4"
          className="w-full h-16 object-contain"
        />
        <img
          src={`${HOST}/image/body/home/row1/row1_5.png`}
          alt="row1_5"
          className="w-full h-16 object-contain"
        />
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-5 gap-2 h-16 ">
        <img
          src={`${HOST}/image/body/home/row2/row2_1.png`}
          alt="row"
          className="w-full h-16 object-contain"
        />
        <img
          src={`${HOST}/image/body/home/row2/row2_2.png`}
          alt="row"
          className="w-full h-16 object-contain"
          onClick={() => onUpdate(1)}
        />
        <img
          src={`${HOST}/image/body/home/row2/row2_3.png`}
          alt="row"
          className="w-full h-16 object-contain"
          onClick={() => onUpdate(2)}
        />
        <img
          src={`${HOST}/image/body/home/row2/row2_4.png`}
          alt="row"
          className="w-full h-16 object-contain"
          onClick={() => onUpdate(3)}
        />
        <img
          src={`${HOST}/image/body/home/row2/row2_5.png`}
          alt="row"
          className="w-full h-16 object-contain"
          onClick={() => onUpdate(4)}
        />
      </div>

      <div className="pt-8">
        <img
          src={`${HOST}/image/body/home/more.png`}
          alt="title"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default BodyShop;
