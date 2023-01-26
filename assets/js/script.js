// Declare varialbe to store the searched city
var city = '';


// Variable declaration
var searchCity = $('#search-city');
var searchButton = $('#search-button');
var currentCity = $('#current-city-name');
var currentTemp = $('#current-temp');
var currentHumidity = $('#current-humidity');
var currentWindSpeed  = $('#current-winds');
var storedCity = [];


// Set-up the API key
var APIKey = '71f97b0f1a6431a0559b0e92de9df1cb';


// Search for city
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==''){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

// Call server side to get weather data


// Parse data to display current weather, city name, date, and weather icons.


// Display 5-day forecast for the current city.


// Display previous searches in #search-history


// Render function


// Click Handlers