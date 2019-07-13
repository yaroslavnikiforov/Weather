import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="city" placeholder="City..." />

    <input type="text" name="country" placeholder="Country..." />

    <button type="submit">Get weather</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
