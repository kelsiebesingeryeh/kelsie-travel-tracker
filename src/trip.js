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

  calculateEstimatedTripCost(destination, duration, travelers) {
    let totalLodging =
      destination.estimatedLodgingCostPerDay *
      duration *
      travelers;
    let totalFlight =
      destination.estimatedFlightCostPerPerson * travelers;
    let totalTripCost = totalLodging + totalFlight;
    let agentFee = totalTripCost * 0.1;
    return totalTripCost + agentFee;
  }
}
export default Trip;

// this.date = this.formatDate(tripData.date);

// calculateEstimatedTripCost(destination, duration, travelers) {
//     let totalLodging = (this.destination.estimatedLodgingCostPerDay * this.duration) * this.travelers;
//     let totalFlight = this.destination.estimatedFlightCostPerPerson * this.travelers;
//     let totalTripCost = totalLodging + totalFlight;
//     let agentFee = totalTripCost * 0.1;
//     return totalTripCost + agentFee;
//   }