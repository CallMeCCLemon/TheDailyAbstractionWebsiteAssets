import {Link} from "react-router-dom";
import {AppRoute} from "../AppRouter";
import {Button, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appbar: {
    color: theme.palette.primary.main
  },
  button: {
    fontFamily: "Amazon Ember",
    padding: theme.spacing(1),
    color: theme.palette.primary.contrastText
  }
}));

export interface NavLinkButtonProps {
  route: AppRoute;
  text: string;
}

const NavLinkButton = (props: NavLinkButtonProps) => {
  const classes = useStyles();

  return <Button className={classes.button}>
    <Link to={props.route} className={classes.button}>
      <Typography variant={"h6"}>
        {props.text}
      </Typography>
    </Link>
  </Button>
}

export {
  NavLinkButton
};
