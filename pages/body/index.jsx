import ManagementBody from "@/components/body/ManagementBody";
import React, { useState, useEffect } from "react";

const Body = () => {
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
          className="bg__body w-full h-screen"
        />
      ) : (
        <ManagementBody />
      )}
    </div>
  );
};

export default Body;
