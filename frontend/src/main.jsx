import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-mluhsyj60jpe2q6p.us.auth0.com"
    clientId="t6qWthDYb4JDZVLcFQ9xX5r60gZP6dqQ"
    // authorizationParams={{
    
    // }}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
     
    </Provider>
  </Auth0Provider>
);
