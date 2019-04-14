import React from "react";
import PropTypes from "prop-types";

const Form = ({ getWeather }) => (
  <form onSubmit={getWeather}>
    <input type="text" name="city" placeholder="City" />
    <input type="text" name="country" placeholder="Country" />
    <button type="submit">Get weather</button>
  </form>
);

Form.propTypes = {
  getWeather: PropTypes.func
};

export default Form;
