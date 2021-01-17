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
        totalLodging = value.destination.estimatedLodgingCostPerDay * value.duration
        totalFlight = value.destination.estimatedFlightCostPerPerson;
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
    return this.trips.reduce((total, value) => {
      let today = new Date();
      let startDate = new Date(value.date);
      let endDate = new Date(value.date);
      endDate.setDate(endDate.getDate() + value.duration);
      if (startDate < today && endDate > today) {
        total.push(value);
      }
      return total;
    }, []);
  }

  getPastTrips() {
    return this.trips.reduce((total, value) => {
      let today = new Date();
      let endDate = new Date(value.date);
      endDate.setDate(endDate.getDate() + value.duration)
      if (endDate < today) {
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