class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = [];
    this.destination = destinationData;
  }

  calculateEstimatedTripCost() {
      console.log(this.destination)
      let totalLodging = (this.destination.estimatedLodgingCostPerDay * this.duration) * this.travelers;
      let totalFlight = (this.destination.estimatedFlightCostPerPerson * this.travelers);
      let totalTripCost = totalLodging + totalFlight
      let agentFee = (totalTripCost * .10)
      return totalTripCost + agentFee
  }


//    calculateTotalSpent() {
//     console.log('hi', tripData)
//     let totalLodging;
//     let totalFlight;
//     return tripData.reduce((total, value) => {
//       destinationData.forEach((place) => {
//         if (value.destinationID === place.id) {
//           totalLodging =
//             place.estimatedLodgingCostPerDay * value.duration * value.travelers;
//           totalFlight = place.estimatedFlightCostPerPerson * value.travelers;
//         }
//       });
//       total += totalLodging + totalFlight;
//       return total;
//     }, 0);
//   }
}

//  userTrips = allTrips.filter((traveler) => traveler.userID === Number(userID));
//   getTravelersDestinations()  // move into trips class

// function getTravelersDestinations() {
//   return allDestinations.reduce((total, destination) => {
//     userTrips.forEach((trip) => {
//       if (destination.id === trip.destinationID) {
//         total.push(destination);
//       }
//     });
//     return total;
//   }, []);
 //move function into trips class

export default Trip;