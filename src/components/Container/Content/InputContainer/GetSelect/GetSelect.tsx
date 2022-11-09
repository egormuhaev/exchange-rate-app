import React, { useState } from 'react'
import Select from 'react-select'
import { useAppSelector } from '../../../../../hook/redux'

const options = [
    {
        value: '100',
        label: 'RUB',
    },
    {
        value: '200',
        label: 'USD',
    },
]

function GetSelect() {
    // const { optionsSelect } = useAppSelector((state) => state.rageReducer)

    const [currentValue, setCurrentValue] = useState('')

    const getValue = () => {
        return currentValue
            ? options.find((c) => c.value === currentValue)
            : ''
    }

    const onChange = (newValue: any) => {
        setCurrentValue(newValue.value)
    }

    return (
        <div>
            <Select
                className="w-[100px]"
                options={options}
                value={getValue()}
                onChange={onChange}
            />
        </div>
    )
}

export default GetSelect
