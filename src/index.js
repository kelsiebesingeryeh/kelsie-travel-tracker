// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Trip from './trip';
import Traveler from './traveler';
import Destination from './destination';
import ApiCall from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let travelerApi, destinationApi, tripApi;

window.onload = getAllData();

function getAllData() {
    travelerApi = new ApiCall('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers', 'travelers');
    destinationApi = new ApiCall("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations", 'destinations');
    tripApi = new ApiCall("https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips", 'trips');
    onLoad();
}

function onLoad() {
    let travelerData = travelerApi.getRequest();
    let destinationData = destinationApi.getRequest();
    let tripData = tripApi.getRequest();

    Promise.all([travelerData, destinationData, tripData])
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

