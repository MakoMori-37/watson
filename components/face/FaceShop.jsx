import React from "react";

const FaceShop = () => {
  return (
    <div className="p-6 w-full space-y-2 ">
      <img
        src="/image/face/shop/title.png"
        alt="title"
        className="w-[70%] h-auto object-contain"
      />
      {/* Age */}
      <div className="grid grid-cols-6 gap-2 h-16 ">
        <img
          src="/image/face/shop/btn/btn_age.png"
          alt="age"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/age_1.png"
          alt="age_1"
          className="w-full h-16 object-contain col-span-2"
        />
        <img
          src="/image/face/shop/boxRight/age_1.png"
          alt="age_1"
          className="w-full h-16 object-contain col-span-2"
        />
        <img
          src="/image/face/shop/boxRight/age_2.png"
          alt="age_2"
          className="w-auto h-16 object-contain"
        />
      </div>
      {/* Occupation */}
      <div className="grid grid-cols-6 gap-1 h-16 ">
        <img
          src="/image/face/shop/btn/btn_occ.png"
          alt="btn_occ"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/occ_1.png"
          alt="occ_1"
          className="w-full h-16 object-contain col-span-2"
        />
        <img
          src="/image/face/shop/boxRight/occ_1.png"
          alt="occ_1"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxRight/occ_2.png"
          alt="occ_2"
          className="w-full h-16 object-contain col-span-2"
        />
      </div>
      {/* ปัญหาหรือความกังวลเกี่ยวกับผิว */}
      <div className="grid grid-cols-6 gap-1 h-16 ">
        <img
          src="/image/face/shop/btn/btn_concern.png"
          alt="btn_concern"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/concern_1.png"
          alt="concern_1"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/concern_1.png"
          alt="concern_1"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxRight/concern_1.png"
          alt="concern_1"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxRight/concern_2.png"
          alt="concern_2"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxRight/concern_3.png"
          alt="concern_3"
          className="w-full h-16 object-contain"
        />
      </div>
      {/* ความต้องการ */}
      <div className="grid grid-cols-6 gap-1 h-16 ">
        <img
          src="/image/face/shop/btn/btn_need.png"
          alt="btn_need"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/need_1.png"
          alt="need_1"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/need_2.png"
          alt="need_2"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxRight/need_1.png"
          alt="need_1"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxRight/need_2.png"
          alt="need_2"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxRight/need_3.png"
          alt="need_3"
          className="w-full h-16 object-contain"
        />
      </div>
      {/* คุณสมบัตรเพิ่มเติม */}
      <div className="grid grid-cols-6 gap-1 h-16 ">
        <img
          src="/image/face/shop/btn/btn_more.png"
          alt="btn_more"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/more_1.png"
          alt="more_1"
          className="w-full h-16 object-contain col-span-2 "
        />
        <img
          src="/image/face/shop/boxRight/more_1.png"
          alt="more_1"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxRight/more_2.png"
          alt="more_2"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxRight/more_3.png"
          alt="more_3"
          className="w-full h-16 object-contain"
        />
      </div>
      {/* ทำความสะอาดผิวหน้า */}
      <div className="grid grid-cols-6 gap-1 h-16 ">
        <img
          src="/image/face/shop/btn/btn_clean.png"
          alt="btn_more"
          className="w-full h-16 object-contain"
        />
        <img
          src="/image/face/shop/boxLeft/clean_1.png"
          alt="clean_1"
          className="w-full h-auto object-contain "
        />
        <img
          src="/image/face/shop/boxLeft/clean_2.png"
          alt="clean_2"
          className="w-full h-auto object-contain "
        />
        <img
          src="/image/face/shop/boxRight/clean_1.png"
          alt="clean_1"
          className="w-full h-28 object-contain col-span-3"
        />
      </div>
      {/* บำรุงผิวหน้า */}
      <div className="!mt-16 grid grid-cols-6 gap-1 h-16  ">
        <img
          src="/image/face/shop/btn/btn_recommend.png"
          alt="btnrecommend"
          className="w-full h-16 object-contain "
        />
        <img
          src="/image/face/shop/boxLeft/recommend_1.png"
          alt="recommend_1"
          className="w-full h-auto object-contain "
        />
        <img
          src="/image/face/shop/boxLeft/recommend_2.png"
          alt="recommend_2"
          className="w-full h-auto object-contain "
        />
        <img
          src="/image/face/shop/boxRight/recommend_1.png"
          alt="recommend_1"
          className="w-full h-24 object-contain"
        />
        <img
          src="/image/face/shop/boxRight/recommend_2.png"
          alt="recommend_2"
          className="w-full h-24 object-contain"
        />
        <img
          src="/image/face/shop/boxRight/recommend_3.png"
          alt="recommend_3"
          className="w-full h-24 object-contain"
        />
      </div>
    </div>
  );
};

export default FaceShop;
