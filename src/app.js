const API_KEY = "41e8ca7dc1fc209cdbc13dff27488352";

const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
const cityName = document.getElementById("city");

const getWeather = () => {
  const cityValue = cityName.value.trim();

  if (cityValue.length === 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city</h3>`;
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        displayWeather(data);
      })
      .catch((err) => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};

const displayWeather = (data) => {
  result.innerHTML = `
  <h2>${data.name}</h2>
  <h4 class="weather">${data.weather[0].main}</h4>
  <h4 class="desc">${data.weather[0].description}</h4>
  <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
  <h1>${Math.round(data.main.temp)} &#176; C</h1>
  <div class="temp-container">
       <div>
          <h4 class="title">min</h4>
          <h4 class="temp">${data.main.temp_min} &#176</h4>
         </div>
       <div>
          <h4 class="title">max</h4>
         <h4 class="temp">${data.main.temp_max} &#176</h4>
       </div>
  </div>
  `;
};

searchBtn.addEventListener("click", getWeather);
