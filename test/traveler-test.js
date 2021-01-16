import chai from "chai";
const expect = chai.expect;

import Traveler from '../src/traveler.js';
import Trip from '../src/trip.js';

import {
    testUser,
    testTrips,
    testDestinations
} from './test-data.js'

let traveler1;

describe("Traveler", () => {
    beforeEach(() => {
        traveler1 = new Traveler(testUser.id, testUser.name, testUser.trips);

    });

    it("Should have a property of trips with a default value", () => {
        expect(traveler1.trips).to.eql([]);
    });

    it("Should have a traveler name", () => {
        expect(traveler1.name).to.eql("Tiffy Grout");
    });

    it("Should have a unique traveler id", () => {
        expect(traveler1.getAUserID()).to.eql(5);
    });

    it("Should populate an array with a travelers trips", () => {
        expect(traveler1.getAllTravelersTrips(testTrips, testDestinations)).to.eql([{
                id: 91,
                userID: 5,
                destinationID: 5,
                travelers: 1,
                date: '2020/04/29',
                duration: 16,
                status: 'approved',
                suggestedActivities: [],
                destination: [{
                        "alt": "city with clear skys and a road in the day time",
                        "destination": "Madrid, Spain",
                        "estimatedFlightCostPerPerson": 650,
                        "estimatedLodgingCostPerDay": 150,
                        "id": 5,
                        "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "man riding on kayak surrounded by mountains",
                        "destination": "Anchorage, Alaska",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 200,
                        "id": 35,
                        "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "aerial photography of high-rise building",
                        "destination": "Dar es Salaam, Tanzania",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 1200,
                        "id": 48,
                        "image": "https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "alt": "ornate buildings with a garden during the day",
                        "destination": "Bangkok, Thailand",
                        "estimatedFlightCostPerPerson": 988,
                        "estimatedLodgingCostPerDay": 35,
                        "id": 16,
                        "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    }
                ]
            },
            {
                id: 103,
                userID: 5,
                destinationID: 35,
                travelers: 2,
                date: '2020/10/19',
                duration: 20,
                status: 'approved',
                suggestedActivities: [],
                destination: [{
                        "alt": "city with clear skys and a road in the day time",
                        "destination": "Madrid, Spain",
                        "estimatedFlightCostPerPerson": 650,
                        "estimatedLodgingCostPerDay": 150,
                        "id": 5,
                        "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "man riding on kayak surrounded by mountains",
                        "destination": "Anchorage, Alaska",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 200,
                        "id": 35,
                        "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "aerial photography of high-rise building",
                        "destination": "Dar es Salaam, Tanzania",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 1200,
                        "id": 48,
                        "image": "https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "alt": "ornate buildings with a garden during the day",
                        "destination": "Bangkok, Thailand",
                        "estimatedFlightCostPerPerson": 988,
                        "estimatedLodgingCostPerDay": 35,
                        "id": 16,
                        "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    }
                ]
            },
            {
                id: 163,
                userID: 5,
                destinationID: 48,
                travelers: 1,
                date: '2020/04/28',
                duration: 10,
                status: 'approved',
                suggestedActivities: [],
                destination: [{
                        "alt": "city with clear skys and a road in the day time",
                        "destination": "Madrid, Spain",
                        "estimatedFlightCostPerPerson": 650,
                        "estimatedLodgingCostPerDay": 150,
                        "id": 5,
                        "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "man riding on kayak surrounded by mountains",
                        "destination": "Anchorage, Alaska",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 200,
                        "id": 35,
                        "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "aerial photography of high-rise building",
                        "destination": "Dar es Salaam, Tanzania",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 1200,
                        "id": 48,
                        "image": "https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "alt": "ornate buildings with a garden during the day",
                        "destination": "Bangkok, Thailand",
                        "estimatedFlightCostPerPerson": 988,
                        "estimatedLodgingCostPerDay": 35,
                        "id": 16,
                        "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    }
                ]
            },
            {
                id: 196,
                userID: 5,
                destinationID: 16,
                travelers: 1,
                date: '2020/09/25',
                duration: 8,
                status: 'approved',
                suggestedActivities: [],
                destination: [{
                        "alt": "city with clear skys and a road in the day time",
                        "destination": "Madrid, Spain",
                        "estimatedFlightCostPerPerson": 650,
                        "estimatedLodgingCostPerDay": 150,
                        "id": 5,
                        "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "man riding on kayak surrounded by mountains",
                        "destination": "Anchorage, Alaska",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 200,
                        "id": 35,
                        "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    },
                    {
                        "alt": "aerial photography of high-rise building",
                        "destination": "Dar es Salaam, Tanzania",
                        "estimatedFlightCostPerPerson": 100,
                        "estimatedLodgingCostPerDay": 1200,
                        "id": 48,
                        "image": "https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "alt": "ornate buildings with a garden during the day",
                        "destination": "Bangkok, Thailand",
                        "estimatedFlightCostPerPerson": 988,
                        "estimatedLodgingCostPerDay": 35,
                        "id": 16,
                        "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    }
                ]
            }
        ]);
    });



});