# Install OSRM

## Install the library

Ensure that Node v6 is active:

```bash
nvm install v6 && nvm use v6
npm install
```

## Preparing Data

Download the correct database into the ```data ``` folder:

```bash
wget https://download.geofabrik.de/africa/south-africa-and-lesotho-latest.osm.pbf data
```

Then run the CH algorithm:

```bash
cd data
../node_modules/osrm/lib/binding/osrm-extract south-africa-and-lesotho-latest.osm.pbf -p ../profiles/car.lua
../node_modules/osrm/lib/binding/osrm-contract south-africa-and-lesotho-latest.osrm
```

Then run the server to test if everything is well:
```bash
../node_modules/osrm/lib/binding/osrm-routed south-africa-and-lesotho-latest.osrm
```

Test the server:
```bash
curl http://127.0.0.1:5000/route/v1/driving/19.46,-33.64;18.87,-33.34?steps=true
```
