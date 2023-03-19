const sequelize = require('./config/connection');

// Declare varialbe to store the searched city
const city = '';

// Variable declaration
const searchCity = '#search-city';
const searchButton = '#search-button';
const currentCity = '#current-city-name';
const currentTemp = '#current-temp';
const currentHumidity = '#current-humidity';
const currentWindSpeed  = '#current-winds';
const storedCity = [];

// Set-up the API key
const APIKey = APIKey; // set up in .env file

// Searches to see if city exists in local storage
function find(city) {
    for (var i=0; i<storedCity.length; i++){
        if(city.toUpperCase()===storedCity[i]){
            return -1;
        }
    }
    return 1;
};

// Displays current and future weather to user based on form input
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==''){
        city=searchCity.val().trim();
        currentWeather(city);
    }
};

// Call server side to get weather data
function currentWeather(city){
    let queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;

};
// Parse data to display current weather, city name, date, and weather icons.


// Display 5-day forecast for the current city.


// Display previous searches in #search-history


// Render function


// Click Handlers