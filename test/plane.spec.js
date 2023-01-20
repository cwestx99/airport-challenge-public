const Plane = require("../src/plane");
const { assertEquals } = require("../test/TestingFrameworks");

let expected;
let actual;
let result;
let plane;

console.log(``)
console.log(`PLANE TESTS`)
console.log(`****************************`)
// Test 1 - test that plane tells if it is landed.

console.log(`============================`);
console.log(`Test 1 - test that plane tells if it is landed.`);

// Arrange
plane = new Plane(`Plane1`);
expected = true;

// Act
plane.isLanded(true)
actual = plane.status;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Plane is landed: ${result}`);

// Clean up
plane = null;
expected = undefined;
actual = undefined;
result = undefined;