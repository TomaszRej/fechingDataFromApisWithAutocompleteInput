import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "./LayoutStyle";
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Layout({children, classes}) {
  const matches = useMediaQuery('(min-width:1300px)');

  return (
    <Paper className={matches ? classes.mobile : classes.desktop}>
      <Grid container spacing={4} direction="column">
        {children}
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Layout);


