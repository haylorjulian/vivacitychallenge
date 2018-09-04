"use strict";

const fs = require('fs');
const md5 = require('md5');

//
// Function that checks the hash prefixed zeros
// Input: hash (string) and numberOfZeros (integer)
//

function doesContainAmountOfZeros(hash, numberOfZeros) {
    for (let i = 0; i < numberOfZeros; i++) {
        if (hash.charAt(i) !== "0") {
            return false;
        }
    }
    return true;
};

//
// Outputs the module results to a text file
//

function writeFile(string) {
    fs.writeFile("hashIteratorResults.txt", string, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}

/** @description Finds the hash collisions string and returns it.
 * @param {string} salt The salt to iterate and hash.
 * @param {int} numberOfZeros The number of zeros to be searching for at the start of the hash.
 * @return {string} The collisions string the function has built.
 */
module.exports = function (salt, numberOfZeros) {

    let collisionStringArray = new Array(10);
    let characterInputCount = 0;
    let i = 0;

    while (characterInputCount < 10) {
        let hash = md5(salt + i);

        if (doesContainAmountOfZeros(hash, numberOfZeros)) {

            let collisionStringIndex = parseInt(hash[numberOfZeros]);

            // Checks if the character in collisionStringIndex is a valid integer
            if (!isNaN(collisionStringIndex)) {
                let characterIndex = i % 32;
                let character = hash[characterIndex];

                // Checks if the result array already contains a character in the input index
                if (!collisionStringArray[collisionStringIndex]) {
                    collisionStringArray[collisionStringIndex] = character;
                    console.log(character);
                    characterInputCount += 1;
                }
            }
        }
        i++;
    }

    const result = collisionStringArray.join('');

    writeFile(result);

    return result;
};