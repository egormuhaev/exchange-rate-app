import React from 'react'
import Select from 'react-select'
import { useAppDispatch, useAppSelector } from '../../../../../hook/redux'
import { rageSlice } from '../../../../../store/reducers/RageSlice'

const GetContainer = () => {
    const { optionsSelect, getKey, getValue } = useAppSelector(
        (state) => state.rageReducer.data
    )
    const dispatch = useAppDispatch()
    const { setGetKey, setGetValue } = rageSlice.actions

    const getValueF = () => {
        return getKey ? optionsSelect.find((c) => c.value === getKey) : ''
    }

    const onChange = (newValue: any) => {
        dispatch(setGetKey(newValue.value))
        dispatch(setGetValue())
    }

    return (
        <div className="bg-[#f5f7fb] rounded-r-md h-[100%] w-[50%] flex flex-row justify-end items-center">
            <div className="mr-5 h-[80%] w-full flex justify-end items-center">
                <span className="text-[40px] text-[#3f3762] mr-5">
                    {getValue}
                </span>
                <Select
                    className="w-[100px] text-[#3f3762] font-semibold"
                    options={optionsSelect}
                    value={getValueF()}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default GetContainer
