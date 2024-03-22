import { createContext, useContext, useState } from "react";
import axios from "axios";

const CityContext = createContext();
export const Context = () => useContext(CityContext);

export const CityProvider = ({ children }) => {

  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [coordinate, setCoordinate] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=5`

  const fetchWeatherData = async () => {
    try {
      const weatherResponse = await axios.get(apiUrl);
      const _weatherData = weatherResponse.data;
      setWeatherData(_weatherData);

      const mapResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);
      console.log(mapResponse.data)
      if(mapResponse.data.length > 0) {
        const { lat, lon } = mapResponse.data[0];
        setCoordinate([lat, lon]);
      }

    } catch (error) {
      console.log("Error fetching weather data:", data);
    }
  };

  return (
    <CityContext.Provider value={{ city, setCity, weatherData, fetchWeatherData, coordinate}}>{children}</CityContext.Provider>
  )
};
