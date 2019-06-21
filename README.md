# Data Helix Performance Testing

This tool is written to performance test any data generation tool, specifically using the example of the Scott Logic Data Helix. Currently it is hardcoded to operate using the Data Helix Jar.
 
To build : docker build . -t generator

To run : docker run --rm generator generate --max-rows=100 --allow-untyped-fields --replace --profile-file=profile.json --output-path=output.csv

Note: To get time run in BASH: time docker run --rm generator generate --max-rows=100 --allow-untyped-fields --replace --profile-file=profile.json --output-path=output.csv