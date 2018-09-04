"use strict";

/** @description Takes the files in the coordinates directory and creates a map. Then 
 *                  given start and end coordinates it outputs the shortest path from the start 
 *                  to end points on the map. This map is then saved to a file location. 
 *                  The function will then take the string of the path taken, 
 *                  find the hash collisions with the number of zeros input and 
 *                  return the hash result.
 * @param {int} startX The x coordinate of the start position.
 * @param {int} startY The y coordinate of the start position.
 * @param {int} endX The x coordinate of the end position.
 * @param {int} endY The y coordinate of the end position.
 * @param {string} coordinatesDirectory Directory containing the files to parse.
 * @param {int} numberOfZeros The number of zeros to be searching for at the start of the hash.
 * @return {string} The hash collisions string the function has built.
 */
module.exports = function (deconstructedInput) {

    let {
        startX, 
        startY, 
        endX, 
        endY, 
        mapFileLocation,
        numberOfZeros
    } = deconstructedInput;

    // Your code goes here ...
    
    
    

    // You can replace this return statement with your own.
    let hashCollisionFromPath = 'hash-collisions-string-from-path';
    return hashCollisionFromPath;
};

const testInput = {
    startX: 0, 
    startY: 2, 
    endX: 5, 
    endY: 2,
    mapFileLocation: './tests/testFiles/pathFindingTestFiles/pathFindingTestMap1.txt',
    numberOfZeros: 3
};