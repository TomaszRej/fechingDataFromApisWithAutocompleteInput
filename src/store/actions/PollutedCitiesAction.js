import {
  FETCH_POLLUTED_CITIES,
  FETCH_POLLUTED_CITIES_SUCCESS,
  FETCH_POLLUTED_CITIES_FAILED
} from './types';

import PollutedCitiesService from "../../services/PollutedCitiesService";

export const fetchPollutedCities = ({countryISOCode}) => {
  return async (dispatch) => {

    dispatch({type: FETCH_POLLUTED_CITIES});

    PollutedCitiesService.fetchPollutedCities({countryISOCode}).then((response) => {

      console.log("action-response", response)

      dispatch({type: FETCH_POLLUTED_CITIES_SUCCESS, payload: response.results});
    }).catch((err) => {
      dispatch({type: FETCH_POLLUTED_CITIES_FAILED});
    });
  };
};