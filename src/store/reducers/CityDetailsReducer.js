import {
  FETCH_CITY_DETAILS,
  FETCH_CITY_DETAILS_SUCCESS,
  FETCH_CITY_DETAILS_FAILED
} from "../actions/types";

const initialState = {
  loading: false,
  cityDetails: ""
};


const PollutedCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_DETAILS:
      return {
        ...state,
        loading: true
      };
    case FETCH_CITY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        cityDetails: action.payload,
      };
    case FETCH_CITY_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default PollutedCitiesReducer;