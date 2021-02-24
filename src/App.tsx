import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store';
import Searching from './components/Searching';
import Alert from './components/Alert';
import Weather from './components/Weather';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMessage = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="App">
      <Searching />
      {loading ? <Spinner /> : weatherData && <Weather data={weatherData} />}

      {alertMessage && <Alert message={alertMessage} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
