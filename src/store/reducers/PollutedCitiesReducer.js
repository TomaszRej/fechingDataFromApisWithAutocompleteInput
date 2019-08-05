import {
  FETCH_POLLUTED_CITIES,
  FETCH_POLLUTED_CITIES_SUCCESS,
  FETCH_POLLUTED_CITIES_FAILED
} from "../actions/types";

const initialState = {
  loading: false,
  pollutedCities: []
};


const PollutedCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POLLUTED_CITIES:
      return {
        ...state,
        loading: true
      };
    case FETCH_POLLUTED_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        pollutedCities: action.payload,
      };
    case FETCH_POLLUTED_CITIES_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default PollutedCitiesReducer;
