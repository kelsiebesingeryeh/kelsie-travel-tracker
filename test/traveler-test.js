import chai from "chai";
const expect = chai.expect;

import Traveler from '../src/traveler.js'
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
     expect(traveler1.id).to.eql(5);
   });

   

});