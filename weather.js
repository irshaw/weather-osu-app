
var APIkey = "5df8ea44c4bcb7211481e4ce56045ffb"


// fetch and display for weather 
let weather = {
  apiKey: "5df8ea44c4bcb7211481e4ce56045ffb",
  getWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q"={name}&appid={"5df8ea44c4bcb7211481e4ce56045ffb"}
    )
    .then((data) => this.displayWeather(data));
  },
// use to display tmep and humidity by city 
  showWeather: function (data) {
    const { name } = data;
    const { temp, humidity } = data.main;
    document.querySelector("city") = name;
    document.querySelector("temp") = temp + "°F";
    document.querySelector("humidity")= "Humidity: " + humidity + "%";
    
    }, // search input for searchbar 
    search: function () {
      this.getWeather(document.querySelector("search-field")
  },
  };
  // on click search for the city 
document.querySelector("search-button").addEventListener("onclick", function () {
  weather.search();
});


weather.gethWeather();

// display for 5 days 
  

  




