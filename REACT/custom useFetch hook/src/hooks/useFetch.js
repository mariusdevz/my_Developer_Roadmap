import { useEffect } from "react";
import { useState } from "react"


const useFetch = (url) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async (latitude, longitude) => {
            setLoading(true);
            setError("")
            try {
                const foreCastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;
                const response = await fetch(foreCastUrl)
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setWeather(data)
            } catch (err) {
                setError(err.message || "something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    },

        [url])

    return { weather, error, loading }
}

export default useFetch
