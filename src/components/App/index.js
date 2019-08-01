import { hot } from "react-hot-loader/root";
import React from "react";

import StoreProvider from "../StoreProvider";
import Form from "../Form";

function App() {
  return (
    <StoreProvider>
      <Form />
    </StoreProvider>
  );
}

export default hot(App);
