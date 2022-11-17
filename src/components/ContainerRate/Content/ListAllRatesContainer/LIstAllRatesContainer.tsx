import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import './ListAllRatesContainer.css';
import ListItem from './ListItem/ListItem';
import up_down from './img/up_down.png';
import { rageSlice } from '../../../../store/reducers/RageSlice';

function ListAllRatesContainer() {
  const { listAllRates } = useAppSelector((state) => state.rageReducer.data);
  const dispatch = useAppDispatch();
  const { sortAllListRate } = rageSlice.actions;
  const [sort, setSort] = useState<boolean>(false);

  const listAllRatesHtml = listAllRates.map((rate) => (
    <ListItem
      CharCode={rate.CharCode}
      Name={rate.Name}
      Value={rate.Value}
      Previus={rate.Previous}
      profitStatus={rate.profitStatus}
      profitVal={rate.profitVal}
    />
  ));

  return (
    <div className="list_container_size bg-[#fff] flex flex-col justify-start items-center">
      <div className="h-[60px] w-[90%] flex justify-start items-center">
        <p className="text-[25px] text-[#635f7b] font-light">Rates</p>
        <div
          className="h-full w-[150px] mr-0 ml-auto flex flex-row justify-center items-center"
          onClick={() => {
            setSort(!sort);
            dispatch(sortAllListRate(sort));
          }}
        >
          <button className="h-[50px] w-[80px] text-[#3f3762] text-start">
            {sort ? 'Sort Up' : 'Sort Down'}
          </button>
          <img src={up_down} className="h-[20px] w-[20px]" />
        </div>
      </div>
      <div className="list h-full w-full flex flex-col items-center overflow-y-scroll">
        {listAllRatesHtml}
      </div>
    </div>
  );
}

export default ListAllRatesContainer;
