var shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const runTest = (mode) => {
    const startTime = Date.now();
    const result = shell.exec(`java -jar generator.jar ${mode} --max-rows=10 --allow-untyped-fields --replace profile.json output.csv`);
    const endTime = Date.now();

    var difference = (endTime - startTime)/1000;
    console.log("Running time is: " + difference);
    console.log(process.cwd());
    fs.writeFile(path.join(".", "results", `${Date.now()}.csv`), difference, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });
}

runTest('generate');
//runTest('generate --violate');