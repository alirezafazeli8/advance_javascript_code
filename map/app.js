"use strict";

const MAP_BOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYWxpcmV6YWZhemVsaSIsImEiOiJja3dzMWlnY2wxMjQ3Mm9wbWpwdDg5NzE0In0.6EDyCW40zySz5376LCku5g";

const successCallback = function (position) {
  var map = new mapboxgl.Map({
    accessToken: MAP_BOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [position.coords.longitude, position.coords.latitude],
    zoom: 15,
  });

  map.addControl(new mapboxgl.NavigationControl());

  map.addControl(
    new MapboxDirections({
      accessToken: MAP_BOX_ACCESS_TOKEN,
    }),
    "top-left"
  );
};

const errorCallback = function (err) {
  console.log(err);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
  enableHighAccuracy: true,
});
