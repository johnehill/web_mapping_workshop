///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'johnehill.l8mm4g9e'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1Ijoiam9obmVoaWxsIiwiYSI6Im9pSXZsNTAifQ.NzslAM2ZOO6Z-W54LDSdDw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

/////////Add Data  jeh
var dataFileToAdd = 'data/statewidetrail.geojson';
var featureLayer = L.mapbox.featureLayer();
      featureLayer.loadURL(dataFileToAdd);
      featureLayer.addTo(map);
     
featureLayer.on('ready', function(){
  // this.setStyle({
//    "marker-color": "#777777,"
//    "marker-size": "medium"
//   });
   map.fitBounds(featureLayer.getBounds());
 });

// ////////////////////////////////
