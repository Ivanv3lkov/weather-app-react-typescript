import { WeatherState, WeatherAction, ActionTypes } from "../types";

const initialState: WeatherState = {
  data: null,
  loading: false,
}

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case ActionTypes.GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
      }
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}