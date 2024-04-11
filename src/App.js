import './App.css';
import { useState } from 'react';
import ResponseWeather from './components/ResponseWeather';

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [speed, setSpeed] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = "29e43fb15a6008d0262889ad6c247d8e";
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherUrl);
    const result = await res.json();
    console.log(result);

    if (result.cod === 200) {
      setError(false);
      setCity(result.name);
      setCountry(result.sys.country);
      setTemp(result.main.temp);
      setDescription(result.weather[0].description);
      setIcon(result.weather[0].icon)
      setHumidity(result.main.humidity);
      setSpeed(result.wind.speed);
    } else {
      setError(true); 
    }
  };

  return (
    <div className="App col">
      <label>Confira o clima de uma cidade:</label>
      <form onSubmit={handleSearch} className='Row'>
        <input type='text' name='city' placeholder='Digite a Cidade' required onChange={(e) => setCity(e.target.value)} value={city || ""}></input>
        <button type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </form>
      {(!error && city) && <ResponseWeather city={city} temp={temp} country={country} description={description} icon={icon} humidity={humidity} speed={speed} />}
      {error && <h2>Digite um nome de Cidade Valido</h2>}
    </div>
  );
}

export default App;
