import axios from "axios";


const fetchPollutedCities = ({countryISOCode}) => {

  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `https://api.openaq.org/v1/measurements?country=${countryISOCode}&parameter=pm25&order_by[]=value&sort[]=desc&limit=150`,
    }).then((response) => {
      resolve(response.data);
    }).catch((e) => {
      reject(e);
    });
  });
};

export default {
  fetchPollutedCities,
};