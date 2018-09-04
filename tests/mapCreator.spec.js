/* eslint-env mocha */
"use strict";

const { expect } = require("chai");
const mapCreator = require('../mapCreator');

describe("mapCreator.js, Test expected outputs", () => {

    const expectedMapOutput = '......\n....x.\n.x...x\n';

    it("Input: './tests/testFiles/mapCreatorTestFiles', should return: \n" +
        "......\n....x.\n.x...x", () => {
            expect(expectedMapOutput).to.
                equal(mapCreator('./tests/testFiles/mapCreatorTestFiles'));
        });

});