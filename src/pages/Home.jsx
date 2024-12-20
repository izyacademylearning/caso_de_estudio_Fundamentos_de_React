import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "../components/WeatherCard";
import BackgroundLayout from "../components/BackgroundLayout";

const Home = () => {
  const { weather, setLocation } = useContext(WeatherContext);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setLocation(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div>
      <BackgroundLayout />
      <div className="input-container">
        <form>
          <input
            className="input"
            type="text"
            placeholder="Ingresa el nombre de la ciudad"
            onKeyDown={handleSearch}
          />
        </form>
      </div>
      {weather && (
        <WeatherCard
          location={weather.location}
          temp={weather.temp}
          windSpeed={weather.windSpeed}
          humidity={weather.humidity}
          condition={weather.condition}
        />
      )}
    </div>
  );
};

export default Home;
