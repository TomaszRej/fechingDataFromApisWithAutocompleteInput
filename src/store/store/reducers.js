import { combineReducers } from "redux";
import PollutedCitiesReducer from "../reducers/PollutedCitiesReducer";
import CityDetailsReducer from "../reducers/CityDetailsReducer";

export default combineReducers({
    PollutedCitiesReducer,
    CityDetailsReducer
});
