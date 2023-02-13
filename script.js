//unsplash api
      const searchInput = document.getElementById("searchTerm");
      const searchBtn = document.getElementById("searchButton");
      const imagesContainer = document.getElementById("images-container");

      // Function to fetch photos from the Unsplash API based on a search term
      // add local store for the images

      const fetchPhotos = (searchTerm) => {
        fetch(
          `https://api.unsplash.com/search/photos?client_id=DUM8TbIYndcAruIhX49IMY-89SQd2zLXmzsfrlfxsBo&query=${searchTerm}`
        )
          .then((response) => response.json())
          .then((data) => {
            // Clear the images container
            imagesContainer.innerHTML = "";
            // Loop through the photos and add them to the HTML
            data.results.forEach((photo) => {
              const div = document.createElement("div");
              div.classList.add("card", "m-2");
              div.style.width = "18rem";
              const img = document.createElement("img");
              img.src = photo.urls.regular;
              img.classList.add("card-img-top");
              div.appendChild(img);
              imagesContainer.appendChild(div);
            });
          });
      };

      // Fetch photos when the page loads
      fetchPhotos("");

      // Listen for the search button to be clicked
      searchBtn.addEventListener("click", () => {
        const searchTerm = searchInput.value;
        fetchPhotos(searchTerm);
      });


        // openweather api

      const apiKey = "bf448c820b7abc0e9f0744329593ee18";
      const forecastContainer = document.getElementById('forecast-container');
      const searchButton = document.getElementById("searchButton");

      searchButton.addEventListener('click', () => {
        const cityInput = document.getElementById("searchTerm").value;
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            forecastContainer.innerHTML = '';
            for (let i = 0; i < data.list.length; i += 8) {
              const temperature = data.list[i].main.temp - 273.15;
              const iconCode = data.list[i].weather[0].icon;
              const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
              forecastContainer.innerHTML += `
                <div>
                  <h3>${new Date(data.list[i].dt * 1000).toLocaleDateString()}</h3>
                  <p>Temperature: ${temperature.toFixed(2)}°C</p>
                  <img src="${iconUrl}" alt="Weather Icon">
                  <p>Description: ${data.list[i].weather[0].description}</p>
                </div>
              `;
            }
          });
      });









