const inputEl = document.getElementById('input');
const searchBtn = document.getElementById('search');
const weather = document.getElementById('weather');
const wind = document.getElementById('wind');

async function getWeather(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`);
    const data = await response.json();

    console.log("success", data);

    const timeWeather = data.current.time;
    const tempWeather = data.current.temperature_2m;
    const latitudeWeather = data.latitude;
    const longitudeWeather = data.longitude;
    console.log(timeWeather);
    console.log(tempWeather);
    console.log("latitude", latitudeWeather);
    console.log("longitude", longitudeWeather);

    return data;
}

searchBtn.addEventListener('click', async () => {
    const input = inputEl.value.trim();
    if (input === "") return
    const coord = await getCoordinates(input);
    if (!coord) {
        console.log("No city was found!");
        return;
    }
    console.log('get coordinates:', coord);
    const weatherDisplay = await getWeather(coord.latitudeW, coord.longitudeW);
    const temp = weatherDisplay.current.temperature_2m;
    const units = weatherDisplay.current_units.temperature_2m;
    const windSpeed = weatherDisplay.current.wind_speed_10m;
    const windUnits = weatherDisplay.current_units.wind_speed_10m;
    console.log('Get weather', weatherDisplay);
    weather.textContent = `Temperature: ${input}: ${temp} ${units}`
    wind.textContent = `Wind: ${windSpeed} ${windUnits}`

});


async function getCoordinates(city) {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        const data = await response.json();
        // console.log(data);
        if (data.results.length === 0) {
            console.log("No city was found!");
            return null

        }
        const latitudeW = data.results[0].latitude;
        const longitudeW = data.results[0].longitude;

        // const cityName = data.results[0].name;
        return {
            latitudeW,
            longitudeW
        }
    } catch (err) {
        console.log("Failed to fetch data", err);

    }
}

async function test() {
    const coordinates = await getCoordinates('Adamawa');
    console.log("coordinates:", coordinates.latitudeW, coordinates.longitudeW);
    getWeather(coordinates.latitudeW, coordinates.longitudeW)
}

test();

// getCoordinates("Adamawa")
// getWeather(11.48333, 10.96667);

