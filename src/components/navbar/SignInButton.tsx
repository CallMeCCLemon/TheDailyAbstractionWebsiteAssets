import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import React from "react";
import { USER_POOL_APP_CLIENT_ID } from "../../constants";

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: "Amazon Ember",
    margin: theme.spacing(1),
    color: theme.palette.warning.contrastText,
    borderRadius: "16px",
    background: theme.palette.warning.main,
    "&:hover": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

const SignInButton: React.FC = () => {
  const classes = useStyles();

  const loginPageUrl = `https://auth.thedailyabstraction.com/login?response_type=token&client_id=${USER_POOL_APP_CLIENT_ID}&redirect_uri=https%3A%2F%2Fthedailyabstraction.com%2F`;

  // TODO: This will need to change to Sign Out when a user is logged in.
  return (
    <Button
      className={classes.button}
      onClick={() => window.location.replace(loginPageUrl)}
    >
      <Typography variant={"h6"}>Log In</Typography>
    </Button>
  );
};

export default SignInButton;
