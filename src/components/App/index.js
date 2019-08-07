import React from "react";
import { BrowserRouter } from "react-router-dom";

import StoreProvider from "root/components/StoreProvider";

import AnimatedSwitch from "./Inner";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
