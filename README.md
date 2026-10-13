# 🌦️ Weather App

A responsive Weather App built using **HTML, CSS, and JavaScript** that fetches real-time weather information for different cities using the OpenWeatherMap API.

## ✨ Features

* 🔍 Search for weather information by city name.
* 🌡️ Display the current temperature in Celsius.
* 💧 Show humidity levels.
* 💨 Display wind speed.
* ☁️ Dynamically change weather icons based on weather conditions.
* 🌧️ Support for conditions such as Clear, Clouds, Rain, Drizzle, Snow, Mist, Fog, and Haze.
* ❌ Display an error message when an invalid city is entered.
* 🎨 Attractive gradient card design.
* 📱 Responsive layout for different screen sizes.

## 🛠️ Technologies Used

* **HTML5** — Structures the application.
* **CSS3** — Styles the interface using gradients, Flexbox, and rounded corners.
* **JavaScript** — Handles user interactions and updates weather information.
* **OpenWeatherMap API** — Provides current weather data.
* **Fetch API** — Retrieves weather information from the server.

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
│
├── search.png
├── clear.png
├── clouds.png
├── rain.png
├── drizzle.png
├── snow.png
├── mist.png
├── humidity.png
└── wind.png
```


## ⚙️ How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/weather-app.git
   ```

2. Open the project folder:

   ```bash
   cd weather-app
   ```

3. Configure your OpenWeatherMap API key in `script.js`.

4. Open `index.html` in your browser, or use the Live Server extension in VS Code.

5. Enter a city name in the search box and click the search button to view its weather information.

## 🌐 API Used

This project uses the **OpenWeatherMap Current Weather API** to retrieve weather information.

The application uses the following data:

* `main.temp` — Temperature in Celsius.
* `main.humidity` — Humidity percentage.
* `wind.speed` — Wind speed.
* `weather[0].main` — Main weather condition.
* `name` — City name returned by the API.

API Documentation: https://openweathermap.org/current

## 🔐 API Key Security

The API key is required to retrieve weather data.

**Important:** Never commit a private API key to a public GitHub repository. API keys used directly in frontend JavaScript can be viewed by anyone accessing the website.

For a publicly deployed application, consider routing API requests through a backend server to protect the key.


## 📚 What I Learned

* Working with HTML, CSS, and JavaScript.
* Fetching data from an external API.
* Using `async/await` for asynchronous operations.
* Handling JSON responses.
* Updating HTML elements dynamically using JavaScript.
* Using conditional statements to change weather icons.
* Handling invalid city names and API responses.

## 🚀 Future Improvements

* Add weather icons for more weather conditions.
* Improve error handling for API and network failures.
* Add loading indicators while fetching weather data.
* Improve accessibility and mobile responsiveness.
* Deploy the application online.

## 👨‍💻 Author:

GitHub: https://github.com/ROHAN180745



