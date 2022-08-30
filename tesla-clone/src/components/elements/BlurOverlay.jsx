import React from "react";

const BlurOverlay = ({menu}) => {
  return <>{menu && 
  <div className="absolute top-0 left-0 h-screen w-full backdrop-blur-sm z-[7]">

  </div>}</>;
};

export default BlurOverlay;
