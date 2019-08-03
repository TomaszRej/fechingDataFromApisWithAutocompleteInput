import React, {Component} from 'react';
import  { connect } from "react-redux";
import {saveCountryToLocalStorage, getCountryFromLocalStorage, getCountryISOCode} from "../Helpers";
import Header from "../Header/Header";
import AutocompleteInput from "../AutocompleteInput";
import ControlledExpansionPanels from "../../containers/ControlledExpansionPanels/ControlledExpansionPanels";
import Layout from "../Layout/Layout";
import {fetchPollutedCities} from "../../store/actions/PollutedCitiesAction";

class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: "",
    }
  }

  componentDidMount() {
    this.setState({
      selectedCountry: getCountryFromLocalStorage()
    })
  }

  getSelectedCountry = country => {
    this.setState({
      selectedCountry: country
    }, () => {
      saveCountryToLocalStorage(this.state.selectedCountry);
      this.fetchData(this.state.selectedCountry);
    })
  };


  fetchData = (country) => {
    const { fetchPollutedCities } = this.props;
    const countryISOCode = getCountryISOCode(country);


    fetchPollutedCities({countryISOCode})



    //do pierwszego
    //https://api.openaq.org/v1/measurements?country=PL&parameter=pm25&order_by[]=value&sort[]=desc&limit=10
    // do drugiego fetcha
    //https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Krakow%20city&format=jsonfm
  };


  render() {
    return (
      <Layout>
        <Header/>
        <AutocompleteInput
          getSelectedCity={this.getSelectedCountry}
          selectedItem={this.state.selectedCountry}
        />
        <ControlledExpansionPanels/>
      </Layout>
    );
  }
}

export default connect(null, {fetchPollutedCities})(MainView);