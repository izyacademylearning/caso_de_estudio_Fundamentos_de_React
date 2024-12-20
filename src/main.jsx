import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { WeatherProvider } from "./context/WeatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </BrowserRouter>
);
