class Traveler {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // this.username = username;
        // this.password = password;
    }

//  calculateTotalSpent() {
    //need access to the trip and destination class 
//   let totalLodging;
//   let totalFlight;
//   return trips.reduce((total, value) => {
//     destinations.forEach(place => {
//     if (value.destinationID === place.id) {
//       totalLodging = (place.estimatedLodgingCostPerDay * value.duration) * value.travelers
//       totalFlight = (place.estimatedFlightCostPerPerson * value.travelers)
//     }
//     })
//     total += (totalLodging + totalFlight)
//     return total;
//   }, 0)
// }

}

export default Traveler;