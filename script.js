const inputText = document.querySelector(".seacrh-box");
const cityName = document.querySelector(".city");
const timeElement = document.querySelector(".date");
const temp = document.querySelector(".temp");
const maxMinTemp = document.querySelector(".hi-low");
const speed = document.querySelector("#speed");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weatherApp = function (city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=038680fce98fe2bf9c80aa5704cf5c1a`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      let data = res;
      console.log(data);
      let tempSelsiz = data.main.temp;
      let minTemp = data.main.feels_like;
      let maxTemp = data.main.temp_max;
      temp.textContent = `${(tempSelsiz - 273).toFixed(1)} °c`;
      maxMinTemp.textContent = `${Math.trunc(minTemp - 273)} °c / ${Math.trunc(
        maxTemp - 273
      )} °c`;
      speed.textContent = data.wind.speed;
    });
};

// Sana va oylarni chiqarish
let time = new Date();
let year = time.getFullYear();
let month = time.getMonth();
let day = time.getDate();
let hafta = time.getDay();
timeElement.textContent = `${weeks[hafta]}  ${day}  ${months[month]}  ${year} `;

inputText.addEventListener("keydown", function (a) {
  if (a.key == "Enter") {
    let city = inputText.value;
    weatherApp(city);
    inputText.value = "";
    cityName.textContent = city;
  }
});
