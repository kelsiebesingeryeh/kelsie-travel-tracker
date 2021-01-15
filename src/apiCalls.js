let apiCalls = {
    getATraveler() {
     return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
        .then(response => response.json())
        .then(traveler => console.log(traveler))
        .catch(error => console.log(error))
    },

    getAllTravelers() {
        return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
        .then(response => response.json())
        .then(travelers => console.log(travelers))
        .catch(error => console.log(error))
    },

    getAllTrips() {
        return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
        .then(response => response.json())
        .then(trips => console.log(trips))
        .catch(error => console.log(error))
    },

    getAllDestinations() {
        return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
        .then(response => response.json())
        .then(destinations => console.log(destinations))
        .catch(error => console.log(error))
    },
}
    // requestNewTrip() {
    //     return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             id: trip.id,
    //             userID: user.id,
    //             destinationID: destination.id,
    //             travelers: trips.travelers,
    //             date: trips.date,
    //             duration: trips.duration,
    //             status: trips.status,
    //             suggestedActivities: trips.uggestedActivities
    //         }),
    //     })


// getAllData() {
//     return Promise.all([apiCalls.getATraveler(), apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations()])
// }

// COMMENTS - NEED TO DO
// need to figure out post request - what to do with the body
// need to figure out promise.all - how to run this
// figure out if apiCalls should be an object or a class