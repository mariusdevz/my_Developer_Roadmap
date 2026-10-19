import { useEffect } from "react";
import { useState } from "react"


const useFetch = (url) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setLoading(true);
            setError("")
            try {
                const response = await fetch(url)
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
