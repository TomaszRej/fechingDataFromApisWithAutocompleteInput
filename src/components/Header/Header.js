import React from 'react';
import {Typography, Grid} from "@material-ui/core";

export default function Header() {
  return (
    <Grid item>
      <Typography variant="h5" component="h1">
        Select a country from which you want to see the ten most polluted cities.
      </Typography>
    </Grid>
  )
}