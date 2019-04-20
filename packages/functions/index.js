const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();

exports.getWeather = functions.https.onCall(data => {
  const API_KEY = "ca35b23530021d4b508171f1a5f0ba0a";

  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${data.city},${
      data.country
    }&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .catch(err => console.log(err));
});
