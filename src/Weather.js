import React, { Component } from 'react';
import axios from 'axios';

import WeatherList from './WeatherList';

class Weather extends Component {
  state = {
    city: '',
    data: [],
    key: 'USE YOUR OWN KEY',
    loading: false,
    error: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const city = this.state.city;
    const key = this.state.key;
    this.setState({ loading: true })
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    axios.get(url)
      .then(res => {
        this.setState( () => {
          return { data: [...this.state.data, res.data], loading: false, error: false}
        })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })

  }

  handleChange = (e) => {
    const city = e.target.value;
    this.setState( () => {
      return { city }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.city} onChange={this.handleChange}/>
          <input type='submit' />
          <p>{this.state.loading && 'Loading...'}</p>
          <p>{this.state.error && 'City not found'}</p>
          <WeatherList data={this.state.data}/>
        </form>
      </div>
    );
  }

}

export default Weather;