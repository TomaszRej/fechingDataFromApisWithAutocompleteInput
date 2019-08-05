import axios from "axios";
import jsonpAdapter from 'axios-jsonp';

const fetchCityDetails = ({city}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${city}&format=json`,
      adapter: jsonpAdapter,
    }).then((response) => {
      resolve(response.data);
    }).catch((e) => {
      reject(e);
    });
  });
};

export default {
  fetchCityDetails,
};