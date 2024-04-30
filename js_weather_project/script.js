const apikey = "ce482e1a17501a6fee174e2d4b6192e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox = document.querySelector(".search-box");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`);
  if ((response.status = 404)) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  var data = await response.json();
    // console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./weather-app-img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    // clear c should be capital
    weatherIcon.src = "./weather-app-img/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./weather-app-img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./weather-app-img/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./weather-app-img/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "./weather-app-img/snow.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "./weather-app-img/harze.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
