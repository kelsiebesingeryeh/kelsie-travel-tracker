import './css/base.scss';
import Trip from './trip';
import Traveler from './traveler';
import ApiCall from './apiCalls';
import domUpdates from './domUpdates';

let tripsArea = document.querySelector('.travel-card-container');
let yearCost = document.querySelector('.year-cost')
let allTripsText = document.querySelector(".all-trips");
let destinationsList = document.querySelector(".destinations-list");

let pendingTrips = document.querySelector('.pending-trips');
let pendingTripsArea = document.querySelector(".pending-trips-area");
let pendingTripsText = document.querySelector(".pending-trips-text");

// let homeButton = document.querySelector('.home');
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
let durationInput = document.querySelector('.duration');
let travelersInput = document.querySelector('.travelers');
let startDate = document.querySelector(".date-picker");
let estimatedTripCost = document.querySelector(".estimated-trip-cost");
let loginSubmitButton = document.querySelector(".submit-button");
let userView = document.querySelector(".user-view");
let loginPage = document.querySelector(".login-page");
let navbar = document.querySelector(".nav-bar");

let travelerApi;
let destinationApi;
let tripApi;
let traveler;
let tripInfo;
let destinationInfo;
let trip;
let singleTraveler;
let singleInfo;

window.onload = getAllData();

pendingTrips.addEventListener("click", displayPendingTrips);
upcomingTrips.addEventListener("click", displayUpcomingTrips);
pastTrips.addEventListener("click", displayPastTrips);
currentTrips.addEventListener('click', displayCurrentTrips)
bookTravelButton.addEventListener("click", () => {
    displayEstimatedCosts(event);
});
loginSubmitButton.addEventListener('click', () => {
    userView.classList.remove("hidden");
    loginPage.classList.add("hidden");
    navbar.classList.remove('hidden');
    getAllData();
});
// homeButton.addEventListener("click", returnHome);

function getAllData() {
    travelerApi = new ApiCall('http://localhost:3001/api/v1/travelers', 'travelers');
    destinationApi = new ApiCall("http://localhost:3001/api/v1/destinations", 'destinations');
    tripApi = new ApiCall("http://localhost:3001/api/v1/trips", 'trips');
    singleTraveler = new ApiCall(`http://localhost:3001/api/v1/travelers/1`);
    onLoad();
}

function onLoad() {
    let travelerData = travelerApi.getRequest();
    let destinationData = destinationApi.getRequest();
    let tripData = tripApi.getRequest();
    let singleData = singleTraveler.getRequest();
    console.log(singleData)

    return Promise.all([travelerData, destinationData, tripData, singleData])
        .then(data => {
            console.log(data)
            let travelerInfo = data[0][0];
            console.log(travelerInfo)
            destinationInfo = data[1];
            tripInfo = data[2];
            singleInfo = data[3];
            console.log(singleInfo)
            buildPage(travelerInfo, tripInfo, destinationInfo, singleData);
            fillDropdown();
        })
        .catch(error => console.log(error))
}

function fillDropdown() {
    let sortedDestinations = destinationInfo.sort((a, b) => {
        if (a.destination < b.destination) {
            return -1
        }
    })
    sortedDestinations.forEach((destination) => {
        let opt = document.createElement("option");
        opt.innerHTML = destination.destination;
        opt.value = destination.destination;
        destinationsList.appendChild(opt);
    });
}

function buildPage(travelerInfo, tripInfo, destinationInfo) {
    createTravelerProfile(travelerInfo, tripInfo, destinationInfo);
    displayTrips(traveler);
    yearCost.innerText = `Your 2020 trip cost is: $${traveler.calculateTotalSpent("2020")}`;
}

function createTravelerProfile(travelerInfo, tripInfo, destinationInfo) {
    // let userID = Math.floor(Math.random() * 49) + 1;
    // let newTraveler = travelerInfo.find((traveler) => traveler.id === Number(userID));
    traveler = new Traveler(travelerInfo, tripInfo, destinationInfo);
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
    hide(pastTripsArea);
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


// function returnHome() {
//   console.log("home");
//   getAllData();
// }