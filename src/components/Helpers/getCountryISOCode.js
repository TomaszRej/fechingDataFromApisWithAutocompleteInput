import {suggestions as countries} from '../../const';

export function getCountryISOCode(selectedCountry) {
  for (const country of countries) {
    if (country.label === selectedCountry) {
      return country.ISOcode
    }
  }
}