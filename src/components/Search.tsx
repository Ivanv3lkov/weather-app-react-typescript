import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Search.css';
import PlacesAutocomplete from "react-places-autocomplete";

import { getWeather, setLoading } from '../store/actions/weatherActions';
import { Button, Space } from 'antd';
import { error } from './Alert';
import { findNumbers } from '../utils/utils';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const onChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    const inputField = document.querySelector('.ant-input') as HTMLInputElement;
    if (inputValue) {
      const isInvalidInput = findNumbers(inputValue);
      if (isInvalidInput) {
        inputField?.setAttribute('class', 'ant-input invalid')
      } else {
        inputField?.setAttribute('class', 'ant-input')
      }
    }
    setCity(inputValue);
  
		function initAutocomplete() {
      const inputField = document.querySelector('.ant-input') as HTMLInputElement;
			let searchBox = new window.google.maps.places.SearchBox(inputField);
			searchBox.addListener('places_changed', function() {
			setCity(city);
			});
		}
  
		initAutocomplete();
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

  const onCopyButtonClick = () => {
   navigator.clipboard.writeText(city);
  }

  return (
    <div className="search-container">
      <h1 className="title">Enter city name and press search button</h1>
      <div className="input-field-and-button">
          <input
            onChange={onChangeHandler}
            className='ant-input'
            type="text"
            placeholder="Enter city name"
            value={city}
            
          />
          <Space>
            <Button onClick={onClickHandler}>Search</Button>
            <Button onClick={onCopyButtonClick}>Copy</Button>
          </Space>
      </div>

      </div>
  );
}

export default Search;
