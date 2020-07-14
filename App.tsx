import React from 'react';
import {
  LogBox
} from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/Store";
import Routes from './src/Navigation/Routes';

LogBox.ignoreLogs([
  "Remote"
]);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;