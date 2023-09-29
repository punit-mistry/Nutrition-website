import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom"; // Change the alias to "Router"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {" "}
      {/* Use "Router" as the top-level component */}
      <App />
    </Router>
  </React.StrictMode>
);
