// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import TemperatureChart from './TemperatureChart';
import './App.css';

function App() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    // Fetch new data every second
    const interval = setInterval(() => {
      fetch('https://temperature-api-3rg8.onrender.com/temperature')
        .then(res => res.json())
        .then(json => {
          setDataPoints(prev => {
            const newPoint = { 
              time: new Date().toLocaleTimeString(), 
              temp: json.temperature 
            };
            // Keep only latest 20 points for clarity
            return [...prev, newPoint].slice(-20);
          });
        })
        .catch(err => console.error('Fetch error:', err));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Live Temperature Dashboard</h1>
      <TemperatureChart data={dataPoints} />
    </div>
  );
}

export default App;
