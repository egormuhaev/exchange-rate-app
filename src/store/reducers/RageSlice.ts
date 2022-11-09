import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface optionsSelect {
    value: string
    label: string
}


interface rageState {
    optionsSelect: optionsSelect[]
    sendKey: string
    getKey: string
    sendValue: number
    getValue: number
}


const initialState: rageState = {
    optionsSelect: [
        {
            value: '100',
            label: 'RUB',
        },
        {
            value: '200',
            label: 'USD',
        },
    ],
    sendKey: '',
    getKey: '',
    sendValue: 0,
    getValue: 0
}


export const rageSlice = createSlice({
    name: "rage",
    initialState,
    reducers: {
        initialReducer(state, action: PayloadAction<object>) {

        },
    },
    extraReducers: {},
})


export default rageSlice.reducer