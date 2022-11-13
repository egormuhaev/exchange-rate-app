import React from 'react';
import { useAppSelector } from '../../../../hook/redux';
import './ListAllRatesContainer.css';
import ListItem from './ListItem/ListItem';

function ListAllRatesContainer() {
  const { listAllRates } = useAppSelector((state) => state.rageReducer.data);

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
      </div>
      <div className="list h-full w-full flex flex-col items-center overflow-y-scroll">
        {listAllRatesHtml}
      </div>
    </div>
  );
}

export default ListAllRatesContainer;
