import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "./LayoutStyle";

function Layout({children, classes}) {
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={4} direction="column">
        {children}
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Layout);