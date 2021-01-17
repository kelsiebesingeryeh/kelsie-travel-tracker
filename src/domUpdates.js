// let domUpdates = {

//     displayTrips(tripsList) {
//         tripsArea.innerHTML = '';
//         tripsList.trips.forEach(trip => {
//             let tripsHTML = `
//         <div class='info-card'>
//             <div class="image-styling">
//                 <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
//             </div>
//             <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
//             <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
//             <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
//             <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
//             <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
//         </div>`;
//             tripsArea.insertAdjacentHTML('beforeend', tripsHTML)
//         })
//     },

//     displayPendingTrips() {
//         tripsArea.classList.add('hidden');
//         pendingTripsArea.classList.remove("hidden");
//         allTripsText.classList.add('hidden');
//         yearCost.classList.add('hidden');
//         let pendingTripsList = traveler.getPendingTrips();

//         if (pendingTripsList.length === 0) {
//             pendingTripsText.innerText = 'You Have No Pending Trips!'
//         } else {
//             pendingTripsArea.innerHTML = '';
//             pendingTripsList.forEach(trip => {
//                 let pendingTripsHTML = `
//            <div class='info-card'>
//                <div class="image-styling">
//                    <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
//                </div>
//                <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
//                <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
//                <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
//                <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
//                <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
//            </div>
//        `;
//                 pendingTripsArea.insertAdjacentHTML('beforeend', pendingTripsHTML)
//             })
//         }
//     },

//     displayUpcomingTrips() {
//         tripsArea.classList.add("hidden");
//         upcomingTripsArea.classList.remove("hidden");
//         allTripsText.classList.add("hidden");
//         yearCost.classList.add("hidden");
//         let upcomingTripsList = traveler.getUpcomingTrips();

//         if (upcomingTripsList.length === 0) {
//             upcomingTripsText.innerText = "You Have No Upcoming Trips!";
//         } else {
//             upcomingTripsArea.innerHTML = "";
//             upcomingTripsList.forEach((trip) => {
//                 let upcomingTripsHTML = `
//            <div class='info-card'>
//                <div class="image-styling">
//                    <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
//                </div>
//                <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
//                <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
//                <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
//                <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
//                <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
//            </div>
//        `;
//                 upcomingTripsArea.insertAdjacentHTML("beforeend", upcomingTripsHTML);
//             });
//         }
//     },

//     displayPastTrips() {
//         tripsArea.classList.add("hidden");
//         pastTripsArea.classList.remove("hidden");
//         allTripsText.classList.add("hidden");
//         yearCost.classList.add("hidden");
//         let pastTripsList = traveler.getPastTrips();

//         if (pastTripsList.length === 0) {
//             pastTripsText.innerText = "You Have No Upcoming Trips!";
//         } else {
//             pastTripsArea.innerHTML = "";
//             pastTripsList.forEach((trip) => {
//                 let pastTripsHTML = `
//            <div class='info-card'>
//                <div class="image-styling">
//                    <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
//                </div>
//                <p id="${trip.destination.destination}-destination" class="trip-date">Destination: ${trip.destination.destination}</p>
//                <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
//                <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
//                <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
//                <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
//            </div>`;
//                 pastTripsArea.insertAdjacentHTML("beforeend", pastTripsHTML);
//             });
//         }
//     }

// }

// export default domUpdates;