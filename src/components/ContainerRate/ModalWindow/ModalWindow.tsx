import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './ModalWindowAnimation.css';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { rageSlice } from '../../../store/reducers/RageSlice';
import mark from './img/mark.png';

function ModalWindow() {
  const dispatch = useAppDispatch();
  const { error, errorMessage } = useAppSelector((state) => state.rageReducer);
  const { setError } = rageSlice.actions;

  return (
    <CSSTransition
      in={error}
      timeout={500}
      classNames="modal"
      mountOnEnter
      unmountOnExit
    >
      <div className="absolute top-[0] left-[auto] z-[50] h-[50px] w-[400px] flex flex-row justify-between border-[1px]">
        <div className="ml-[5px] flex items-center w-[auto] mr-auto rounded-b-md text-[#635f7b]">
          <img className="h-[30px] w-[30px]" src={mark} alt="" />
          <p className="text-center ml-[10px]">{errorMessage}</p>
        </div>
        <button
          onClick={() => {
            dispatch(setError(!error));
            window.location.reload();
          }}
          className="bg-[#1a90ff] text-[#fff] h-[40px] w-[100px] my-auto mr-[5px] rounded-md  hover:bg-[#40a8ff] "
        >
          Reload
        </button>
      </div>
    </CSSTransition>
  );
}

export default ModalWindow;
