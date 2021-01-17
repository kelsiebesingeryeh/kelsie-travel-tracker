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

    calculateTotalSpent(year) {
        let totalLodging;
        let totalFlight;
        let agentFee;
        let totalTripCost = this.trips.reduce((total, value) => {
            if (value.date.includes(year)) {
                totalLodging = value.destination.estimatedLodgingCostPerDay * value.duration * value.travelers;
                totalFlight = value.destination.estimatedFlightCostPerPerson * value.travelers;
                total += totalLodging + totalFlight
            }
            return total;
        }, 0);
        agentFee = totalTripCost * .10
        return (agentFee + totalTripCost)
    }

    getPendingTrips() {
        return this.trips.filter((trip) => trip.status === "pending");
    }

    getCurrentTrips() {
        let today = new Date();
        today.setDate(today.getDate() - 10)
        console.log(today)
        // grab todays date - then say if currentTrip + duration - 
        // calculate date range - getting the start date of the trip and calculating the end date based on duration, then 
        // does the current date fall inbetween the duration? if it does show the current trips
    }
}



export default Traveler;




// function updateDate(event) {
//   today = new Date(event.target.value).toDateString();
//   hotel.date = today;
//   hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
//   displayAvailableRooms();
// }