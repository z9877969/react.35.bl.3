import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import BaseProvider from "./components/BaseProvider/BaseProvider";
import "./index.css";

// import { createContext } from "react";

// const BaseContext = createContext();

// console.log("BaseContext :>> ", BaseContext);

ReactDOM.render(
  <React.StrictMode>
    <BaseProvider>
      <App />
    </BaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
