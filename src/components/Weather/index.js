import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Weather = ({ conditions }) => {
  const {
    temperature,
    city,
    country,
    humidity,
    description,
    error
  } = conditions;

  return (
    <div className="weather">
      {city && country && (
        <p className="weather__key">
          Location:{" "}
          <span className="weather__value">
            {city}, {country}
          </span>
        </p>
      )}

      {temperature && (
        <p className="weather__key">
          Temperature:{" "}
          <span className="weather__value">
            {Math.round(temperature) + " °C"}
          </span>
        </p>
      )}

      {humidity && (
        <p className="weather__key">
          Humidity: <span className="weather__value">{humidity + " %"}</span>
        </p>
      )}

      {description && (
        <p className="weather__key">
          Conditions: <span className="weather__value">{description}</span>
        </p>
      )}

      {error && <p className="weather__error">{error}</p>}
    </div>
  );
};

Weather.propTypes = {
  conditions: PropTypes.object
};

export default Weather;
