import React from 'react'
import InputContainer from './InputContainer/InputContainer'
import ListAllRatesContainer from './ListAllRatesContainer/LIstAllRatesContainer'

function Content() {
    return (
        <div className="h-[100vh] w-[100%] bg-red-300 flex flex-col">
            <InputContainer />
            <ListAllRatesContainer />
        </div>
    )
}

export default Content
