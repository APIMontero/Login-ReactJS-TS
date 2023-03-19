import React from "react"; //Import base for react
import ReactDOM from "react-dom/client";
import App from "./App"; //Component
import "./index.css"; //Style

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
