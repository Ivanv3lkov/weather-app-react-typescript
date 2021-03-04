import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, ActionTypes } from '../types';
import { success, error } from '../../components/Alert'

export const getWeatherData = (responseData: WeatherData ): WeatherAction => {
  return {
    type: ActionTypes.GET_WEATHER,
    payload: responseData
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: ActionTypes.SET_LOADING,
    loading: true
  }
}

export const setError = (): WeatherAction => {
  return {
    type: ActionTypes.SET_ERROR,
    loading: false
  }
}

//type ThunkResult<R> = ThunkAction<R, RootState ,undefined, WeatherAction>;
export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
      
      if (!response.ok) {
        const responseData: WeatherError = await response.json();
        const errorMesage = responseData.message[0].toUpperCase() + responseData.message.substring(1);
        error(errorMesage);
        dispatch(setError());
        return;
      }
      success();
      const responseData: WeatherData = await response.json();
      dispatch(getWeatherData(responseData));

    } catch (error) {
      dispatch(setError());
    }
  }
}