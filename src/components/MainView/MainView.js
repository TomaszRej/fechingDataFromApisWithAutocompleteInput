import React, {useState, useEffect, Component} from 'react';
import {connect} from "react-redux";
import {
  saveCountryToLocalStorage,
  savePollutedCitiesToLocalStorage,
  getCountryFromLocalStorage,
  getCountryISOCode
} from "../Helpers";
import Header from "../Header/Header";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import ControlledExpansionPanels from "../../containers/ControlledExpansionPanels/ControlledExpansionPanels";
import Layout from "../Layout/Layout";
import {fetchPollutedCities} from "../../store/actions/PollutedCitiesAction";
import Loader from "../Loader/Loader";
import {createArrayOfTenUniquePollutedCities} from "../Helpers"
import {useSelector, useDispatch} from "react-redux";

function MainView() {
  const loadingCities = useSelector(state => state.PollutedCitiesReducer.loading);
  const [selectedCountry, setSelectedCountry] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedCountry(getCountryFromLocalStorage());
  }, [selectedCountry]);

   const  getSelectedCountry = country => {

     setSelectedCountry(country);
     saveCountryToLocalStorage(country);

     fetchData(country)
    // this.setState({
    //   selectedCountry: country
    // }, () => {
    //   saveCountryToLocalStorage(this.state.selectedCountry);
    //   this.fetchData(this.state.selectedCountry);
    // })
  };

   const    fetchData = (country) => {
    // const {fetchPollutedCities} = this.props;
    const countryISOCode = getCountryISOCode(country);

    dispatch(fetchPollutedCities({countryISOCode}, (pollutedCities) => {

      console.log(pollutedCities);

      const uniquePollutedCities = createArrayOfTenUniquePollutedCities(pollutedCities);

      console.log(uniquePollutedCities, "unikalne");


      savePollutedCitiesToLocalStorage(pollutedCities);
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


// class MainView extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       selectedCountry: "",
//     }
//   }
//
//   componentDidMount() {
//     this.setState({
//       selectedCountry: getCountryFromLocalStorage()
//     })
//   }
//
//   getSelectedCountry = country => {
//     this.setState({
//       selectedCountry: country
//     }, () => {
//       saveCountryToLocalStorage(this.state.selectedCountry);
//       this.fetchData(this.state.selectedCountry);
//     })
//   };
//
//
//   fetchData = (country) => {
//     const {fetchPollutedCities} = this.props;
//     const countryISOCode = getCountryISOCode(country);
//
//     fetchPollutedCities({countryISOCode}, (pollutedCities) => {
//
//       console.log(pollutedCities);
//
//       const uniquePollutedCities = createArrayOfTenUniquePollutedCities(pollutedCities);
//
//       console.log(uniquePollutedCities, "unikalne");
//
//
//       savePollutedCitiesToLocalStorage(pollutedCities);
//     })
//
//
//   };
//
//
//   render() {
//     const {loadingCities} = this.props;
//     return (
//       <Layout>
//         <Header/>
//         <AutocompleteInput
//           getSelectedCity={this.getSelectedCountry}
//           selectedItem={this.state.selectedCountry}
//         />
//         {loadingCities ? <Loader size={150}/> : <ControlledExpansionPanels />}
//       </Layout>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     loadingCities: state.PollutedCitiesReducer.loading
//   }
// };
//
// export default connect(mapStateToProps, {fetchPollutedCities})(MainView);