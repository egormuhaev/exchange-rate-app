import { useEffect } from 'react';
import './App.css';
import ContainerRate from './components/ContainerRate/ContainerRate';
import { useAppDispatch } from './hook/redux';
import { fetchData } from './store/reducers/ActionCreater';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <ContainerRate />
    </div>
  );
}

export default App;
