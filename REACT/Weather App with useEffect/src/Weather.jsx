import { useEffect, useState } from "react";
import { Sun, CloudRain } from "lucide-react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const [icons, setIcons] = useState("");
  const [tempText, setTempText] = useState("");

  useEffect(() => {
    document.title = `weather in ${city}`;
    // console.log("Tab title:", document.title);
  }, [city]);

  const getWeather = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }
    const data = await response.json();
    console.log("weather data:", data);
    const temp = data.current.temperature_2m;
    if (temp <= 15) {
      setIcons(<CloudRain size={100} color="#3B82F6" />);
      setTempText("cloudy");
    } else {
      setIcons(<Sun size={100} color="#F59E08" />);
      setTempText("Sunny");
    }
    console.log(temp);
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
      console.log(data);
      if (data.results && data.results.length > 0) {
        const location = data.results[0];
        const long = location.longitude;
        const lat = location.latitude;
        const country = location.country;

        setCountry(country);
        // console.log(country);

        console.log("success!");
        // console.log("latitude", lat);
        // console.log("longitude", long);
        await getWeather(lat, long);
      } else {
        setError("City not found!");
        setWeather(null);
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "15px",
      }}
    >
      <h2
        style={{
          fontFamily: "helvetica",
          fontWeight: "bold",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Weather App
      </h2>
      <input
        style={{ width: "80%" }}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />
      <button onClick={searchCity}>search</button>
      <div
        style={{
          backgroundColor: "#1a1a1a",
          fontFamily: "monospace",
          padding: "10px",
          fontSize: "16px",
        }}
      >
        {weather && (
          <div>
            {country && (
              <p style={{ fontFamily: "helvetica", fontWeight: "bold" }}>
                Country: {country}
              </p>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "48px",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            >
              {icons}
              {tempText}
            </div>
            <p
              style={{
                fontFamily: "helvetica",
                fontSize: "48px",
                fontWeight: "bold",
                margin: "2px 0",
              }}
            >
              {weather.current.temperature_2m}{" "}
              {weather.current_units.temperature_2m}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "17px" }}>
              Wind Speed: {weather.current.wind_speed_10m}
              {weather.current_units.wind_speed_10m}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "17px" }}>
              Latitude: {weather.latitude}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "17px" }}>
              Longitude: {weather.longitude}
            </p>
          </div>
        )}
        {loading && <p>Loading weather...</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Weather;
