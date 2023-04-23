import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid } from "@material-ui/core";
import React from "react";
import { AppRoute } from "../AppRouter";
import { NavLinkButton } from "./NavLinkButton";
import SignInButton from "./SignInButton";

const useStyles = makeStyles((theme) => ({
  appbar: {
    color: theme.palette.primary.main,
    display: "flex",
  },
  button: {
    fontFamily: "Amazon Ember",
    padding: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  "grid-container": {
    display: "flex",
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position={"static"} className={classes.appbar}>
      <Grid container justifyContent={"flex-start"}>
        <Grid
          item
          xs={12}
          justifyContent={"space-between"}
          className={classes["grid-container"]}
        >
          <div>
            <NavLinkButton route={AppRoute.HOME} text={"Home"} />
            <NavLinkButton route={AppRoute.BLOG} text={"Blog"} />
            <NavLinkButton route={AppRoute.CONTACT} text={"Contact"} />
          </div>
          <SignInButton />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
