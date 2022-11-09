import React from "react";
import GetContainer from "./GetContainer/GetContainer";
import SendContainer from "./SendContainer/SendContainer";
import SwapContainer from "./SwapContainer/SwapContainer";

function InputContainer() {
  return (
    <div className="w-[100%] h-[300px] bg-[#fff] flex flex-col items-center justify-center z-0">
      <div className="h-[auto] w-[90%] flex flex-row justify-center">
        <div className="w-[100px] h-auto ml-0 mr-[auto]">
          <p className="text-[#635f7b] text-[25px] font-light">Send</p>
        </div>
        <div className="w-[100px] h-auto text-end ml-[auto] mr-0">
          <p className="text-[#635f7b] text-[25px] font-light">Get</p>
        </div>
      </div>

      <div className="h-[110px] w-[90%] mt-3 flex flex-row justify-center items-center">
        <div className="bg-[#f5f7fb] rounded-md h-[80%] w-[100%] flex flex-row justify-center items-center">
          <SendContainer />
          <SwapContainer />
          <GetContainer />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default InputContainer;
