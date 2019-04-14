import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    getWeather: PropTypes.func
  };

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button type="submit">Get weather</button>
      </form>
    );
  }

  _onSubmit = event => {
    const { getWeather } = this.props;

    event.preventDefault();
    getWeather();
  };
}

export default Form;
