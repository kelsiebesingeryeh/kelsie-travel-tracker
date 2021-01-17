class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = this.formatDate(tripData.date);
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = [];
    this.destination = destinationData;
  }

  calculateEstimatedTripCost() {
    console.log(this.date);
    let totalLodging =
      this.destination.estimatedLodgingCostPerDay *
      this.duration *
      this.travelers;
    let totalFlight =
      this.destination.estimatedFlightCostPerPerson * this.travelers;
    let totalTripCost = totalLodging + totalFlight;
    let agentFee = totalTripCost * 0.1;
    return totalTripCost + agentFee;
  }

  formatDate(tripDate) {
    let today = new Date(tripDate);
    let month = "" + (today.getMonth() + 1);
    let day = "" + today.getDate();
    let year = today.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }

    if (day.length < 2) {
      day = "0" + day;
    }

    return [year, month, day].join('/');
  }
}
export default Trip;