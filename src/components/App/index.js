import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "root/redux/store";

import AnimatedSwitch from "./Inner";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
