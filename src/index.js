import './css/base.scss';
import Trip from './trip';
import Traveler from './traveler';
import ApiCall from './apiCalls';
import domUpdates from './domUpdates';

const tripsArea = document.querySelector('.travel-card-container');
const yearCost = document.querySelector(".year-cost");
const allTripsText = document.querySelector(".all-trips");
const destinationsList = document.querySelector(".destinations-list");

const pendingTrips = document.querySelector(".pending-trips");
const pendingTripsArea = document.querySelector(".pending-trips-area");
const pendingTripsText = document.querySelector(".pending-trips-text");

let homeButton = document.querySelector('.home');
let upcomingTrips = document.querySelector(".upcoming-trips");
let upcomingTripsArea = document.querySelector(".upcoming-trips-area");
let upcomingTripsText = document.querySelector(".upcoming-trips-text");

let pastTrips = document.querySelector(".past-trips");
let pastTripsArea = document.querySelector(".past-trips-area");
let pastTripsText = document.querySelector(".past-trips-text");

let currentTrips = document.querySelector(".current-trips");
let currentTripsArea = document.querySelector(".current-trips-area");
let currentTripsText = document.querySelector(".current-trips-text");

let bookTravelButton = document.querySelector('.book-travel-button')
const calculateTravelButton = document.querySelector(".calculate-cost-button");
let durationInput = document.querySelector('.duration');
let travelersInput = document.querySelector('.travelers');
let startDate = document.querySelector(".date-picker");
let estimatedTripCost = document.querySelector(".estimated-trip-cost");
let loginSubmitButton = document.querySelector(".submit-button");
let userView = document.querySelector(".user-view");
let loginPage = document.querySelector(".login-page");
let navbar = document.querySelector(".nav-bar");

let hamburgerMenu = document.querySelector(".hamburger");
let hamburgerMenuContent = document.querySelector(".hamburger-content");


let travelerApi;
let destinationApi;
let tripApi;
let destinationInfo;
let travelerInfo;
let tripInfo;
let singleInfo;
let traveler;
let trip;
let singleTraveler;
let newTrip;
const baseURL = 'http://localhost:3001/api/v1';

window.onload = getAllData();

pendingTrips.addEventListener("click", displayPendingTrips);
upcomingTrips.addEventListener("click", displayUpcomingTrips);
pastTrips.addEventListener("click", displayPastTrips);
currentTrips.addEventListener('click', displayCurrentTrips)
calculateTravelButton.addEventListener('click', () => {
    displayEstimatedCosts(event);
    hide(calculateTravelButton);
    show(bookTravelButton);
    submitTripRequest();
})

bookTravelButton.addEventListener("click", () => {
    hide(bookTravelButton);
    show(calculateTravelButton);
    hide(estimatedTripCost);
    updateNewTripBookings(event);
    clearTravelInputs();
});

loginSubmitButton.addEventListener('click', () => {
    show(userView);
    show(navbar);
    hide(loginPage);
    show(hamburgerMenu);
    getAllData();
    //userName so you can get the digit
    //function that gets the numbers from the userName input - parse through the string to get the digits of the number
    // as you map through the string backwards, looking for numbers - once you have that
    // callgetAllData - pass the ID into that function
});

hamburgerMenu.addEventListener("click", toggleHamburgerMenuDropdown);

function toggleHamburgerMenuDropdown() {
    hamburgerMenuContent.classList.toggle('hidden');
}

// homeButton.addEventListener("click", returnHome);

function getAllData(id = 21) {
    travelerApi = new ApiCall(`${baseURL}/travelers`, "travelers");
    destinationApi = new ApiCall(`${baseURL}/destinations`, 'destinations');
    tripApi = new ApiCall(`${baseURL}/trips`, "trips");
    singleTraveler = new ApiCall(`${baseURL}/travelers/${id}`);
    onLoad(id);
}

function onLoad(id) {
    let travelerData = travelerApi.getRequest();
    let destinationData = destinationApi.getRequest();
    let tripData = tripApi.getRequest();
    let singleData = singleTraveler.getSingleRequest(id);
    
    return Promise.all([travelerData, destinationData, tripData, singleData])
    .then(data => {
        travelerInfo = data[0];
        destinationInfo = data[1];
        tripInfo = data[2];
        singleInfo = data[3];
        buildPage(singleInfo, tripInfo, destinationInfo);
    })
        .catch(error => console.log(error))
}

function updateNewTripBookings(event) {
    event.preventDefault();
    getAllData();
}

function fillDropdown() {

    let sortedDestinations = destinationInfo.sort((a, b) => {
        if (a.destination < b.destination) {
            return -1
        }
    })
    sortedDestinations.forEach((destination) => {
      let destinationsOptions = `<option>${destination.destination}</option>`;
      destinationsList.insertAdjacentHTML("beforeend", destinationsOptions);
    });
}

function clearTravelInputs() {
    durationInput.value = "";
    travelersInput.value = "";
    startDate.value = "";
}

function buildPage(singleInfo, tripInfo, destinationInfo) {
    createTravelerProfile(singleInfo, tripInfo, destinationInfo);
    displayTrips(traveler);
    yearCost.innerText = `Your 2020 trip cost is: $${traveler.calculateTotalSpent("2020")}`;
}

