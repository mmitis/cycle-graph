const fs = require('fs');

function calcGraph(file) {
    // read file
    const fileLines = fs.readFileSync(file, 'utf-8')
        .replace(new RegExp("\r", "g"), "")
        .split('\n')
        .map(lineRow => lineRow.split(' '));

    const firstRow = fileLines.shift();
    // temoporary variables
    let hasChanged = true;
    let dependencyArray = Array.apply(null, {length: firstRow[0]}).map(() => []);
    let dependencyPassed = [];
    // build dependency array
    for (let i = 0; i < firstRow[1]; i++) {
        dependencyArray[parseInt(fileLines[i][0], 10)].push(parseInt(fileLines[i][1], 10));
    }
    let toPass = parseInt(firstRow[0], 10);

    while (hasChanged && toPass > 0) {
        hasChanged = false;
        dependencyArray.forEach((dependency, index) => {
            dependencyPassed.forEach((passed) => {
                let index = dependency.indexOf(passed);
                if (index > -1) {
                    dependency.splice(index, 1);
                }
            });
            if (dependency.length === 0 && dependencyPassed.indexOf(index) === -1) {
                dependencyPassed.push(index);
                hasChanged = true;
                toPass--;
            }
        });
    }
    return !toPass;
}
module.exports.calcGraph = calcGraph;