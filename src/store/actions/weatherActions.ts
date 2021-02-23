import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, ActionTypes } from '../types';
//type ThunkResult<R> = ThunkAction<R, RootState ,undefined, WeatherAction>;

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
        
      if (!response.ok) {
        const responseData: WeatherError = await response.json(); 
        throw new Error(responseData.message);
      }

      const responseData: WeatherData = await response.json();
      
      dispatch({
        type: ActionTypes.GET_WEATHER,
        payload: responseData
      });
    } catch(err) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: err.message
      });
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: ActionTypes.SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: ''
  }
}