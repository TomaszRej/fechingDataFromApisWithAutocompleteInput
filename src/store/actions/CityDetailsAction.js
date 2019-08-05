import {
  FETCH_CITY_DETAILS,
  FETCH_CITY_DETAILS_SUCCESS,
  FETCH_CITY_DETAILS_FAILED
} from './types';

import CityDetailsService from "../../services/CityDetailsService";

export const fetchCityDetails = ({city}) => {
  return async (dispatch) => {
    dispatch({type: FETCH_CITY_DETAILS});
    CityDetailsService.fetchCityDetails({city}).then((response) => {
      dispatch({type: FETCH_CITY_DETAILS_SUCCESS, payload: response.query.search[0].snippet});
    }).catch((err) => {
      dispatch({type: FETCH_CITY_DETAILS_FAILED});
    });
  };
};