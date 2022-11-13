import React from 'react';

function Sidebar() {
  return (
    <div className=" h-[100vh] w-[56px] bg-[#fff] border-r-[1px] border-[#dee1e8] flex flex-col justify-start">
      <div className="h-[56px] w-full hover:border-r-[3px] hover:border-[#1b39ff] flex justify-center items-center mt-[50px]">
        <img className="h-[45px] w-[45px]" src="" alt="theme" />
      </div>
      <div className="h-[56px] w-full hover:border-r-[3px] hover:border-[#1b39ff] flex justify-center items-center mt-[50px]">
        <img className="h-[45px] w-[45px]" src="" alt="info" />
      </div>
    </div>
  );
}

export default Sidebar;
