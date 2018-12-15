var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoib3JpYnJvIiwiYSI6ImNqcHB2YXN3dzBtY3kzeG8xYWh6M250d3gifQ.NQt62oZqogejARSH1MIejA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10'
});
