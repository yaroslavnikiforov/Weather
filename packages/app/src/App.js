import React, { Component } from "react";
import firebase from "firebase";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

var config = {
  apiKey: "AIzaSyDu9JxKH_EldezNOuQkDtrvJKOraymGSos",
  authDomain: "weather-8128e.firebaseapp.com",
  databaseURL: "https://weather-8128e.firebaseio.com",
  projectId: "weather-8128e",
  storageBucket: "weather-8128e.appspot.com",
  messagingSenderId: "685611493772"
};

firebase.initializeApp(config);

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this._getWeather} />
                  <Weather conditions={this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _getWeather = async e => {
    e.preventDefault();

    const getWeather = firebase.functions().httpsCallable("getWeather");

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const data = await getWeather({ city, country });

    console.info("data: ", data);

    if (city && country && data) {
      if (data.cod == 200) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }

      if (data.cod == 404) {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: data.message
        });
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter city and country"
      });
    }
  };
}

export default App;
