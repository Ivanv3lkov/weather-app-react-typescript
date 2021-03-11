import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Search from './components/Search';
import Weather from './components/Weather';


import Spinner from './components/Spinner';

const App: React.FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);

  return (
    <div className="App">
      
      <Search />
      {loading ? <Spinner /> : weatherData && <Weather data={weatherData} />}
      
    </div>
  );
}

export default App;