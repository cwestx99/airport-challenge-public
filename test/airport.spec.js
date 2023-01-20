const { assertEquals } = require("../test/TestingFrameworks");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;
let plane2;
let size;
let airportCapacity;

console.log(``)
console.log(`AIRPORT TESTS`)
console.log(`****************************`)
// Test 1 - test the airport can add a plane to it's plane list.

console.log(`============================`);
console.log(`Test 1 - test the airport can add a plane to it's plane list.`);

// Arrange
airport = new Airport();
plane = new Plane(`Plane1`);
expected = 1;

// Act
airport.land(plane);
actual = airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: A plane has landed at the airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 2 - test the airport can take a capacity.

console.log(`============================`);
console.log(`Test 2 - test the airport can take a capacity.`);

// Arrange
airport = new Airport();
expected = true;

// Act
airport.capacity();
actual = !isNaN(airport.airportCapacity);

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: The airport has a capacity: ${result}`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 3 - test the airport capacity can be changed.

console.log(`============================`);
console.log(`Test 3 - test the airport capacity can be changed.`);

// Arrange
airport = new Airport();
size = 10
expected = 10;

// Act
airport.capacity(size);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 3: The airport has a changeable capacity: ${result}`);

// Clean up
airport = null;
size = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 4 - test if the airport capacity is full.

console.log(`============================`);
console.log(`Test 4 - test if the airport capacity is full.`);

// Arrange
airport = new Airport();
airportCapacity = 1;
plane = new Plane(`Plane1`);
airport.airportList.push(plane);
airport.airportCapacity = airportCapacity
expected = true;

// Act
airport.isCapacityFull();
actual = airport.isCapacityFull();

// Assert
result = assertEquals(actual, expected);
console.log(`Test 4: The airport is at full capacity: ${result}`);

// Clean up
airport = null;
airportCapacity = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 5 - test that a plane doesn't land when capacity is full.

console.log(`============================`);
console.log(`Test 5 - test that a plane doesn't land when capacity is full.`);

// Arrange
airport = new Airport();
airportCapacity = 1;
airport.airportCapacity = airportCapacity;
plane = new Plane(`Plane1`);
airport.airportList.push(plane);
expected = 0;

// Act
airport.land(plane);
actual = airport.airportCapacity - airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 5: The airport has no extra planes when the capacity is full: ${result}`);

// Clean up
airport = null;
airportCapacity = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 6 - test that a plane has taken off from the airport.

console.log(`============================`);
console.log(`Test 6 - test that a plane has taken off from the airport.`);

// Arrange
airport = new Airport();
airportCapacity = 1;
airport.airportCapacity = airportCapacity;
plane = new Plane(`Plane1`);
airport.airportList.push(plane);
expected = 0;

// Act
airport.takeoff(plane);
actual = airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 6: A plane has taken off from the airport: ${result}`);

// Clean up
airport = null;
airportCapacity = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 7 - test that a plane that has taken off is no longer at the airport.

console.log(`============================`);
console.log(`Test 7 - test that a plane that has taken off is no longer at the airport.`);

// Arrange
airport = new Airport();
plane = new Plane(`Plane1`);
plane2 = new Plane(`Plane2`);
airport.airportList.push(plane, plane2);
expected = false;

// Act
airport.takeoff(plane);
actual = airport.airportList.includes(plane);

// Assert
result = assertEquals(actual, expected);
console.log(`Test 7: A plane that has taken off is no longer at the airport: ${result}`);

// Clean up
airport = null;
plane = null
plane2 = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 8 - test that the airport contains the plane that is taking off.

console.log(`============================`);
console.log(`Test 8 - test that the airport contains the plane that is taking off.`);

// Arrange
airport = new Airport();
plane = new Plane(`Plane1`);
airport.airportList.push(plane);
expected = `${plane} has successfully departed from the airport.`;

// Act
airport.takeoff(plane);
actual = airport.departedMessage;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 8: A plane that has taken off is from the correct airport: ${result}`);

// Clean up
airport = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 9 - test that the airport only lets planes that are at the airport takeoff.

console.log(`============================`);
console.log(`Test 9 - test that the airport only lets planes that are at the airport takeoff.`);

// Arrange
airport = new Airport();
plane = new Plane(`Plane1`);
plane2 = new Plane(`Plane2`);
airport.airportList.push(plane2);
expected = `${plane} has not departed`;

// Act
airport.takeoff(plane);
actual = airport.departedMessage;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 9: A plane has not taken off from the airport: ${result}`);

// Clean up
airport = null;
plane = null
plane2 = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 10 - test that the airport doesn't land a plane that is already there.

console.log(`============================`);
console.log(`Test 10 - test that the airport doesn't land a plane that is already there.`);

// Arrange
airport = new Airport();
plane = new Plane(`Plane1`);
airport.airportList.push(plane);
expected = `${plane} has not landed.`

// Act
airport.land(plane);
actual = airport.landedMessage;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 10: A plane doesn't land at the airport: ${result}`);

// Clean up
airport = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 11 - test that the airport doesn't land a plane that is already there.

console.log(`============================`);
console.log(`Test 11 - test that takeoff is prevented when the weather is stormy.`);

// Arrange
airport = new Airport();
plane = new Plane(`Plane1`);
airport.weather = `stormy`;
airport.airportList.push(plane);
expected = `${plane} has not departed`

// Act
airport.takeoff(plane);
actual = airport.departedMessage;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 11: A plane doesn't takeoff when the weather is stormy: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 12 - test that land is prevented when the weather is stormy.

console.log(`============================`);
console.log(`Test 12 - test that land is prevented when the weather is stormy.`);

// Arrange
airport = new Airport();
plane = new Plane(`Plane1`);
airport.weather = `stormy`;
airport.airportList.push(plane);
expected = `${plane} has not landed.`

// Act
airport.land(plane);
actual = airport.landedMessage;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 12: A plane doesn't land at the airport when the weather is stormy: ${result}`);

// Clean up
airport = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 13 - test that a landed plane is at the specified airport.

console.log(`============================`);
console.log(`Test 13 - test that a landed plane is at the specified airport.`);

// Arrange
airport = new Airport(`Airport1`);
plane = new Plane(`Plane1`)
expected = `Airport1`

// Act
airport.land(plane, airport.airportName);
actual = plane.airport;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 13: A plane is at the airport it landed at: ${result}`);

// Clean up
airport = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;