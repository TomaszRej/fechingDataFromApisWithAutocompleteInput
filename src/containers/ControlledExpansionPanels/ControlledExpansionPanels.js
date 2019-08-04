import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import ControlledExpansionPanelItem from "../../components/ControlledExpansionPanelItem/ControlledExpansionPanelItem";
import {useStyles} from "./ControlledExpansionPanelsStyle";


function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [pollutedCities, setPollutedCities] = useState([]);


  useEffect(() => {
    const pollutedCitiesFromLocalStorage = localStorage.getItem("pollutedCities");
    if (pollutedCitiesFromLocalStorage) {
      setPollutedCities(JSON.parse(pollutedCitiesFromLocalStorage));
    }
  }, pollutedCities);


  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <Grid item className={classes.root}>
      {pollutedCities && pollutedCities.map((pollutedCity, index) => {
        return (
          <ControlledExpansionPanelItem
            //key={pollutedCity.city}
            expanded={expanded}
            handleChange={handleChange}
            city={pollutedCity.city}
            index={index}
          />
        )
      })}
    </Grid>
  );
}


export default ControlledExpansionPanels;