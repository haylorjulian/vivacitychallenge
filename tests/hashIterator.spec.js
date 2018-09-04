/* eslint-env mocha */
"use strict";

const { expect } = require("chai");
const hashIterator = require('../hashIterator');


describe("HashIterator.js, Test expected outputs", () => {

    it("Input: ('code-quality',3), should return '09e97089ae'", () => {
        expect('09e97089ae').to.equal(hashIterator('code-quality',3));
    }).timeout(0);

    it("Input: ('machine-learning', 4), should return 'f320e001d1'", () => {
        expect('f320e001d1').to.equal(hashIterator('machine-learning', 4));
    }).timeout(0);

    it("Input: ('artificial-intelligence',5), should return '610d370320'", () => {
        expect('610d370320').to.equal(hashIterator('artificial-intelligence',5));
    }).timeout(0);

});