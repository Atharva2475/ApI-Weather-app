import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
process.env.API


function App() {
  
  
    
  const [cityName,setCityName]=useState("");
  const [result,setResult]=useState([]);
  const [city,setCity]=useState();




  
  async function handleSearch(event){
      event.preventDefault();
    
    try{
      
   const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}`);
   console.log(response.data);
    setResult([response.data.main]);
    setCity(response.data.name);
   console.log([response.data.main]);
  



    }catch(e){
      console.log("error");

    }

    
  }

  




  return (
  <div className="container mt-5 w-50">

    {/* Search bar and button */}
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Enter city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        className="btn btn-outline-success"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>

    {/* Result below */}
    {result.length > 0 && (
      <div className="mt-4">
        <table className="table table-dark table-striped-columns container"style={{textAlign:"center",}}>
          <thead>
            <tr>
              <th style={{textAlign :"center"}}>temprature in {city}</th>
            </tr>
          </thead>
          <tbody>
          <tr><td style={{color:"blue"}}>Temperature: {(result[0].temp - 273.15).toFixed(2)} °C</td></tr>
          <tr><td style={{color:"red"}}>Max: {(result[0].temp_max - 273.15).toFixed(2)} °C</td></tr>
          <tr><td style={{color:"green"}}>Min: {(result[0].temp_min - 273.15).toFixed(2)} °C</td></tr>
          <tr><td style={{color:"yellow"}}>Humidity: {result[0].humidity } </td></tr>
           <tr><td style={{color:"orange"}}>Pressure: {result[0].pressure} hPa</td></tr>
            <tr><td style={{color:"pink"}}>Feels Like: {(result[0].feels_like - 273.15).toFixed(2)} </td></tr>

          
          </tbody>
        </table>
      </div>
    )}

  </div>
);

}

export default App;
