import React, {useState, useEffect} from 'react';
import {
  saveCountryToLocalStorage,
  savePollutedCitiesToLocalStorage,
  getCountryFromLocalStorage,
  getCountryISOCode
} from "../../Helpers";
import Header from "../Header/Header";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import ControlledExpansionPanels from "../../containers/ControlledExpansionPanels/ControlledExpansionPanels";
import Layout from "../Layout/Layout";
import {fetchPollutedCities} from "../../store/actions/PollutedCitiesAction";
import Loader from "../Loader/Loader";
import {createArrayOfTenUniquePollutedCities} from "../../Helpers"
import {useSelector, useDispatch} from "react-redux";

function MainView() {
  const loadingCities = useSelector(state => state.PollutedCitiesReducer.loading);
  const [selectedCountry, setSelectedCountry] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedCountry(getCountryFromLocalStorage());
  }, [selectedCountry]);

  const getSelectedCountry = country => {
    setSelectedCountry(country);
    saveCountryToLocalStorage(country);
    fetchData(country)
  };

  const fetchData = (country) => {
    const countryISOCode = getCountryISOCode(country);
    dispatch(fetchPollutedCities({countryISOCode}, (pollutedCities) => {
      const uniquePollutedCities = createArrayOfTenUniquePollutedCities(pollutedCities);
      savePollutedCitiesToLocalStorage(uniquePollutedCities);
    }))
  };

  return (
    <Layout>
      <Header/>
      <AutocompleteInput
        getSelectedCity={getSelectedCountry}
        selectedItem={selectedCountry}
      />
      {loadingCities ? <Loader size={150}/> : <ControlledExpansionPanels/>}
    </Layout>
  );

}

export default MainView;

