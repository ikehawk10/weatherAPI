import React from 'react';

const WeatherList = (props) => {

  const convertKtoF = degree => {
    return Math.round(1.8 * (degree - 273) + 32)
  }

  const CitiesList = ({data}) => {
    return data.map(city => {
      return (
        <div key={city.id}>
          <h2>City: {city.name}</h2>
          <p>Current Temp: {convertKtoF(city.main.temp)}&#176;F</p>
          <p>High: {convertKtoF(city.main.temp_max)}&#176;F</p>
          <p>Low: {convertKtoF(city.main.temp_min)}&#176;F</p>
        </div>
      )
    })
  }

  return (
    <div>
      {props.data && <CitiesList data={props.data} />}
    </div>
  )
}

export default WeatherList;