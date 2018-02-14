var concave = require('@turf/concave');
var isochrone = require('.');

var time = 3600; // 300 second drivetime (5 minutes)
var location = [19.46,-33.64]; // center point
    // Note: coordinates are E/W , N/S
var options = {
  resolution: 25, // sample resolution
  maxspeed: 70, // in 'unit'/hour
  unit: 'kilometers', // 'miles' or 'kilometers'
  network: 'data/south-africa-and-lesotho-latest.osrm' // prebuilt dc osrm network file, or use the one just built.
}

var isochrone = new isochrone(location, time, options, function(err, drivetime) {
  if(err) throw err;
  // your geojson from draw overload
  console.log(JSON.stringify(drivetime))
});
isochrone.getIsochrone();