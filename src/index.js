// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Trip from './trip';
import Traveler from './traveler';
import ApiCall from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let tripsArea = document.querySelector('.travel-card-container');

let travelerApi,
  destinationApi,
  tripApi,
  trip,
  destination,
  traveler,
  userTrip,
  userTrips,
  travelerDestinations;
let allTrips = [];
// let allDestinations = [];

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

   return Promise.all([travelerData, destinationData, tripData])
    .then(data => {
        let travelerInfo = data[0];
        let destinationInfo = data[1];
        let tripInfo = data[2];
        tripInfo.forEach(trip => {
            userTrip = new Trip(trip)                                                                                                          
            allTrips.push(userTrip)
        })  
        buildPage(travelerInfo, destinationInfo, tripInfo);
    })
    .catch(error => console.log(error))
}

function buildPage(travelers, destinations, trips) {
    createTravelerProfile(travelers, destinations, trips);
    displayTrips(userTrips)
}

function createTravelerProfile(travelers, destinations, trips) {
  let userID = Math.floor(Math.random() * 49) + 1;
  let newTraveler = travelers.find((traveler) => traveler.id === Number(userID));
  traveler = new Traveler(userID, newTraveler.name);
}



function displayTrips(tripsList) {
    tripsArea.innerHTML = '';
    tripsList.forEach(trip => {
        let tripsHTML = `
        <div class='info-card'>
            <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
            <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
            <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
            <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
        </div>
    `;
    tripsArea.insertAdjacentHTML('beforeend', tripsHTML)
    })
}