const { assertEquals } = require("../test/TestingFrameworks");
const Weather = require("../src/weather");


let expected;
let actual;
let result;
let testWeather;

console.log(``)
console.log(`WEATHER TESTS`)
console.log(`****************************`)
// Test 1 - test that weather can be stormy.

console.log(`============================`);
console.log(`Test 1 - test that weather can be stormy.`);

// Arrange
weather = new Weather();
testWeather = `stormy`
weather.actualWeather = testWeather
expected = true;

// Act
actual = weather.isStormy();

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Weather is stormy: ${result}`);

// Clean up
weather = null;
testWeather = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 2 - test that weather can be not stormy.

console.log(`============================`);
console.log(`Test 2 - test that weather can be not stormy.`);

// Arrange
weather = new Weather();
testWeather = `sunny`
weather.actualWeather = testWeather
expected = false;

// Act
actual = weather.isStormy();

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Weather is not stormy: ${result}`);

// Clean up
weather = null;
testWeather = null;
expected = undefined;
actual = undefined;
result = undefined;