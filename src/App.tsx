import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import "./App.css";
import configureStore from "./store/configure-store";
import Routing from "./routes/index";
import { Header } from "./components/Header/Header";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Header />
      <Routing />
    </Provider>
  );
}

export default App;
