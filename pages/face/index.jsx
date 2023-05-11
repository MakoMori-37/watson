import ManagementFace from "@/components/face/ManagementFace";
import React, { useState, useEffect } from "react";

const Face = () => {
  const [showHome, setShowHome] = useState(true);

  const handleChangeShowHome = () => {
    setShowHome(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleChangeShowHome();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      {showHome ? (
        <div
          onClick={handleChangeShowHome}
          className="bg__face w-full h-screen"
        />
      ) : (
        <ManagementFace />
      )}
    </div>
  );
};

export default Face;
