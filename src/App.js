import './App.css';
import Weather from './components/Weather';
import Form from './components/Form';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  });

  const getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`).then((response) => {
        const data = response.data;
        setWeatherData({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ''
        });
      })

    } else {
      setWeatherData({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter a city and country !'
      });
    }
  };

  return (
    <div className="App">
    <h1>Weather</h1>
      <Form getWeather={getWeather} />
      <Weather
        temperature={weatherData.temperature}
        city={weatherData.city}
        country={weatherData.country}
        humidity={weatherData.humidity}
        description={weatherData.description}
        error={weatherData.error}
      />
    </div>
  );
}

export default App;