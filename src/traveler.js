import Trip from './trip';

class Traveler {
  constructor(travelerData, tripData, destinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.tripData = tripData;
    this.destinationData = destinationData;
    this.trips = this.getAllTravelersTrips() || [];
  }

  //METHODS TO THINK ABOUT
  // - sortTrips - we need to sort them by date?
  // get present trips
  // validate password
  // validate login
  // chose a user?
  // login guest?

  getAllTravelersTrips() {
    if (this.tripData.length > 0) {
      return this.tripData.reduce((total, trip) => {
        this.destinationData.forEach((destination) => {
          if (
            this.id === trip.userID &&
            trip.destinationID === destination.id
          ) {
            total.push(new Trip(trip, destination));
          }
        });
        return total;
      }, []);
    }
  }

  calculateTotalSpent(year) {
    let totalLodging;
    let totalFlight;
    let agentFee;
    let totalTripCost = this.trips.reduce((total, value) => {
      if (value.date.includes(year)) {
        totalLodging =
          value.destination.estimatedLodgingCostPerDay *
          value.duration *
          value.travelers;
        totalFlight =
          value.destination.estimatedFlightCostPerPerson * value.travelers;
        total += totalLodging + totalFlight;
      }
      return total;
    }, 0);
    agentFee = totalTripCost * 0.1;
    return agentFee + totalTripCost;
  }

  getPendingTrips() {
    return this.trips.filter((trip) => trip.status === "pending");
  }

  getCurrentTrips() {
    this.trips.reduce((total, value) => {
      let startDate = new Date(value.date);
      startDate.setDate();
      // let endDate = startDate.setDate(startDate.getDate() - value.duration);
      // console.log(endDate);
      return total;
    }, []);
    // startdate of the trip, then you need to add the trip duration in order to get the start and end date - then you have to compare if your
    // current date falls inbetween either one of those dates
    // calculate date range - getting the start date of the trip and calculating the end date based on duration, then
    // does the current date fall inbetween the duration? if it does show the current trips
  }

  getPastTrips() {
    return this.trips.reduce((total, value) => {
      let today = new Date();
      let endDate = new Date(value.date);
      endDate.setDate(endDate.getDate() + value.duration)
      if (endDate < today) {
          console.log(endDate)
        total.push(value);
      }
      return total;
    }, []);
  }

  getUpcomingTrips() {
    return this.trips.reduce((total, value) => {
      let today = new Date();
      let startDate = new Date(value.date);
      if (startDate > today) {
        total.push(value);
      }
      return total;
    }, []);
  }
}



export default Traveler;



// function updateDate(event) {
//   today = new Date(event.target.value).toDateString();
//   hotel.date = today;
//   hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
//   displayAvailableRooms();
// }