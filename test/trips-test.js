import chai from "chai";
const expect = chai.expect;

import Trip from "../src/trip.js";
import {
    testUser,
    testTrips,
    testDestinations
} from "./test-data.js";

let tripData1 = testTrips[0]
let destinationData1 = testDestinations[0]
let trip1;

describe("Trip", () => {
    beforeEach(() => {
        trip1 = new Trip(tripData1, destinationData1);
    });

    it("Should have a unique trip id", () => {
        expect(trip1.id).to.eql(91);
    });

    it("Should have a user id", () => {
        expect(trip1.userID).to.eql(5);
    });

    it("Should have a unique destination id", () => {
        expect(trip1.destinationID).to.eql(5);
    });

    it("Should have a number of travelers", () => {
        expect(trip1.travelers).to.eql(1);
    });

    it("Should have a travel date", () => {
        expect(trip1.date).to.eql("2019/04/29");
    });

    it("Should have a travel duration", () => {
        expect(trip1.duration).to.eql(16);
    });

    it("Should have a travel status", () => {
        expect(trip1.status).to.eql("pending");
    });

    it("Should have a property of suggested activities with a default value", () => {
        expect(trip1.suggestedActivities).to.eql([]);
    });

    it("Should have destinations", () => {
        expect(trip1.destination).to.eql({
                id: 5,
                destination: "Madrid, Spain",
                estimatedLodgingCostPerDay: 150,
                estimatedFlightCostPerPerson: 650,
                image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                alt: "city with clear skys and a road in the day time",
            }, {
                id: 35,
                destination: "Anchorage, Alaska",
                estimatedLodgingCostPerDay: 200,
                estimatedFlightCostPerPerson: 100,
                image: "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                alt: "man riding on kayak surrounded by mountains",
            }, {
                id: 48,
                destination: "Dar es Salaam, Tanzania",
                estimatedLodgingCostPerDay: 1200,
                estimatedFlightCostPerPerson: 100,
                image: "https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                alt: "aerial photography of high-rise building",
            },

            {
                id: 16,
                destination: "Bangkok, Thailand",
                estimatedLodgingCostPerDay: 35,
                estimatedFlightCostPerPerson: 988,
                image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
                alt: "ornate buildings with a garden during the day",
            },
        );
    });

    it("Should calculate an estimated trip cost", () => {
        expect(trip1.calculateEstimatedTripCost()).to.eql(3355);
    });

});
