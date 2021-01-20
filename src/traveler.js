import Trip from './trip';

class Traveler {
  constructor(travelerData, tripData, destinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.tripData = tripData;
    this.destinationData = destinationData;
    this.trips = this.getAllTravelersTrips() || [];
  }

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
    let totalTripCost = this.trips.reduce((total, trip) => {
      if (trip.date.includes(year)) {
        totalLodging = trip.destination.estimatedLodgingCostPerDay * trip.duration;
        totalFlight = trip.destination.estimatedFlightCostPerPerson;
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
    return this.trips.reduce((total, trip) => {
      let today = new Date();
      let startDate = new Date(trip.date);
      let endDate = new Date(trip.date);
      endDate.setDate(endDate.getDate() + trip.duration);
      if (startDate < today && endDate > today) {
        total.push(trip);
      }
      return total;
    }, []);
  }

  getPastTrips() {
    return this.trips.reduce((total, trip) => {
      let today = new Date();
      let endDate = new Date(trip.date);
      endDate.setDate(endDate.getDate() + trip.duration);
      if (endDate < today) {
        total.push(trip);
      }
      return total;
    }, []);
  }

  getUpcomingTrips() {
    return this.trips.reduce((total, trip) => {
      let today = new Date();
      let startDate = new Date(trip.date);
      if (startDate > today) {
        total.push(trip);
      }
      return total;
    }, []);
  }

}

export default Traveler;