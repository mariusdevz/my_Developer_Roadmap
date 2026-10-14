import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");

  const getWeather = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }
    const data = await response.json();
    // console.log("weather data:", data);
    setWeather(data);
  };

  const searchCity = async () => {
    setError("");
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
      );
      if (!response.ok) {
        throw new Error("Failed to find city.");
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const location = data.results[0];
        const long = location.longitude;
        const lat = location.latitude;
        const country = location.country;
        setCountry(country);
        console.log(country);

        console.log("success!");
        // console.log("latitude", lat);
        // console.log("longitude", long);
        await getWeather(lat, long);
      } else {
        setError("City not found!");
        setWeather(null);
      }
      console.log(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: "15px" }}>
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />
      <button onClick={searchCity}>search</button>
      <div style={{ backgroundColor: "#1a1a1a", padding: "10px" }}>
        {weather && (
          <div>
            {country && <p>Country: {country}</p>}
            <p>
              Temperature: {weather.current.temperature_2m}{" "}
              {weather.current_units.temperature_2m}
            </p>
            <p>
              Wind Speed: {weather.current.wind_speed_10m}{" "}
              {weather.current_units.wind_speed_10m}
            </p>
            <p>Latitude: {weather.latitude}</p>
            <p>Longitude: {weather.longitude}</p>
          </div>
        )}
        {loading && <p>Loading weather...</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Weather;
