# 🌦️ Weather Forecast App

A simple and responsive web application that displays the current weather and forecast for the next 2 days using the [WeatherAPI.com](https://www.weatherapi.com/) service.

## 🚀 Features

- 🔍 Live search for any city’s weather using input
- 📅 Displays:
  - Current day weather
  - Tomorrow's weather
  - Day after tomorrow's weather
- ☀️ Includes weather condition, temperature, humidity, wind speed & direction
- 📆 Automatically shows the name of the day (e.g., Monday, Tuesday)

## 📸 Preview

![53305919-3494-4777-bae1-652e8f83d33f](https://github.com/user-attachments/assets/a7b251a8-04c2-49ed-af16-d7deff548d99)


## 🌐 Live Demo

Coming soon... or you can [host it on GitHub Pages](https://pages.github.com/)!

## 🛠️ Technologies Used

- HTML5
- CSS3 (Bootstrap)
- JavaScript (ES6+)
- [WeatherAPI.com](https://www.weatherapi.com/) (for weather data)

## 📌 How to Works

- You can search for any city using the input field.
- It fetches weather data for 3 days using forecast.json endpoint with days=3.
- Dates are converted to weekday names using JavaScript's toLocaleDateString().

## 📄 API Reference

- API: https://www.weatherapi.com
- Endpoints Used:
  -forecast.json for 3-day forecast
