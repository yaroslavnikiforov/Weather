import React, { Component } from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import "./App.css";

const API_KEY = "ca35b23530021d4b508171f1a5f0ba0a";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this._getWeather} />
        <Weather conditions={this.state} />
      </div>
    );
  }

  _getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await apiCall.json();

    console.info("data: ", data);

    if (city && country && data) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter city and country"
      });
    }
  };
}

export default App;
