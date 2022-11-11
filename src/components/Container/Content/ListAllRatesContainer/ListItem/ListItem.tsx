import React from 'react'
import indicatorUp from '../img/profit_up.png'
import indicatorDown from '../img/profit_down.png'
import { profitStatus } from '../../../../../models/IJsonRes'

export interface ListItemProps {
    CharCode: string
    Name: string
    Value: number
    Previus: number
    profitStatus: profitStatus
    profitVal: number
}

function ListItem({
    CharCode,
    Name,
    Value,
    Previus,
    profitStatus,
    profitVal,
}: ListItemProps) {
    return (
        <div className="h-[100px] w-[90%] mt-2 mb-2 flex flex-row border-b-[1px] flex-wrap border-[#dee1e8]">
            <div className="h-[100%] w-[350px] flex flex-col justify-around">
                <p className="text-[25px] text-[#3f3762] font-light">
                    {CharCode}
                </p>
                <p className="text-[15px] text-[#a6a3af]">{Name}</p>
            </div>
            <div className="h-[100%] w-[150px] flex flex-col justify-around">
                <p className="text-[25px] text-[#3f3762] font-light">
                    <span className="text-[#a6a3af] mr-5">=</span>
                    {Value}
                </p>
                <div className="h-[15px] w-[30px] bg-[#d3d3e6] ml-9 rounded-full">
                    <p className="text-[10px] text-center text-white font-semibold">
                        RUB
                    </p>
                </div>
            </div>
            {profitStatus === 'down' ? (
                <div className="h-[100%] min-w-[300px] mr-0 ml-auto flex flex-row justify-center items-center">
                    <p className="text-[20px] text-[#3f3762] ml-0 mr-auto">
                        {Previus}
                    </p>
                    <img
                        className="h-[24px] w-[24px] mr-[1px]"
                        src={indicatorDown}
                        alt="down"
                    />
                    <p className="text-[20px] text-[#fb4545] ml-auto">
                        {profitVal.toFixed(4)}%
                    </p>
                    <p className="text-[20px] text-[#3f3762] ml-auto mr-0">
                        {Value}
                    </p>
                </div>
            ) : profitStatus === 'up' ? (
                <div className="h-[100%] min-w-[300px] mr-0 ml-auto flex flex-row justify-center items-center">
                    <p className="text-[20px] text-[#3f3762] ml-0 mr-auto">
                        {Previus}
                    </p>
                    <img
                        className="h-[24px] w-[24px] mr-[1px]"
                        src={indicatorUp}
                        alt="down"
                    />
                    <p className="text-[20px] text-[#79c44e] ml-auto">
                        {profitVal.toFixed(4)}%
                    </p>
                    <p className="text-[20px] text-[#3f3762] ml-auto mr-0">
                        {Value}
                    </p>
                </div>
            ) : (
                <div className="h-[100%] min-w-[300px] mr-0 ml-auto flex flex-row justify-center items-center">
                    <p className="text-[20px] text-[#3f3762] ml-0 mr-auto">
                        {Previus}
                    </p>
                    <p className="text-[20px] text-[#3f3762]">
                        {profitVal.toFixed(4)}%
                    </p>
                    <p className="text-[20px] text-[#3f3762] ml-auto mr-0">
                        {Value}
                    </p>
                </div>
            )}
        </div>
    )
}

export default ListItem
