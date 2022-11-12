import { useEffect } from 'react';
import './App.css';
import Container from './components/Container/Container';
import { useAppDispatch } from './hook/redux';
import { fetchData } from './store/reducers/ActionCreater';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
