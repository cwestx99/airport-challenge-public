class Plane {

    id;
    status;
    airport;

    constructor(id) {
        this.id = id;
        this.status;
        this.airport = "";
    }

    isLanded(boolean) {
        this.status = boolean;
    }

    airportName(airportName) {
        this.airport = airportName
    }

}

module.exports = Plane;