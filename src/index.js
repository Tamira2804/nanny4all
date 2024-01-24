import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/nanny4all">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
