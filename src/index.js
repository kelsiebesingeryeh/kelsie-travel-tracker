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
const allTripsText = document.querySelector(".all-trips");
const destinationsList = document.querySelector(".destinations-list");
const planTripArea = document.querySelector(".plan-trip-area");

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
const bookTripForm = document.querySelector(".book-trip-form");

const userView = document.querySelector(".user-view");
const loginPage = document.querySelector(".login-page");
const navbar = document.querySelector(".nav-bar");

const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerMenuContent = document.querySelector(".hamburger-content");

const mobileHomeButton = document.querySelector('.home-mobile');
const mobileCurrentTripsButton = document.querySelector('.current-trips-mobile');
const mobileUpcomingTripsButton = document.querySelector(".upcoming-trips-mobile");
const mobilePendingTripsButton = document.querySelector(".pending-trips-mobile");
const mobilePastTripsButton = document.querySelector(".past-trips-mobile");

const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

// EVENT LISTENERS
usernameInput.addEventListener('keyup', () => {
    if (passwordInput.value !== '') {
        toggleButton(loginSubmitButton, usernameInput);
    }
})

passwordInput.addEventListener("keyup", () => {
    if (usernameInput.value !== "") {
        toggleButton(loginSubmitButton, passwordInput);
    }
});

currentTrips.addEventListener("click", displayCurrentTrips);
upcomingTrips.addEventListener("click", displayUpcomingTrips);
pendingTrips.addEventListener("click", displayPendingTrips);
pastTrips.addEventListener("click", displayPastTrips);
homeButton.addEventListener("click", returnHome);

calculateTravelButton.addEventListener('click', (event) => {
    event.preventDefault();
    displayEstimatedCosts(event);
    hide(calculateTravelButton);
    show(bookTravelButton);
    show(estimatedTripCost);
    submitTripRequest();
})

bookTravelButton.addEventListener("click", (event) => {
    hide(bookTravelButton);
    show(calculateTravelButton);
    hide(estimatedTripCost);
    updateNewTripBookings(event);
    clearTravelInputs();
});

loginSubmitButton.addEventListener('click', (event) => {
    show(userView);
    show(navbar);
    hide(loginPage);
    show(hamburgerMenu);
    loginUser(event);
});

hamburgerMenu.addEventListener("click", toggleHamburgerMenuDropdown);
mobileHomeButton.addEventListener("click", returnHome);

mobileCurrentTripsButton.addEventListener("click", displayCurrentTrips);
mobileUpcomingTripsButton.addEventListener("click", displayUpcomingTrips);
mobilePendingTripsButton.addEventListener("click", displayPendingTrips);
mobilePastTripsButton.addEventListener("click", displayPastTrips);

function loginUser(event) {
    event.preventDefault();
    chosenUserID = usernameInput.value.split("").splice(8, 3).join("");
    if (usernameInput.value.slice(0, 8) === "traveler" && usernameInput.value.slice(8) > 0 && usernameInput.value.slice(8) <= 50 && passwordInput.value === 'traveler2020') {
        getAllData();
    } else {
        hide(userView);
        show(loginPage);
        hide(navbar);
        displayErrorMessage('You have entered the wrong username or password!');
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

function buildPage(currentUserInfo, tripInfo, destinationInfo) {
    const yearCost2020 = document.querySelector(".year-cost-2020");
    const yearCost2019 = document.querySelector(".year-cost-2019");
    createTravelerProfile(currentUserInfo, tripInfo, destinationInfo);
    domUpdates.displayTrips(traveler, tripsArea);
    yearCost2019.innerText = `Your Total Trip Spend for 2020 is: $${traveler.calculateTotalSpent("2020")}`;
    yearCost2020.innerText = `Your Estimated Trip Spend for 2021 is: $${traveler.calculateTotalSpent("2021")}`;
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

function displayErrorMessage(message) {
    const messages = document.querySelector(".message");
    messages.innerText = message;
}

function clearTravelInputs() {
    durationInput.value = "";
    travelersInput.value = "";
    startDate.value = "";
    destinationsList.selectedIndex = 0;
}

function show(element) {
    element.classList.remove("hidden");
}

function hide(element) {
    element.classList.add("hidden");
}

function toggleButton(button, input) {
    if (input.value === '') {
        button.disabled = true;
        button.classList.add('disabled');
    } else {
        button.disabled = false;
        button.classList.remove('disabled');
    }
}

function toggleHamburgerMenuDropdown() {
    hamburgerMenuContent.classList.toggle("hidden");
}

function displayEstimatedCosts(event) {
    event.preventDefault()
    destinationInfo.forEach(destination => {
        if (destinationsList.value === destination.destination) {
            trip = new Trip(tripInfo, destination);
            let durationValue = durationInput.value;
            let travelersValue = travelersInput.value;
            estimatedTripCost.innerText = `Your Estimated Trip Cost Is: $${trip.calculateEstimatedTripCost(durationValue, travelersValue)}`;
        }
    })
}

function displayPendingTrips() {
    const pendingTripsText = document.querySelector(".pending-trips-text");
    let pendingTripsList = traveler.getPendingTrips();
    domUpdates.displayOtherTrips(pendingTripsList, pendingTripsArea, 'pendingHTML', pendingTripsText, "Pending");
    hide(tripsArea);
    hide(planTripArea);
    hide(upcomingTripsArea);
    show(pendingTripsArea);
    hide(pastTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
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
    hide(planTripArea);
    show(upcomingTripsArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
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
    hide(planTripArea);
    hide(pendingTripsArea);
    show(pastTripsArea);
    hide(upcomingTripsArea);
    hide(currentTripsArea);
    hide(allTripsText);
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
    hide(tripsArea);
    hide(planTripArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(upcomingTripsArea);
    show(currentTripsArea);
    hide(allTripsText);
}

function returnHome() {
    domUpdates.displayTrips(traveler, tripsArea);
    allTripsText.innerHTML = "All Trips";
    show(tripsArea);
    show(planTripArea);
    hide(pendingTripsArea);
    hide(pastTripsArea);
    hide(upcomingTripsArea);
    hide(currentTripsArea);
    show(allTripsText);
}