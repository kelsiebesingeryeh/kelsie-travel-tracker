import './css/base.scss';
import Trip from './trip';
import Traveler from './traveler';
import ApiCall from './apiCalls';
import domUpdates from './domUpdates';

// GLOBAL VARIABLES

let travelerApi;
let destinationApi;
let tripApi;
let destinationInfo;
let travelerInfo;
let tripInfo;
let currentUserInfo;
let traveler;
let currentTraveler;
let newTrip;
let trip;
let chosenUserID;
const baseURL = 'http://localhost:3001/api/v1';

// QUERY SELECTORS

const tripsArea = document.querySelector(".travel-card-container");
const yearCost2020 = document.querySelector(".year-cost-2020");
const yearCost2019 = document.querySelector(".year-cost-2019");
const allTripsText = document.querySelector(".all-trips");
const destinationsList = document.querySelector(".destinations-list");


const pendingTrips = document.querySelector(".pending-trips");
const pendingTripsArea = document.querySelector(".pending-trips-area");

const upcomingTrips = document.querySelector(".upcoming-trips");
const upcomingTripsArea = document.querySelector(".upcoming-trips-area");

const pastTrips = document.querySelector(".past-trips");
const pastTripsArea = document.querySelector(".past-trips-area");

const currentTrips = document.querySelector(".current-trips");
const currentTripsArea = document.querySelector(".current-trips-area");

const homeButton = document.querySelector(".home");
const bookTravelButton = document.querySelector(".book-travel-button");
const calculateTravelButton = document.querySelector(".calculate-cost-button");
const loginSubmitButton = document.querySelector(".submit-button");

const durationInput = document.querySelector(".duration");
const travelersInput = document.querySelector(".travelers");
const startDate = document.querySelector(".date-picker");
const estimatedTripCost = document.querySelector(".estimated-trip-cost");

const userView = document.querySelector(".user-view");
const loginPage = document.querySelector(".login-page");
const navbar = document.querySelector(".nav-bar");

const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerMenuContent = document.querySelector(".hamburger-content");

const mobileCurrentTripsButton = document.querySelector('.current-trips-mobile');
const mobileUpcomingTripsButton = document.querySelector(".upcoming-trips-mobile");
const mobilePendingTripsButton = document.querySelector(".pending-trips-mobile");
const mobilePastTripsButton = document.querySelector(".past-trips-mobile");


// EVENT LISTENERS

currentTrips.addEventListener("click", displayCurrentTrips);
upcomingTrips.addEventListener("click", displayUpcomingTrips);
pendingTrips.addEventListener("click", displayPendingTrips);
pastTrips.addEventListener("click", displayPastTrips);
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
    loginUser(event);
});

hamburgerMenu.addEventListener("click", toggleHamburgerMenuDropdown);
mobileCurrentTripsButton.addEventListener("click", displayCurrentTrips);
mobileUpcomingTripsButton.addEventListener("click", displayUpcomingTrips);
mobilePendingTripsButton.addEventListener("click", displayPendingTrips);
mobilePastTripsButton.addEventListener("click", displayPastTrips);

function toggleHamburgerMenuDropdown() {
    hamburgerMenuContent.classList.toggle('hidden');
}

homeButton.addEventListener("click", returnHome);

function loginUser(event) {
    event.preventDefault();
    const usernameInput = document.querySelector(".username");
    const passwordInput = document.querySelector(".password");
    chosenUserID = usernameInput.value.split("").splice(8, 3).join("");
    if (usernameInput.value.slice(0, 8) === "traveler" && usernameInput.value.slice(8) > 0 && usernameInput.value.slice(8) <= 50 && passwordInput.value === 'traveler2020') {
        getAllData();
    }
}

function getAllData() {
    travelerApi = new ApiCall(`${baseURL}/travelers`, "travelers");
    destinationApi = new ApiCall(`${baseURL}/destinations`, "destinations");
    tripApi = new ApiCall(`${baseURL}/trips`, "trips");
    currentTraveler = new ApiCall(`${baseURL}/travelers/${chosenUserID}`);
    onLoad();
}

function onLoad() {
    let travelerData = travelerApi.getRequest();
    let destinationData = destinationApi.getRequest();
    let tripData = tripApi.getRequest();
    let singleData = currentTraveler.getSingleRequest();

    return Promise.all([travelerData, destinationData, tripData, singleData])
        .then((data) => {
            travelerInfo = data[0];
            destinationInfo = data[1];
            tripInfo = data[2];
            currentUserInfo = data[3];
            buildPage(currentUserInfo, tripInfo, destinationInfo);
        })
        .catch((error) => console.log(error));
}


function updateNewTripBookings(event) {
    event.preventDefault();
    getAllData(chosenUserID);
}

function fillDropdown() {
    
    let sortedDestinations = destinationInfo.sort((a, b) => {
        if (a.destination < b.destination) {
            return -1
        }
    })
    sortedDestinations.forEach((destination) => {
        destinationsList.insertAdjacentHTML("beforeend", '');
        let destinationsOptions = `<option>${destination.destination}</option>`;
        destinationsList.insertAdjacentHTML("beforeend", destinationsOptions);
    });
}

