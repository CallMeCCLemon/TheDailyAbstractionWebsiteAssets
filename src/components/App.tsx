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
      light: "#81A4CD",
      main: "#3E7CB1",
      dark: "#0F1E3F",
      contrastText: "#DBE4EE",
    },
    warning: {
      main: "#F17300",
      contrastText: "#DBE4EE",
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
