import React from "react";
import PropTypes from "prop-types";

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
    <div>
      {city && country && (
        <p>
          Location: {city}, {country}
        </p>
      )}
      {temperature && <p>Temperature: {Math.round(temperature) + " °C"}</p>}
      {humidity && <p>Humidity: {humidity + " %"}</p>}
      {description && <p>Conditions: {description}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

Weather.propTypes = {
  conditions: PropTypes.object
};

export default Weather;