function clearTravelInputs() {
    durationInput.value = "";
    travelersInput.value = "";
    startDate.value = "";
    destinationsList.selectedIndex = 0;
}

function buildPage(currentUserInfo, tripInfo, destinationInfo) {
    createTravelerProfile(currentUserInfo, tripInfo, destinationInfo);
    domUpdates.displayTrips(traveler, tripsArea);
    yearCost2019.innerText = `Your 2019 trip cost is: $${traveler.calculateTotalSpent("2019")}`;
    yearCost2020.innerText = `Your 2020 trip cost is: $${traveler.calculateTotalSpent("2020")}`;
}

function createTravelerProfile(currentUserInfo, tripInfo, destinationInfo) {
    const greetUser = document.querySelector(".greeting");
    greetUser.innerText = `Hello, ${currentUserInfo.name}!`
    traveler = new Traveler(currentUserInfo, tripInfo, destinationInfo);
    fillDropdown();
}

function makeNewTrip() {
    let travelerInputValue = parseInt(travelersInput.value);
    let durationInputValue = parseInt(durationInput.value);
    let newDateFormat = startDate.value.split("-").join("/");
    let destinationInputValue = filterDestinations()
    let uniqueID = getNewID();

    newTrip = {
        id: uniqueID,
        userID: currentUserInfo.id,
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

function show(element) {
    element.classList.remove("hidden");
}

function hide(element) {
    element.classList.add("hidden");
}

function displayEstimatedCosts(event) {
    event.preventDefault()
        destinationInfo.forEach(destination => {
            if (destinationsList.value === destination.destination) {
                trip = new Trip(tripInfo, destination);
                console.log('tripInfo', tripInfo)
                let durationValue = durationInput.value;
                let travelersValue = travelersInput.value;
                estimatedTripCost.innerText = `Your Estimated Trip Cost Is: $${trip.calculateEstimatedTripCost(durationValue, travelersValue)}`;
            }
        })
}

function displayPendingTrips() {
    const pendingTripsText = document.querySelector(".pending-trips-text");
    let pendingTripsList = traveler.getPendingTrips();
    domUpdates.displayOtherTrips(pendingTripsList, pendingTripsArea, 'pendingHTML', pendingTripsText, "pending");
    hide(tripsArea);
    hide(upcomingTripsArea);
    show(pendingTripsArea);
    hide(pastTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
    hide(yearCost2020);
    hide(yearCost2019);
}

function displayUpcomingTrips() {
    const upcomingTripsText = document.querySelector(".upcoming-trips-text");
    let upcomingTripsList = traveler.getUpcomingTrips();
    domUpdates.displayOtherTrips(
        upcomingTripsList,
        upcomingTripsArea,
        "upcomingHTML",
        upcomingTripsText,
        "Upcoming"
    );
    hide(tripsArea);
    show(upcomingTripsArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
    hide(yearCost2020);
    hide(yearCost2019);
}

function displayPastTrips() {
    const pastTripsText = document.querySelector(".past-trips-text");
    let pastTripsList = traveler.getPastTrips();
    domUpdates.displayOtherTrips(
        pastTripsList,
        pastTripsArea,
        "pastHTML",
        pastTripsText,
        "Previous"
    );
    hide(tripsArea);
    hide(pendingTripsArea);
    show(pastTripsArea);
    hide(upcomingTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
    hide(yearCost2020);
    hide(yearCost2019);
}

function displayCurrentTrips() {
    const currentTripsText = document.querySelector(".current-trips-text");
    let currentTripsList = traveler.getCurrentTrips();
    domUpdates.displayOtherTrips(
        currentTripsList,
        currentTripsArea,
        "currentHTML",
        currentTripsText,
        "Current"
    );
    //currentTripsArea.toggle('hidden');
    hide(tripsArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(upcomingTripsArea);
    show(currentTripsArea);
    hide(allTripsText);
    hide(yearCost2020);
    hide(yearCost2019);
}

function returnHome() {
    domUpdates.displayTrips(traveler, tripsArea);
    show(yearCost2020);
    show(yearCost2019);
    show(allTripsText);
    show(tripsArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(upcomingTripsArea);
    hide(currentTripsArea);
}

// .toLocaleString() - adds commas
// .toLocaleString("en-US", {style: "currency", currency: "USD"})


// function displayEstimatedCosts(event) {
//   event.preventDefault();
//   tripInfo.forEach((trip) => {
//     destinationInfo.forEach((destination) => {
//       trip = new Trip(trip, destinationInfo);
//       console.log(traveler);
//       console.log(destinationInfo);

//       // want to match ID from currentTravelerInfo to the tripInfo
//       if (destinationsList.value === destination.destination) {
//         let durationValue = durationInput.value;
//         let travelersValue = travelersInput.value;
//         estimatedTripCost.innerText = `Your Estimated Trip Cost Is: $${trip.calculateEstimatedTripCost(
//           destination,
//           durationValue,
//           travelersValue
//         )}`;
//       }
//     });
//   });
// }