let domUpdates = {
    displayTrips(tripsList, tripsArea) {
        tripsArea.innerHTML = '';
        tripsList.trips.forEach(trip => {
            let tripsHTML = `
                    <div class='info-card'>
                    <div class="image-styling">
                    <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
                    </div>
                    <div class="info-card-styling">
                        <p id="${trip.destination.destination}-destination" class="trip-destination">${trip.destination.destination}</p>
                        <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
                        <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
                        <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
                        <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
                    </div>
                    </div>`;
            tripsArea.insertAdjacentHTML('beforeend', tripsHTML)
        })
    },

    displayOtherTrips(listType, listArea, listDisplay, pageText, tripType) {
        if (listType.length === 0) {
            pageText.innerText = `You Have No ${tripType} Trips!`
        } else {
            listArea.innerHTML = '';
            listType.forEach(trip => {
                let listDisplay = `
           <div class='info-card'>
               <div class="image-styling">
                   <img src="${trip.destination.image}" alt="${trip.destination.alt}" class="trip-image">
               </div>
               <div class="info-card-styling">
                <p id="${trip.destination.destination}-destination" class="trip-destination">${trip.destination.destination}</p>
                <p id="${trip.date}-date" class="trip-date">Trip Date: ${trip.date}</p>
                <p id="${trip.duration}-duration" class="trip-duration">Trip Duration: ${trip.duration}</p>
                <p id="${trip.travelers}-travelers" class="trip-travelers">Number of Travelers: ${trip.travelers}</p>
                <p id="${trip.status}-status" class="trip-status">Trip Status: ${trip.status}</p>
               </div>
           </div>`;
                listArea.insertAdjacentHTML('beforeend', listDisplay)
            })
        }
    }
}

export default domUpdates;