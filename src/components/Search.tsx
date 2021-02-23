import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Search.css';
import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';
import { Input, Button } from 'antd';

interface SearchProps {
  title: string;
}

const Searching: React.FC<SearchProps> = ({ title }) => {

  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (event: FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  }

  const onClickHandler = () => {
      if (city.trim() === '' ) {
        return dispatch(setAlert('City is required!'));
      }
      dispatch(setLoading());
      dispatch(getWeather(city));
      setCity('');
  }

  return (
    <div className='search-container'>
      <h1 className="title">{title}</h1>
      <div className="input-container">
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={changeHandler}
        />
        <Button onClick={onClickHandler}>Search</Button>
      </div>
    </div>
  );
}

export default Searching;
