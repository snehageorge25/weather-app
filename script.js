const apiKey = "4c005fc9950014917121b6707ee608de";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          var data = await response.json();

          const weatherDesc = data.weather[0].main;
          document.querySelector(".weather-description").innerHTML =
            weatherDesc;
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "&#176;C";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

          if (weatherDesc == "Clouds") {
            weatherIcon.src = "images/clouds.png";
          } else if (weatherDesc == "Clear") {
            weatherIcon.src = "images/clear.png";
          } else if (weatherDesc == "Rain") {
            weatherIcon.src = "images/rain.png";
          } else if (weatherDesc == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (weatherDesc == "Mist") {
            weatherIcon.src = "images/mist.png";
          } else if (weatherDesc == "Snow") {
            weatherIcon.src = "images/snow.png";
          } else if (weatherDesc == "Thunderstorm") {
            weatherIcon.src = "images/thunderstorm.png";
          }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }

      searchBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          event.preventDefault();
          // Trigger the button element with a click
          searchBtn.click();
        }
      });

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });