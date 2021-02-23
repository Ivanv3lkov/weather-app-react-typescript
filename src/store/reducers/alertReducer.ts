import { AlertState, AlertAction, ActionTypes } from "../types";

const initialState: AlertState = {
  message: ''
}

export default (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return {
        message: action.payload
      }
    default:
      return state;
  }
}