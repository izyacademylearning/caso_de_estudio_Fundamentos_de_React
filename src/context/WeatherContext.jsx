import React, { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Medellin");

  const apiKey = "9141cb67e882f81c5a8a52a299698537"; // Coloca tu API Key aquí

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather({
          location: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          condition: data.weather[0].main,
        });
      } else {
        alert("Ciudad no encontrada, por favor digite un nombre correcto");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  return (
    <WeatherContext.Provider value={{ weather, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
