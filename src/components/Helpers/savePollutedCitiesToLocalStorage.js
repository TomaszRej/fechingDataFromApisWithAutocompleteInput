export function savePollutedCitiesToLocalStorage(pollutedCities) {
  localStorage.setItem("pollutedCities", JSON.stringify(pollutedCities));
}