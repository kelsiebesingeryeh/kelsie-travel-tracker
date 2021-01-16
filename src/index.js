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
let allDestinations = [];

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
        destinationInfo.forEach(destination => {
            travelerDestinations = new Destination(destination)
            allDestinations.push(travelerDestinations)
        })
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
    // displayTrips(trips)
}

function createTravelerProfile(travelers, destinations, trips) {
  let userID = Math.floor(Math.random() * 49) + 1;
  let newTraveler = travelers.find((traveler) => traveler.id === Number(userID));
  traveler = new Traveler(userID, newTraveler.name);
  userTrips = allTrips.filter((traveler) => traveler.userID === Number(userID));
  getTravelersDestinations()
}

function getTravelersDestinations() {
  return allDestinations.reduce((total, destination) => {
    userTrips.forEach((trip) => {
      if (destination.id === trip.destinationID) {
        total.push(destination);
      }
    });
    return total;
  }, []);
}

// displayTrips(tripsList) {
//     tripsArea.innerHTML = ''
//     tripsList.forEach(trip => {
//         tripsArea.insertAdjacentHTML('afterbegin', `div id=`)
//     })
// }
