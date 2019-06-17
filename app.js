var shell = require('shelljs');
shell.exec('java -jar generator.jar generate --max-rows=100 --allow-untyped-fields --replace profile.json output.csv', (code, stdout, stderr) => {
    console.log(stdout);
    console.log('Exit code:', code);
}) ;
