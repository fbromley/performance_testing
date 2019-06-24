var shell = require('shelljs');
const fs = require('fs');
const path = require('path');


const runTest = (mode) => {
    const Img = shell.exec('docker build . -t generator');
    const startTime = Date.now();
    const result = shell.exec(`docker run --rm generator ${mode} --max-rows=100 --allow-untyped-fields --replace --profile-file=profile.json --output-path=output.csv`);
    const endTime = Date.now();

    var difference = (endTime - startTime)/1000;
    console.log("Running time is: " + difference);
    console.log(process.cwd());
    fs.writeFile(path.join(".", "results", `${mode}${Date.now()}.csv`), difference, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });
}

runTest("generate");
runTest("violate");