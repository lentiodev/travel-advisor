//unsplash api
/*
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

      // map api 

      const citySearch = document.getElementById("searchTerm");
      const searchMap = document.getElementById("searchButton");
      const map = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      searchMap.addEventListener("click", () => {
        const city = citySearch.value;
        const API_KEY = "c7a34fd37a9e46e89b140f5d67bf1b54";
        const API_URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API_KEY}`;
        axios.get(API_URL)
          .then(response => {
            const lat = response.data.results[0].geometry.lat;
            const lng = response.data.results[0].geometry.lng;
            const latLng = [lat, lng];
            map.setView(latLng, 13);
            L.marker(latLng).addTo(map);
          })
          .catch(error => {
            console.log(error)})})

*/

            // google map api

            // Initialize the map
            var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.7749, lng: -122.4194},
		zoom: 12
	});
}

// Search for places
function search() {
	var searchInput = document.getElementById('search-input').value;
	var request = {
		query: searchInput,
		fields: ['name', 'geometry']
	};
	var service = new google.maps.places.PlacesService(map);
	service.textSearch(request, function(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			for (var i = 0; i < results.length; i++) {
				createMarker(results[i]);
			}
			map.setCenter(results[0].geometry.location);
		}
	});
}

// Create a marker for each place
function createMarker(place) {
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});
}










