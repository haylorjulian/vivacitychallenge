"use strict";

const fs = require('fs');



function readFile(myFile) {
    let myMap = fs.readFileSync(myFile, 'ascii');
    let myMapLines = myMap.split("\n");
    return myMapLines;
}



function writeMapFile(map) {
    fs.writeFileSync('pathFindingResults.txt', map.join('\n'));
}



function getCoords(myMapLines) {
    
    let nodes = [];
    for (let i = 0; i < myMapLines.length; i++) {
        for (let j = 0; j < myMapLines[i].length; j++) {
            if (myMapLines[i].charAt([j]) !== 'x') {
                nodes.push([j,i]);
            }
        }
    }
    return nodes;
}



function getEdges(myOpenNodes) {
    
    let edges = [];
    
    for (let i = 0; i < myOpenNodes.length - 1; i++) {
        for (let j = 1; j < myOpenNodes.length - 1; j++) {
            if (((Math.abs(myOpenNodes[i][0] - myOpenNodes[j][0])) + Math.abs((myOpenNodes[i][1] - myOpenNodes[j][1]))) === 1) {
                edges.push([myOpenNodes[i], myOpenNodes[j]]);
            }
        }
    }
    return edges;
}



function dijkstra(nodes, edges, start, end) {
    
    let infinity = 100000;
    let myUndefined = [-1, -1];
    let Q = [];
    let distances = [];
    let dist = {};
    let prev = {};
    let u = '';

    for (let i = 0; i < nodes.length; i++) {
        let nodeKey = nodes[i].join(',');
        dist[nodeKey] = infinity;
        prev[nodeKey] = myUndefined;
        Q.push(nodeKey);
        if (nodeKey === start) {
            dist[nodeKey] = 0;
        }
    }
    do {
        let idx = sort(Q, dist);
        let u = Q[idx];
        let v = u.split(',');
        v[0] = parseInt(v[0]);
        v[1] = parseInt(v[1]);
        let min = dist[u];
        Q.splice(idx, 1);
        for (let i = 0; i < nodes.length; i++) {
            let nodeKey = nodes[i].join(',');
            if (((Math.abs(nodes[i][0] - v[0])) + Math.abs((nodes[i][1] - v[1]))) === 1) {
                let alt = min + 1;
                if (alt < dist[nodeKey]) {
                    dist[nodeKey] = alt;
                    prev[nodeKey] = v;
                }
            }
            
        }
    }
    while(Q.length > 0 && u !== end)
    
    return prev;
}


function sort(Q, dist) {
    
    let actual_u = '[-1,-1]';
    let actual_min = 100090;
    let index = -1;
    
    for (let i = 0; i < Q.length; i++) {
        if (dist[Q[i]] < actual_min) {
            actual_min = dist[Q[i]];
            actual_u = Q[i];
            index = i;
        }
    }
    return index;
}



String.prototype.replaceAt= function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}



/** @description Given start and end coordinates and a map file, 
 *                  outputs the shortest path from start to end points on the map.
 * @param {int} startX The x coordinate of the start position.
 * @param {int} startY The y coordinate of the start position.
 * @param {int} endX The x coordinate of the end position.
 * @param {int} endY The y coordinate of the end position.
 * @param {string} mapFileLocation The file location of the map file to search through.
 * @return {string} The map with the path taken.
 */
module.exports = function (deconstructedInput) {

    let {
        startX, 
        startY, 
        endX, 
        endY, 
        mapFileLocation
    } = deconstructedInput;

    const entryNode = [startX, startY];
    
    const endNode = [endX, endY];

    const myMap = readFile(mapFileLocation);
    
    const myNodes = getCoords(myMap);
    
    const myEdges = getEdges(myNodes);

    const prev = dijkstra(myNodes, myEdges, entryNode.join(','), endNode.join(','));

    let point = [endX,endY];
    let str = 'E';
    let condition = true;
    
    do {
        myMap[point[1]] = myMap[point[1]].replaceAt(point[0], str);
        str = '0';
        point = prev[point.join(',')];

    }
    while (point[0] !== -1)
    
    let mapWithPath = readFile(mapFileLocation);
    
    myMap[startY] = myMap[startY].replaceAt(startX, 'S');
    
    writeMapFile(myMap);
    
    return mapWithPath;
};

const input = {
    startX: 0, 
    startY: 2, 
    endX: 4, 
    endY: 2,
    mapFileLocation: './tests/testFiles/pathFindingTestFiles/pathFindingTestMap1.txt'
};