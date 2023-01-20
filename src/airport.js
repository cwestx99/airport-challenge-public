class Airport {

  airportName;
  airportList;
  airportCapacity;
  departedMessage;
  landedMessage;
  status;
  weather;



  constructor(airportName, airportCapacity = 5) {
    this.airportName = airportName;
    this.airportList = [];
    this.airportCapacity = airportCapacity;
    this.departedMessage = ``;
    this.landedMessage = ``;
    this.status = ``;
    this.weather = ``;
  };


  capacity(size) {
    if (size === undefined) {
      return this.airportCapacity;
    } else {
      this.airportCapacity = size;
    };
  }

  isCapacityFull() {
    if (this.airportList.length === this.airportCapacity) {
      return true
    }
  }

  land(plane, airportName) {
    if (this.isCapacityFull() !== false && this.airportList.includes(plane) === false && this.weather !== `stormy`) {
      plane.airportName(airportName);
      plane.isLanded(true);
      this.airportList.push(plane);
      this.landedMessage = `${plane} has successfully landed at ${airportName}.`
    } else {
      this.landedMessage = `${plane} has not landed.`
    }
  }

  takeoff(plane) {
    if (this.airportList.includes(plane) && this.weather !== `stormy`) {
      plane.airportName(undefined);
      this.airportList.splice(this.airportList.indexOf(plane), 1);
      this.departedMessage = `${plane} has successfully departed from the airport.`
    } else {
      this.departedMessage = `${plane} has not departed`;
    }
  }
};

module.exports = Airport;