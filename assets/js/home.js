mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoibWRoWDZWUSJ9.n1A58EO10IDrB5yIAKqAPA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/garethjohnsdesign/cjj4c8f7p46ua2roce0wkb7f9', //hosted style id
    center: [-0.102483, 51.528037],
    zoom: 11.14,
    scrollZoom: false
});

map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['camden', 'soho', 'markets', 'digbeth'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
//     .setHTML('<h5>' + feature.properties.title + '</h5><p>' + feature.properties.description + '</p>')
    .setHTML('<h5 class="margin-bottom-0" style="line-height: 1.0">' + feature.properties.title + '</h5>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
  });
  
  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-left');
  