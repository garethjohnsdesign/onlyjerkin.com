mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoibWRoWDZWUSJ9.n1A58EO10IDrB5yIAKqAPA';

var camden = new mapboxgl.Map({
    container: 'camden',
    style: 'mapbox://styles/garethjohnsdesign/cjj5rkw8r0scq2slhc07jynt9', //hosted style id
    center: [-0.146234, 51.542325],
    zoom: 13.88,
    scrollZoom: false
});

var markets = new mapboxgl.Map({
    container: 'markets',
    style: 'mapbox://styles/garethjohnsdesign/cjj5s21m60sws2sqprdkyn2b9', //hosted style id
    center: [-0.103010, 51.525540],
    zoom: 10.36,
    scrollZoom: false
});

var soho = new mapboxgl.Map({
    container: 'soho',
    style: 'mapbox://styles/garethjohnsdesign/cjj5trasm02ro2rltww0sw7fc', //hosted style id
    center: [-0.133705, 51.512982],
    zoom: 15.00,
    scrollZoom: false
});

var digbeth = new mapboxgl.Map({
    container: 'digbeth',
    style: 'mapbox://styles/garethjohnsdesign/cjj5v8nuq0vvn2spmsj85384n', //hosted style id
    center: [-1.881672, 52.476318],
    zoom: 14.00,
    scrollZoom: false
});


var camdenNav = new mapboxgl.NavigationControl();
camden.addControl(camdenNav, 'top-left');

var marketsNav = new mapboxgl.NavigationControl();
markets.addControl(marketsNav, 'top-left');

var sohoNav = new mapboxgl.NavigationControl();
soho.addControl(sohoNav, 'top-left');

var digbethNav = new mapboxgl.NavigationControl();
digbeth.addControl(digbethNav, 'top-left');