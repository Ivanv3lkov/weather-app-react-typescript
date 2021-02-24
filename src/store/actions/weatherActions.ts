import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, ActionTypes } from '../types';
import { success, error } from '../../components/Alert'
//type ThunkResult<R> = ThunkAction<R, RootState ,undefined, WeatherAction>;

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
      
      if (!response.ok) {
        const responseData: WeatherError = await response.json();
        const errorMesage = responseData.message[0].toUpperCase() + responseData.message.substring(1);
        error(errorMesage);
        dispatch({
          type: ActionTypes.SET_ERROR,
          loading: false
        })
        return;
      }

      success();

      const responseData: WeatherData = await response.json();

      dispatch({
        type: ActionTypes.GET_WEATHER,
        payload: responseData
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        loading: false
      })

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
    type: ActionTypes.SET_ERROR
  }
}
