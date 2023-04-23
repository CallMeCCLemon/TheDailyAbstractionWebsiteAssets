import React from 'react';
import {createTheme, Grid, Theme} from "@material-ui/core";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Navbar from "./navbar/Navbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#0f1e3f",
      contrastText: "#b9e2ea",
    },
    secondary: {
      light: "#b9e2ea",
      main: "#85f5f5",
      dark: "#4aaebb",
      contrastText: "#0f1e3f"
    },
    warning: {
      main: "#d25830",
      contrastText: "#0f1e3f",
    }
  }
});

interface AppProps {
  children: React.ReactNode;
}


const App = (props: AppProps) => {
  useStyles(theme);

  return <ThemeProvider theme={theme}>
    <Grid container>
      <Grid item xs={12}>
        <Navbar/>
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  </ThemeProvider>
}

export default App;
