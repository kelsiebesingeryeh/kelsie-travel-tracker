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
let yearCost = document.querySelector('.year-cost')

let travelerApi,
  destinationApi,
  tripApi,
  trip,
  destination,
  traveler,
  userTrip,
  userTrips,
  travelerDestinations;

window.onload = getAllData();

function getAllData() {
    travelerApi = new ApiCall('http://localhost:3001/api/v1/travelers', 'travelers');
    destinationApi = new ApiCall("http://localhost:3001/api/v1/destinations", 'destinations');
    tripApi = new ApiCall("http://localhost:3001/api/v1/trips", 'trips');
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
        buildPage(travelerInfo, tripInfo, destinationInfo);
    })
    .catch(error => console.log(error))
}

function buildPage(travelerInfo, tripInfo, destinationInfo) {
  createTravelerProfile(travelerInfo, tripInfo, destinationInfo);
  displayTrips(traveler);
  yearCost.innerText = `Your 2020 trip cost is: $${traveler.calculateTotalSpent("2020")}`;
}

function createTravelerProfile(travelerInfo, tripInfo, destinationInfo) {
 let userID = Math.floor(Math.random() * 49) + 1;
 let newTraveler = travelerInfo.find((traveler) => traveler.id === Number(userID));
 traveler = new Traveler(newTraveler, tripInfo, destinationInfo);
}

function displayTrips(tripsList) {
    tripsArea.innerHTML = '';
    tripsList.trips.forEach(trip => {
        let tripsHTML = `
        <div class='info-card'>
            <div class="image-styling">
                <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
            </div>
            <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
            <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
            <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
            <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
            <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
        </div>
    `;
    tripsArea.insertAdjacentHTML('beforeend', tripsHTML)
    })
}


 // tripInfo.forEach(trip => {
        //     userTrip = new Trip(trip, destintation)                                                                                                          
        //     allTrips.push(userTrip)
        // })  