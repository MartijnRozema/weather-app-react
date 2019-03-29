import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      weather: 'default',
    };
  }

  fetchWeather = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/find?q=${this.state.place}&units=${this.state.unit}&appid=5d3b3869461a4613bf9b97f5a0607536`)
        .then( res => {
            if (res.data.count === 0){
                this.setState({
                    error: 'Plaatsnaam werd niet gevonden, controleer uw spelling.'
                    })
            } else {
                this.setState({
                    error: null,
                    weather: res.data.list[0],
                    temp: res.data.list[0].main.temp,
                    windspeed: res.data.list[0].wind.speed,
                    humidity: res.data.list[0].main.humidity,
                    country: res.data.list[0].sys.country,
                    raintype: res.data.list[0].rain,
                });
            }
        });
  }

    placeInput = (inputValue)  => {
      if (this.state.unit === undefined){
          this.state.unit = 'metric'
      }
      this.state.place = inputValue;
      this.fetchWeather()
    }

    placeUnit = (unitValue)  => {
        this.state.unit = unitValue;
    }

  render() {
    return (
        <>
            <Header place={this.state.place}
                    input={this.placeInput}
                    unit={this.placeUnit}
                    error={this.state.error}/>
          <Weather weather={this.state.weather}
                   temp={this.state.temp}
                   wind={this.state.windspeed}
                   humidity={this.state.humidity}
                   raintype={this.state.raintype}
                   country={this.state.country}/>
        </>
    );
  }
}

export default App;
