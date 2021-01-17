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
  //  - calculate total spent for the year
  // - get the travelers trips and push them into the trips array
  // - get the travelers destinations - which would live in their trips?
  // get upcoming trips
  // get present trips
  // get past trips
  // validate password
  // validate login
  // chose a user?
  // login guest?

  getAllTravelersTrips() {
      if (this.tripData.length > 0) {
          return this.tripData.reduce((total, trip) => {
            this.destinationData.forEach((destination) => {
              if (this.id === trip.userID && trip.destinationID === destination.id) {
                total.push(new Trip(trip, destination));
              }
            });
            return total;
          }, []);
      }
  }

  calculateTotalSpent() {
    let totalLodging;
    let totalFlight;

    return this.trips.reduce((total, value) => {
      totalLodging =
        value.destination.estimatedLodgingCostPerDay *
        value.duration *
        value.travelers;
      totalFlight =
        value.destination.estimatedFlightCostPerPerson * value.travelers;
      total += totalLodging + totalFlight;
      return total;
    }, 0);
  }

  getPendingTrips() {
    return this.trips.filter(
      (trip) => trip.status === "pending"
    );
  }

  getCurrentTrips(tripsData, destinationData) {

    //if tripdate is current date +- the duration of the trip
    // 
  }
}



export default Traveler;




// function updateDate(event) {
//   today = new Date(event.target.value).toDateString();
//   hotel.date = today;
//   hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
//   displayAvailableRooms();
// }