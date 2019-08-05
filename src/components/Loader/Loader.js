import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Grid} from "@material-ui/core";

function Loader({size}) {
  return (
    <Grid item container justify="center" alignItems="center">
      <Grid item>
      <CircularProgress thickness={2} size={size}/>
      </Grid>
    </Grid>
  )
}

export default Loader