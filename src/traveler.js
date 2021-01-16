import Trip from './trip';

class Traveler {
    constructor(travelerData) {
        this.id = travelerData.id;
        this.name = travelerData.name;
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


    getAllTravelersTrips(tripData, destinationData) {
       this.trips = tripData.reduce((total, trip) => {
          destinationData.forEach((destination) => {
            if (
              this.id === trip.userID &&
              trip.destinationID === destination.id
            ) {
              total.push(new Trip(trip, destination));
            }
          });
          return total;
        }, [])
        return this.trips;
    }


    // sortTrips() {
    
    // }

   calculateTotalSpent(tripData, destinationData) {
     let allTrips = this.getAllTravelersTrips(tripData, destinationData);
     let totalLodging;
     let totalFlight;

     return allTrips.reduce((total, value) => {
         totalLodging = (value.destination.estimatedLodgingCostPerDay * value.duration) * value.travelers;
         totalFlight = (value.destination.estimatedFlightCostPerPerson * value.travelers);
         console.log(totalLodging)
         console.log(totalFlight)
         total += totalLodging + totalFlight
         return total;
     }, 0)
   }

}



export default Traveler;