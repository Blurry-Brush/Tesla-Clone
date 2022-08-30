import React from "react";

const Body = ({ bgLink, title, description }) => {
  return (
    <>
      <div className="h-screen">
        <img className="h-full w-full object-cover" src={bgLink} alt="" />
      </div>
    
    </>
  );
};

export default Body;
