import React from 'react';
import './details.css'

const Details = ({ citydata }) => {
  console.log(citydata);
  return <div className='overlay'>
      <div className="weather">
      <h1>{citydata.length === 0 ? 'City' : citydata.location.name }</h1>
      <div className="temp">
        <div className="image">
          <img src={citydata.length === 0 ? "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png"  : citydata.current.condition.icon} alt="" />
        </div>
          <h1>{citydata.length ===0 ? '--' : citydata.current.temp_c }<sup>0</sup> <small>C</small> </h1>
          </div>
        <h3>{citydata ? citydata.text : "..."}</h3>
        <p>updated as of {citydata.length ===0 ? '----' : citydata.current.last_updated }</p>
        <div className="downdets">
        <div className="dets">
          <p>humidity {citydata.length ===0 ? '--' : citydata.current.humidity }</p>
          <p>{citydata.length ===0 ? '--' : citydata.current.condition.text }</p>
          <p>Feels like {citydata.length ===0 ? '--' : citydata.current.feelslike_c } <sup>0</sup>C</p>
        </div>
        <div className="dets">
          <p>Wind {citydata.length ===0 ? '--' : citydata.current.wind_kph}km/h </p>
          <p>Visiblity {citydata.length ===0 ? '--' : citydata.current.vis_km}km</p>
          <p>Wind_Deg {citydata.length ===0 ? '--' : citydata.current.wind_degree}</p>
        </div>
      
        </div>
      </div>
  </div>;
};

export default Details;
