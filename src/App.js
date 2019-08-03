import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ca35b23530021d4b508171f1a5f0ba0a";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app container">
        <div className="app__wrapper row">
          <div className="col-lg-5 col-sm-5 app__left-block">
            <Titles />
          </div>

          <div className="app__right-block col-sm-7 col-xl-7">
            <Form onSubmit={this._getWeather} />

            <Weather conditions={this.state} />
          </div>
        </div>
      </div>
    );
  }

  _getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.info("city: ", city);
    console.info("country: ", country);

    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await apiCall.json();

    console.info("data: ", data);

    if (city && country && data) {
      if (data.cod === 200) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }

      if (data.cod === 404) {
        this._resetState(data.message);
      }
    } else {
      this._resetState("Please enter city and country");
    }
  };

  _resetState = errorMessage =>
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: errorMessage
    });
}

export default App;