function createTravelerProfile(singleInfo, tripInfo, destinationInfo) {
  fillDropdown();
  traveler = new Traveler(singleInfo, tripInfo, destinationInfo);
}

function makeNewTrip() {
    let travelerInputValue = parseInt(travelersInput.value);
    let durationInputValue = parseInt(durationInput.value);
    let newDateFormat = startDate.value.split("-").join("/");
    let destinationInputValue = filterDestinations()
    let uniqueID = getNewID();

    newTrip = {
      id: uniqueID,
      userID: singleInfo.id,
      destinationID: destinationInputValue,
      travelers: travelerInputValue,
      date: newDateFormat,
      duration: durationInputValue,
      status: "pending",
      suggestedActivities: [],
    };
    return newTrip;
}

function filterDestinations() {
    let destinationBookingID;
    destinationInfo.forEach(destination => {
        if (destination.destination === destinationsList.value) {
            destinationBookingID = destination.id;
        }
    })
    return destinationBookingID;
}

function getNewID() {
    return tripInfo.length + 1
}

function submitTripRequest() {
    let postOption = makeNewTrip();
    let newTripBooking = new ApiCall(
        "http://localhost:3001/api/v1/trips"
    );
    newTripBooking.postRequest(postOption);
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
                    </div>`;
        tripsArea.insertAdjacentHTML('beforeend', tripsHTML)
    })
}

function show(element) {
    element.classList.remove("hidden");
}

function hide(element) {
    element.classList.add("hidden");
}

function displayPendingTrips() {
    hide(tripsArea)
    show(pendingTripsArea);
    hide(upcomingTripsArea);
    hide(pastTripsArea);
    hide(allTripsText)
    hide(yearCost);
    hide(currentTripsArea);
    let pendingTripsList = traveler.getPendingTrips();

    if (pendingTripsList.length === 0) {
        pendingTripsText.innerText = 'You Have No Pending Trips!'
    } else {
        pendingTripsArea.innerHTML = '';
        pendingTripsList.forEach(trip => {
            let pendingTripsHTML = `
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
            pendingTripsArea.insertAdjacentHTML('beforeend', pendingTripsHTML)
        })
    }
}

function displayUpcomingTrips() {
    hide(tripsArea);
    show(upcomingTripsArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(allTripsText);
    hide(yearCost);
    hide(currentTripsArea);
    let upcomingTripsList = traveler.getUpcomingTrips();

    if (upcomingTripsList.length === 0) {
        upcomingTripsText.innerText = "You Have No Upcoming Trips!";
    } else {
        upcomingTripsArea.innerHTML = "";
        upcomingTripsList.forEach((trip) => {
            let upcomingTripsHTML = `
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
            upcomingTripsArea.insertAdjacentHTML("beforeend", upcomingTripsHTML);
        });
    }
}

function displayPastTrips() {
    hide(tripsArea);
    show(pastTripsArea);
    hide(upcomingTripsArea);
    hide(pendingTripsArea);
    hide(allTripsText);
    hide(yearCost);
    hide(currentTripsArea);
    let pastTripsList = traveler.getPastTrips();

    if (pastTripsList.length === 0) {
        pastTripsText.innerText = "You Have No Past Trips!";
    } else {
        pastTripsArea.innerHTML = "";
        pastTripsList.forEach((trip) => {
            let pastTripsHTML = `
           <div class='info-card'>
               <div class="image-styling">
                   <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
               </div>
               <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
               <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
               <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
               <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
               <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
           </div>`;
            pastTripsArea.insertAdjacentHTML("beforeend", pastTripsHTML);
        });
    }
}

function displayCurrentTrips() {
    hide(tripsArea);
    show(currentTripsArea)
    hide(upcomingTripsArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(allTripsText);
    hide(yearCost);
    pastTripsArea.classList.add("hidden");

    let currentTripsList = traveler.getCurrentTrips();

    if (currentTripsList.length === 0) {
        currentTripsText.innerText = "You Have No Current Trips!";
    } else {
        currentTripsArea.innerHTML = "";
        currentTripsList.forEach((trip) => {
            let currentTripsHTML = `
           <div class='info-card'>
               <div class="image-styling">
                   <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
               </div>
               <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
               <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
               <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
               <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
               <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
           </div>`;
            currentTripsArea.insertAdjacentHTML("beforeend", currentTripsHTML);
        });
    }
}

function displayEstimatedCosts(event) {
    event.preventDefault()
    tripInfo.forEach((trip) => {
        destinationInfo.forEach(destination => {
            trip = new Trip(trip, destinationInfo);
            if (destinationsList.value === destination.destination) {
                let durationValue = durationInput.value;
                let travelersValue = travelersInput.value;
                estimatedTripCost.innerText = `Your Estimated Trip Cost Is: $${trip.calculateEstimatedTripCost(destination, durationValue, travelersValue)}`;
            }
        })
    })
}


//console.log(durationInput.value)
//console.log(travelersInput.value);
// console.log(destinationsList.value);
// console.log(startDate.value.split("-").join("/"));


// function returnHome(event) {
// console.log('hi')
//  show(userView);
//  getAllData();
//  hide(currentTripsArea);
//  hide(pendingTripsArea);
//  hide(upcomingTripsArea);
//  hide(pastTripsArea);
// }

// .toLocaleString() - adds commas
// .toLocaleString("en-US", {style: "currency", currency: "USD"})