import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./SwapContainerAnimation.css";
import swapImg from "./img/swap.png";

const SwapContainer = () => {
  const [swaperImgRotateAnimation, setSwaperImgRotateAnimation] =
    useState(false);

  return (
    <div className="bg-gradient-to-r from-[#e8eaf9] to-[#d3d7f1] h-[100px] w-[115px] rounded-3xl z-50 flex justify-center mx-auto">
      <button
        className="bg-[#fff] h-[66px] w-[66px] rounded-2xl my-auto flex justify-center items-center"
        onClick={() => {
          setSwaperImgRotateAnimation(true);
        }}
      >
        <CSSTransition
          in={swaperImgRotateAnimation}
          timeout={500}
          classNames={"swaperImg"}
          onEntered={() => {
            console.log("onEntered");
            setSwaperImgRotateAnimation(false);
          }}
        >
          <img className="swaperImg" src={swapImg} alt="swag" />
        </CSSTransition>
      </button>
    </div>
  );
};

export default SwapContainer;
