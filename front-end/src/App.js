import React, { Component } from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import "./App.css";

const API_KEY = "ca35b23530021d4b508171f1a5f0ba0a";

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this._getWeather} />
        <Weather />
      </div>
    );
  }

  _getWeather = async () => {
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`
    );

    const data = await apiCall.json();

    console.log(data);
  };
}

export default App;
