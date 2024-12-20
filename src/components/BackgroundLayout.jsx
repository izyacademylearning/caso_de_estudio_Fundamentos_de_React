import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const BackgroundLayout = () => {
  const { weather } = useContext(WeatherContext);

  const backgrounds = {
    Clear: "url('/images/clear.jpg')",
    Rain: "url('/images/rain.jpg')",
    Clouds: "url('/images/clouds.jpg')",
    Snow: "url('/images/snow.jpg')",
  };

  const currentBackground =
    backgrounds[weather?.condition] || "url('/images/default.webp')";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: currentBackground,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundLayout;
