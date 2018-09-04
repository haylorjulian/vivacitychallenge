"use strict";

const hashIterator = require('./hashIterator');
const mapCreator = require('./mapCreator');
const pathFinding = require('./pathFinding');
const integration = require('./integration');

// Running each of the functions with a valid input.

// Feel free to change or remove these

hashIterator('artificial-intelligence', 5);

mapCreator('./CoordinateSystem');

pathFinding(1 ,1, 5, 5, './output/map.txt');

integration(1, 1, 5, 5, './CoordinateSystem', 2);