let weatherContainer = document.querySelector("#weatherBox");
let searchInput = document.querySelector("#searchInput");
let city = '';

function getDayName(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

async function getWeather(cityInput) {
  const API_KEY = "f139be639fde4586863173227252306";
  city = cityInput;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`;

  try {
    let response = await fetch(url);

    if (!response) {
      throw new Error("Failed to fetch data")
    }

    let data = await response.json();

    console.log(data);

    let tomorrowDayName = getDayName(data.forecast.forecastday[1].date);
    let afterTomDayName = getDayName(data.forecast.forecastday[2].date);
    
    weatherContainer.innerHTML = `
    <div class="col-md-4">
          <div class="day text-center p-2">
            <h4 class="m-0">Today</h3>
          </div>
          <div class="px-3 py-5">
            <h5>${data.location.name}</h5>
            <div class="temp d-flex align-items-center my-4">
              <h3 class="">${data.current.temp_c}<sup>o</sup>C</h3>
              <img class="" src="${data.current.condition.icon}" alt="Sunny">
            </div>

            <div class="condition">
              <h6>${data.current.condition.text}</h6>
              <div class="properties d-flex align-items-center gap-4">
                <div>
                  <i class="fa-solid fa-umbrella"></i>
                  <p>${data.current.humidity}%</p>
                </div>
                <div>
                  <i class="fa-solid fa-wind"></i>
                  <p>${data.current.wind_kph}km/h</p>
                </div>
                <div>
                  <i class="fa-solid fa-gauge"></i>
                  <p>${data.current.wind_dir}</p>
                </div>  
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="day text-center p-2">
            <h4 class="m-0">${tomorrowDayName}</h3>
          </div>
          <div class="px-3 py-5 text-center">
            <div class="temp">
              <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="Sunny">
              <div class="my-4">
                <h3>${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h3>
                <h6>${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</h6>
              </div>
            </div>
            <div class="condition">
              <h6>${data.forecast.forecastday[1].day.condition.text}</h6>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="day text-center p-2">
            <h4 class="m-0">${afterTomDayName}</h3>
          </div>
          <div class="px-3 py-5 text-center">
            <div class="temp">
              <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="Sunny">
              <div class="my-4">
                <h3>${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h3>
                <h6>${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h6>
              </div>
            </div>
            <div class="condition">
              <h6>${data.forecast.forecastday[2].day.condition.text}</h6>
            </div>
          </div>
        </div>
    `
    
  } catch (error) {
    console.log("Error: "+ error.message);
  }
}

getWeather("cairo");

searchInput.addEventListener("keyup", function() {
  city = searchInput.value.trim();
  getWeather(city);
})