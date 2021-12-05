import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App/App";
import BaseProvider from "./components/BaseProvider/BaseProvider";
import "./index.css";
import { persistor, store } from "./redux/store";

// import { createContext } from "react";

// const BaseContext = createContext();

// console.log("BaseContext :>> ", BaseContext);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <BaseProvider>
            <App />
          </BaseProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
