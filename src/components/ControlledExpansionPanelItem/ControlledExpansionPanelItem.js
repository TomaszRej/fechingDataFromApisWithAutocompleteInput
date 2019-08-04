import React, {useState, useEffect} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Loader from "../Loader/Loader";
import {useStyles} from "./ControlledExpansionPanelItemStyle";
import {useDispatch, useSelector} from "react-redux";
import {fetchCityDetails } from "../../store/actions/CityDetailsAction";
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';


function ControlledExpansionPanelItem({expanded, handleChange, city,  index}) {
  const cityDetails = useSelector((state) => state.CityDetailsReducer.cityDetails);
  const loading = useSelector((state) => state.CityDetailsReducer.loading);
  const dispatch = useDispatch();

  const classes = useStyles();
  const panelId = "panel" + index;


  const handleClick = (city) => {
    dispatch(fetchCityDetails ({city}))
  };

  return (
    <ExpansionPanel expanded={expanded === panelId} onChange={handleChange(panelId)} onClick={() => handleClick(city)}>
      <ExpansionPanelSummary
          expandIcon={<Icon>keyboard_arrow_down</Icon>}
        id={panelId}
      >
        <Typography className={classes.heading}>{city}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
          {loading ? <Loader size={50}/> : <div contentEditable='true' dangerouslySetInnerHTML={{ __html: cityDetails }}/>}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}


export default ControlledExpansionPanelItem