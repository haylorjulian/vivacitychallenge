"use strict";

var fs= require('fs')
//
// Reads file contents and returns them in an array of strings
//
function readCoordinatesFromDirectory(coordinatesDirectory) {
    const fileNames = readDirectory(coordinatesDirectory);

    const data = [];

    for (var i = 0; i < fileNames.length; i++) {
        const fileContent = readFile('./tests/testFiles/mapCreatorTestFiles/' + fileNames[i]);

        data.push(fileContent);
    }

    return data;
}

// Reads the specified directory
function readDirectory(directory) {
    return fs.readdirSync(directory, 'ascii');
}

// Reads a file
function readFile(myFile) {
    return fs.readFileSync(myFile, 'ascii');
}

function parseCoordinates(cordsStr) {
    const joinedCoordsStrings = cordsStr.join(', ').split(', ');

    const coordinates = [];

    for (var i = 0; i < joinedCoordsStrings.length; i++) {
        const cordStr = joinedCoordsStrings[i];

        coordinates.push(parseCoordinate(cordStr));
    }

    return coordinates;
}

function parseCoordinate(coordsStr) {
    const coords = coordsStr.replace('x', '').split('y');

    return [parseInt(coords[0]), parseInt(coords[1])];
}
//
// Separate the coords array into x-coords and y-coords to find map array dimensions
//
function findMax(myArray) {

    let x_coords = [];
    let y_coords = [];
    let arrayDimensions = [];

    for (let i = 0; i < myArray.length; i++) {
            x_coords.push(myArray[i][0]);
            y_coords.push(myArray[i][1]);
    }
    let max_x = Math.max.apply(null, x_coords);
    let max_y = Math.max.apply(null, y_coords);
    return arrayDimensions = [max_x,max_y];
}
//
//
//
function createMap(arrayDimensions, arrayCoordinates) {

    const map = new Array(arrayDimensions[1] + 1);

    for (let i = 0; i < arrayDimensions[1] + 1; i++) {
        map[i] = new Array(arrayDimensions[0] + 1);
    }
    for (let i = 0; i < arrayDimensions[1] + 1; i++) {
        map[arrayCoordinates[i][1]][arrayCoordinates[i][0]] = 'x';
    }

    return map;
}

function getMapLine(mapLine) {
    let line = '';

    for (var i = 0; i < mapLine.length; i++) {
        line += mapLine[i] ? mapLine[i] : '.';
    }

    return line;
}

function getMapAsString(map) {
    const mapStrings = [];

    for (var i = 0; i < map.length; i++) {
        const mapLine = getMapLine(map[i]);

        mapStrings.push(mapLine);
    }

    return mapStrings.join('\n') + '\n';
}


/** @description Parses each file of the input directory into a map.
 *                  then saves this to a file location and returns it.
 * @param {string} coordinatesDirectory Directory containing the files to parse.
 * @return {string} The created map.
 */
module.exports = function (coordinatesDirectory) {

    const coordinateStrings = readCoordinatesFromDirectory(coordinatesDirectory);

    const coordinates = parseCoordinates(coordinateStrings);

    const arrayDimensions = findMax(coordinates);

    const map = createMap(arrayDimensions, coordinates);

    const mapString = getMapAsString(map);

    fs.writeFileSync('mapCreatorResults.txt', mapString);

    // let map = 'this-is-tnpm he-string-map-that-your-code-will-outputnpm run test
    return mapString;
};