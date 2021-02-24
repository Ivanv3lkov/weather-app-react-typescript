import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Search.css';

import { getWeather, setLoading } from '../store/actions/weatherActions';
import { Input, Button, Space } from 'antd';
import {error} from './Alert';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (event: FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  }

  const onClickHandler = () => {
    if (city.trim() === '') {
      error('City name is required!');
    } else if (!isNaN(Number(city))) {
      error('Please enter a city name and not numbers!');
    } else {
      dispatch(setLoading());
      dispatch(getWeather(city));
      setCity('');
    }
  }

  return (
    <div className="search-container">
      <h1 className="title">Enter city name and press search button</h1>
      <div className="input-container">
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={changeHandler}
        />
        <Space>
          <Button onClick={onClickHandler}>Search</Button>
        </Space>

      </div>
    </div>
  );
}

export default Search;
