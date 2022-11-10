import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rageReducer from './reducers/RageSlice'
//Редьюсеры

const rootReducer = combineReducers({
    rageReducer,
})

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
