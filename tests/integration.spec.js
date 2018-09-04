/* eslint-env mocha */
"use strict";

const { expect } = require("chai");
const integration = require('../integration');

describe("Integration.js, Test expected outputs", () => {

    it("Input: ({0,2,5,2,'./tests/testFiles/integrationTestFiles',4}), " +
        "should return '8e956058e0'", () => {
            const testInput = {
                startX:0, 
                startY:2, 
                endX:5, 
                endY:2,
                coordinatesDirectory: './tests/testFiles/integrationTestFiles',
                numberOfZeros: 4};

            expect('8e956058e0').to.equal(integration(testInput));
        }).timeout(0);

});