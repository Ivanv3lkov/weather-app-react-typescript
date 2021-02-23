import { WeatherState, WeatherAction, ActionTypes } from "../types";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch(action.type) {
    case ActionTypes.GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.SET_ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}