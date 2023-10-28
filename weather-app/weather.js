document.addEventListener("DOMContentLoaded", function () {
  const search_bar = document.getElementById("search");

  const search_button = document.getElementById("search-button");
  search_button.addEventListener("click", () => {
    const searchValue = search_bar.value;
    fetchWatherAPI(searchValue);
  });

  async function fetchWatherAPI(location) {
    try {
      document.addEventListener("DOMContentLoaded", function () {
        const search_bar = document.getElementById("search");

        const search_button = document.getElementById("search-button");
        search_button.addEventListener("click", () => {
          const searchValue = search_bar.value;
          fetchWatherAPI(searchValue);
        });

        async function fetchWatherAPI(location) {
          try {
            const response = await fetch(
              "https://api.weatherapi.com/v1/forecast.json?key=" +
                "8f008e0db7f140f5817142724232810&q=" +
                location +
                "&days=3",
              {
                mode: "cors",
              }
            );

            if (response.ok) {
              const data = await response.json();
              const forecast = data.forecast.forecastday;

              createBasicInfo(
                data.location.country,
                data.location.name,
                data.location.region,
                data.location.tz_id,
                data.location.localtime
              );

              for (let i = 0; i < 3 && i < forecast.length; i++) {
                createGridMain(
                  forecast[i].day.condition.text,
                  forecast[i].day.condition.icon,
                  forecast[i].date,
                  forecast[i].day.maxtemp_c,
                  forecast[i].day.avgtemp_c,
                  forecast[i].day.mintemp_c
                );
              }
            } else if (location === "") {
              console.error("Please, insert a location!");
            } else {
              console.error(
                "Failed to fetch weather data / Location not found."
              );
            }
          } catch (error) {
            console.error(
              "An error occurred while fetching weather data: " + error
            );
          }
        }

        function createBasicInfo(country, city, region, time_zone, local_time) {
          const basicInfoDiv = document.getElementById("basic-info-div");

          const basicInfoCountry = document.createElement("p");
          basicInfoCountry.textContent = "Country: " + country;

          const basicInfoCity = document.createElement("p");
          basicInfoCity.textContent = "City: " + city;

          const basicInfoRegion = document.createElement("p");
          basicInfoRegion.textContent = "Region: " + region;

          const basicInfoTimeZone = document.createElement("p");
          basicInfoTimeZone.textContent = "Time Zone: " + time_zone;

          const basicInfoLocalTime = document.createElement("p");
          basicInfoLocalTime.textContent = "Local Time: " + local_time;

          console.log("Before appending basicInfoCountry");
          basicInfoDiv.appendChild(basicInfoCountry);
          console.log("After appending basicInfoCountry");
          basicInfoDiv.appendChild(basicInfoCity);
          basicInfoDiv.appendChild(basicInfoRegion);
          basicInfoDiv.appendChild(basicInfoTimeZone);
          basicInfoDiv.appendChild(basicInfoLocalTime);
        }

        function createGridMain(condition, image, date, max, avg, min) {
          const mainContainer = document.getElementById("main-container");

          const gridContainer = document.createElement("div");
          gridContainer.setAttribute("id", "grid-card");
          gridContainer.classList.add("grid-card");

          const dateText = document.createElement("p");
          dateText.textContent = date;

          const meteoText = document.createElement("label");
          meteoText.textContent = condition;

          const mintemp = document.createElement("p");
          mintemp.textContent = "Min Temp: " + min;

          const maxtemp = document.createElement("p");
          maxtemp.textContent = "Max Temp: " + max;

          const avgtemp = document.createElement("p");
          avgtemp.textContent = "Avg Temp: " + avg;

          const meteoImg = document.createElement("img");
          meteoImg.src = image;

          mainContainer.appendChild(gridContainer);
          gridContainer.appendChild(dateText);
          gridContainer.appendChild(meteoImg);
          gridContainer.appendChild(meteoText);
          gridContainer.appendChild(maxtemp);
          gridContainer.appendChild(avgtemp);
          gridContainer.appendChild(mintemp);
        }

        function clearMain() {
          const main = document.getElementById("main");
          main.innerHTML = "";
        }
      });

      const response = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=" +
          "8f008e0db7f140f5817142724232810&q=" +
          location +
          "&days=10",
        {
          mode: "cors",
        }
      );

      if (response.ok) {
        const data = await response.json();
        const forecast = data.forecast.forecastday;

        console.log(data);

        clearBasicInfo();

        createBasicInfo(
          data.location.country,
          data.location.name,
          data.location.region,
          data.location.tz_id,
          data.location.localtime
        );

        clearMainContainer();

        for (let i = 0; i < 3 && i < forecast.length; i++) {
          createGridMain(
            forecast[i].day.condition.text,
            forecast[i].day.condition.icon,
            forecast[i].date,
            forecast[i].day.maxtemp_c,
            forecast[i].day.avgtemp_c,
            forecast[i].day.mintemp_c
          );
        }
      } else if (location === "") {
        console.error("Please, insert a location!");
      } else {
        console.error("Failed to fetch weather data / Location not found.");
      }
    } catch (error) {
      console.error("An error occurred while fetching weather data: " + error);
    }
  }

  function createBasicInfo(country, city, region, time_zone, local_time) {
    const basicInfoDiv = document.getElementById("basic-info-div");

    const basicInfoCountry = document.createElement("p");
    basicInfoCountry.textContent = "Country: " + country;

    const basicInfoCity = document.createElement("p");
    basicInfoCity.textContent = "City: " + city;

    const basicInfoRegion = document.createElement("p");
    basicInfoRegion.textContent = "Region: " + region;

    const basicInfoTimeZone = document.createElement("p");
    basicInfoTimeZone.textContent = "Time Zone: " + time_zone;

    const basicInfoLocalTime = document.createElement("p");
    basicInfoLocalTime.textContent = "Local Time: " + local_time;

    basicInfoDiv.appendChild(basicInfoCountry);
    basicInfoDiv.appendChild(basicInfoCity);
    basicInfoDiv.appendChild(basicInfoRegion);
    basicInfoDiv.appendChild(basicInfoTimeZone);
    basicInfoDiv.appendChild(basicInfoLocalTime);
  }

  function createGridMain(condition, image, date, max, avg, min) {
    const mainContainer = document.getElementById("main-container");

    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "grid-card");
    gridContainer.classList.add("grid-card");

    const dateText = document.createElement("p");
    dateText.classList.add("date");
    dateText.textContent = date;

    const meteoText = document.createElement("label");
    meteoText.textContent = condition;

    const mintemp = document.createElement("p");
    mintemp.classList.add("min");
    mintemp.textContent = "Min Temp: " + min;

    const maxtemp = document.createElement("p");
    maxtemp.textContent = "Max Temp: " + max;

    const avgtemp = document.createElement("p");
    avgtemp.textContent = "Avg Temp: " + avg;

    const meteoImg = document.createElement("img");
    meteoImg.src = image;

    mainContainer.appendChild(gridContainer);
    gridContainer.appendChild(dateText);
    gridContainer.appendChild(meteoImg);
    gridContainer.appendChild(meteoText);
    gridContainer.appendChild(maxtemp);
    gridContainer.appendChild(avgtemp);
    gridContainer.appendChild(mintemp);
  }

  function clearBasicInfo() {
    const basicInfo = document.getElementById("basic-info-div");
    basicInfo.innerHTML = "";
  }

  function clearMainContainer() {
    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = "";
  }
});
