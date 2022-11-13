import React from 'react';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../../../hook/redux';
import { rageSlice } from '../../../../../store/reducers/RageSlice';

const SendContainer = () => {
  const { optionsSelect, sendKey } = useAppSelector(
    (state) => state.rageReducer.data,
  );
  const dispatch = useAppDispatch();
  const { setSendKey, setSendValue, setGetValue } = rageSlice.actions;

  const getValue = () => {
    return sendKey ? optionsSelect.find((c) => c.value === sendKey) : '';
  };

  const onChange = (newValue: any) => {
    dispatch(setSendKey(newValue.value));
    dispatch(setGetValue());
  };

  return (
    <div className="bg-[#f5f7fb] rounded-l-md h-[100%] w-[50%] flex flex-row justify-start items-center">
      <div className="mr-5 h-[80%] w-full flex justify-start items-center">
        <div className="ml-5">
          <Select
            className="w-[100px] text-[#3f3762] font-semibold"
            options={optionsSelect}
            value={getValue()}
            onChange={onChange}
          />
        </div>
        <input
          type="number"
          className="h-[50px] w-full text-[40px] text-[#3f3762] ml-5 bg-[#f5f7fb] outline-none"
          onChange={(e) => {
            dispatch(setSendValue(Number(e.target.value)));
            dispatch(setGetValue());
          }}
        />
      </div>
    </div>
  );
};

export default SendContainer;
