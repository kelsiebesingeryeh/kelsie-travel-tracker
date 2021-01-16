import Trip from './trip';

class Traveler {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.trips = [];
    }

    //METHODS TO THINK ABOUT
    // - sortTrips - we need to sort them by date?
    //  - calculate total spent for the year
    // - get the travelers trips and push them into the trips array
    // - get the travelers destinations - which would live in their trips?
    // get current trips
    // get present trips
    // get past trips
    // get pending trips
    // validate password
    // validate login
    // chose a user?
    // login guest?


    getAUserID() {
        return this.id
    }

    getAllTravelersTrips(tripData, destinationData) {
        this.trips = tripData.map(trip => new Trip(trip, destinationData));
        return this.trips
    }

    sortTrips() {
    
    }

   calculateTotalSpent() {
    let totalLodging;
    let totalFlight;
    return tripData.reduce((total, value) => {
      destinationData.forEach((place) => {
        if (value.destinationID === place.id) {
          totalLodging =
            place.estimatedLodgingCostPerDay * value.duration * value.travelers;
          totalFlight = place.estimatedFlightCostPerPerson * value.travelers;
        }
      });
      total += totalLodging + totalFlight;
      return total;
    }, 0);
  }
}

//  userTrips = allTrips.filter((traveler) => traveler.userID === Number(userID));
//   getTravelersDestinations() 

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



export default Traveler;