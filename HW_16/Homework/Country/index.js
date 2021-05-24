"use strict";

const makeRequest = ({url, method, body},  callback) => {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.responseType = 'json';
    xhr.send(body);

    xhr.onload = function() {
        callback(xhr.response);
    };
};

const selectCity = document.getElementById('city');
var requestUrl = 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json';

makeRequest({url: requestUrl, method: 'GET'}, (countries) => {
    countryFunction(countries);
    
    document.querySelector('#country').addEventListener('change', function() {
        const chosenCountry = this.value;
        selectCity.innerHTML = '';
        countries[chosenCountry].forEach((city) => {
            const optionCity = document.createElement('option');
            optionCity.innerHTML = city; 
            selectCity.append(optionCity);
        });
    });
});

function countryFunction(jsonObj) {
  for (var key in jsonObj){
    var countryName = document.createElement('option');
    countryName.innerHTML = key;
    country.append(countryName);
    
  }
}








