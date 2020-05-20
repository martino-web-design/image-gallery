import React from "react";
import NewSearch from "./components/NewSearch";
import "./App.css";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles({
  myMargin: {
    margin: "100px 50px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.myMargin}>
      <ThemeProvider theme={theme}>
        <NewSearch />
      </ThemeProvider>
    </div>
  );
}

export default App;
