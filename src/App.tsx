import { useEffect } from 'react'
import './App.css'
import Container from './components/Container/Container'
import { useAppDispatch, useAppSelector } from './hook/redux'
import { rageSlice } from './store/reducers/RageSlice'
import { fetchData } from './store/reducers/ActionCreater'

function App() {
    const dispatch = useAppDispatch()
    const { isLoading, error } = useAppSelector((state) => state.rageReducer)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div className="App">
            <Container />
        </div>
    )
}

export default App
