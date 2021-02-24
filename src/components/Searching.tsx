import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Search.css';

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading, setError } from '../store/actions/weatherActions';
import { Input, message, Button, Space } from 'antd';

const Searching: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const changeHandler = (event: FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  }

  const onClickHandler = () => {
    if (city.trim() === '') {
      error();
      dispatch(setAlert('City is required!'));
    } else if (!isNaN(Number(city))) {
      error();
      dispatch(setAlert('Please enter a city name!'));
      dispatch(setError());
    } else {
      success();
      dispatch(setLoading());
      dispatch(getWeather(city));
      setCity('');
      console.log('else');
      console.log(Number(city));
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

export default Searching;
