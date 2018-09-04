/* eslint-env mocha */
"use strict";

const { expect } = require("chai");
const pathFinding = require('../pathFinding');

describe("pathFinding.js, Test expected outputs", () => {

    const expectedPathOutput = 'OOOOx\nOxxOO\nSxxxE\n..x..\n..x..\n';

    const testInput = {
                startX:0, 
                startY:2, 
                endX:5, 
                endY:2,
                mapFileLocation: './tests/testFiles/pathFindingTestFiles/pathFindingTestMap.txt'};

    it("Input: ({0,2,5,2,'./tests/testFiles/pathFindingTestFiles/pathFindingTestMap.txt'}), should return: \n" +
        "OOOOx\nOxxOO\nSxxxE\n..x..\n..x..", () => {
            expect(expectedPathOutput).to.equal(pathFinding(testInput));
        });

});