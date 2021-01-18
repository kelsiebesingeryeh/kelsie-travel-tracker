class ApiCall {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }
  getRequest() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => (data = data[this.name]))
      .catch((error) => console.log(error));
  }
}
//   postRequest(newPost, onSuccess) {
//       return fetch(this.url, {
//           method: "POST",
//           headers: {
//               'Content-Type: application/json'
//           },
//           body: JSON.stringify(newPost)
//       })
//       .then(response => response.json())
//       .then(json => {
//           console.log(json);
//           onSuccess();
//       })
//       .catch(error => console.log(error))
//   }


//   //         body: JSON.stringify({
//   //             id: <number>,
//   //             userID: <number>,
//   //             destinationID: <number>,
//   //             travelers: <number>,
//   //             date: <string 'YYYY/MM/DD'>,
//   //             duration: <number>,
//   //             status: <string 'approved' or 'pending'>,
//   //             suggestedActivities: <array of strings>
//   //             }),
//   //     };
//   // }
// }

export default ApiCall;

// getAllTravelers() {
//     return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
//     .then(response => response.json())
//     .then(travelers => console.log(travelers))
//     .catch(error => console.log(error))
// }

// getAllTrips() {
//     return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
//     .then(response => response.json())
//     .then(trips => console.log(trips))
//     .catch(error => console.log(error))
// }

// getAllDestinations() {
//     return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
//     .then(response => response.json())
//     .then(destinations => console.log(destinations))
//     .catch(error => console.log(error))
// }
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

//