import React from 'react'
import GetSelect from '../GetSelect/GetSelect'

const SendContainer = () => {
    return (
        <div className="bg-[#f5f7fb] rounded-l-md h-[100%] w-[50%] flex flex-row justify-start items-center">
            <div className="mr-5 h-[80%] w-full flex justify-start items-center">
              <div className='ml-5'>
                <GetSelect />
              </div>
              <input 
                type="number"
                className='h-[50px] w-full text-[40px] text-[#3f3762] ml-5 bg-[#f5f7fb] outline-none'
                />
            </div>
        </div>
    )
}

export default SendContainer
