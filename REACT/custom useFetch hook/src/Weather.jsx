import { useState } from "react";
import useFetch from "./hooks/useFetch";

const Weather = () => {
  const [forecastUrl, setForecastUrl] = useState("");
  const [city, setCity] = useState("");
  const { weather, error, loading } = useFetch(forecastUrl);
  const [locationName, setLocationName] = useState("");
  const [country, setCountry] = useState("");

  const searchCity = async () => {
    if (!city.trim()) return;
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.trim())}&count=1&language=en&format=json`;
    const response = await fetch(geocodingUrl);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      console.log("City not found!");
      return;
    }

    const location = data.results[0];
    const latitude = location.latitude;
    const longitude = location.longitude;
    const countryName = location.country;
    const newUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    setForecastUrl(newUrl);

    setLocationName(location.name);
    setCountry(countryName);

    // console.log(latitude, longitude);

    // console.log(data);
    setCity("");
  };
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city..."
      />
      <button onClick={searchCity}>search</button>

      {loading && <p>Loading weather...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <div>
          <p>Country: {country}</p>
          <p>City: {locationName}</p>
          <p>
            Temperature: {weather.current.temperature_2m}{" "}
            {weather.current_units.temperature_2m}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
