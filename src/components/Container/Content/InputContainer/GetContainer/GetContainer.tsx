import React from 'react'
import GetSelect from '../GetSelect/GetSelect'

const GetContainer = () => {
    return (
        <div className="bg-[#f5f7fb] rounded-r-md h-[100%] w-[50%] flex flex-row justify-end items-center">
            <div className="mr-5 h-[80%] w-full flex justify-end items-center">
                <span className="text-[40px] text-[#3f3762] mr-5">1000</span>
                <GetSelect />
            </div>
        </div>
    )
}

export default GetContainer
