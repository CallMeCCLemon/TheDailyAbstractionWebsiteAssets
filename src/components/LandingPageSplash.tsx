import {Grid, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import skyline from '../img/TokyoSkyline.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "960px",
    backgroundImage: `url(${skyline})`,
    backgroundOrigin: "content-box",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  splashText: {
    color: theme.palette.primary.contrastText
  }
}))

const LandingPageSplash: React.FC = () => {
  const classes = useStyles();

  return <Grid container className={classes.root}>
    <Grid item>
      <Typography variant={"h3"} className={classes.splashText}>
        Something inspirational
      </Typography>
    </Grid>
  </Grid>
}

export default LandingPageSplash;