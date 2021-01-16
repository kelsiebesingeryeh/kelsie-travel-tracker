export let testUser = {
  id: 5,
  name: "Tiffy Grout",
  travelerType: "thrill-seeker",
};

export let testTrips = [
  {
    id: 91,
    userID: 5,
    destinationID: 5,
    travelers: 1,
    date: "2020/04/29",
    duration: 16,
    status: "approved",
    suggestedActivities: [],
  },
  {
    id: 103,
    userID: 5,
    destinationID: 35,
    travelers: 2,
    date: "2020/10/19",
    duration: 20,
    status: "approved",
    suggestedActivities: [],
  },
  {
    id: 163,
    userID: 5,
    destinationID: 48,
    travelers: 1,
    date: "2020/04/28",
    duration: 10,
    status: "approved",
    suggestedActivities: [],
  },
  {
    id: 196,
    userID: 5,
    destinationID: 16,
    travelers: 1,
    date: "2020/09/25",
    duration: 8,
    status: "approved",
    suggestedActivities: [],
  },
];

export let testDestinations = [
  {
    id: 5,
    destination: "Madrid, Spain",
    estimatedLodgingCostPerDay: 150,
    estimatedFlightCostPerPerson: 650,
    image:
      "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    alt: "city with clear skys and a road in the day time",
  },
  {
    id: 35,
    destination: "Anchorage, Alaska",
    estimatedLodgingCostPerDay: 200,
    estimatedFlightCostPerPerson: 100,
    image:
      "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    alt: "man riding on kayak surrounded by mountains",
  },
  {
    id: 48,
    destination: "Dar es Salaam, Tanzania",
    estimatedLodgingCostPerDay: 1200,
    estimatedFlightCostPerPerson: 100,
    image:
      "https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    alt: "aerial photography of high-rise building",
  },

  {
    id: 16,
    destination: "Bangkok, Thailand",
    estimatedLodgingCostPerDay: 35,
    estimatedFlightCostPerPerson: 988,
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    alt: "ornate buildings with a garden during the day",
  },
];
