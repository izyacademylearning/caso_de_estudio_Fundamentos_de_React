import React from "react";

const WeatherCard = ({ location, temp, windSpeed, humidity, condition }) => (
  <div className="card">
    <h2>{location}</h2>
    <p>Temperatura: {temp}°C</p>
    <p>Velocidad del viento: {windSpeed} km/h</p>
    <p>Humedad: {humidity}%</p>
    <p>{condition}</p>
  </div>
);

export default WeatherCard;
