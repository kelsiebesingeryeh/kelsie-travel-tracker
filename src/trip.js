class Trip {
    constructor(id, userID, destinationID, travelers, date, duration, status) {
        this.id = id;
        this.userID = userID;
        this.destintionID = destinationID;
        this.travelers = travelers;
        this.date = date;
        this.duration = duration;
        this.status = status;
        this.suggestedActivities = []
    }
}

export default Trip;