// 1. Imports
// ----------

import $ from "jquery";
import Foundation from 'foundation-sites';
import Cookie from 'jquery.cookie';
import "lightGallery";
import "lg-fullscreen";
import "lg-video";
import AOS from 'aos';
import Swup from 'swup';
import SwupBodyClassPlugin from "@swup/body-class-plugin";

$( document ).ready( function() {
  function init() {

// 2. Special Queries
// ------------------

Foundation.Interchange.SPECIAL_QUERIES[ "medium-retina" ] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES[ "large-retina" ] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES[ "xlarge-retina" ] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES[ "xxlarge-retina" ] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

// 3. Foundation
// -------------

$(document).foundation();

// 4. Lightgallery
// ---------------

if ($("body").hasClass("home")) {
  $("#video" ).lightGallery( {
    counter: false,
    videoMaxWidth: '1080px',
    youtubePlayerParams: {
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      autoplay: 0
    },
    vimeoPlayerParams: {
      autoplay: 1,
      title: 0,
      byline: 0,
      portrait: 0,
      color: 'FFFFFF'
    }
  } );
}

// 5. Mapbox
// ---------

$(function() {  
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoibWRoWDZWUSJ9.n1A58EO10IDrB5yIAKqAPA';
});

// 6. Home
// -------

$(function() {
  if($('body').hasClass('home')){
    
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/garethjohnsdesign/cjj4c8f7p46ua2roce0wkb7f9', //hosted style id
        center: [-0.102483, 51.528037],
        zoom: 11.14,
        scrollZoom: false
      });
    
    $('#video').lightGallery({
    counter: false,
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
    vimeoPlayerParams: {
        byline : 0,
        portrait : 0,
        color : 'FF8300'     
    }
    });
      
  }
});


// 2. Covid
// -------------

Foundation.MediaQuery.current

if (Foundation.MediaQuery.atLeast('medium')) {

  $(function() {
    if($.cookie('showed_modal') !== "true") {
  
  setTimeout(
    function() 
    {
  $("#covidModal").foundation("open");
    }, 250);
  
      $.cookie('showed_modal', 'true', { expires: 365 }); 
    }
  });

}

// 7. Find Us
// ----------

$(function(){
  if($('body').hasClass('find-us')){
  
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
    
  }
});



// 8. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});
$(function() {
  window.addEventListener('load', AOS.refresh);
});

}

// 9. Page Transitions
// -------------------

const options = {
  animationSelector: '[class*="swup-transition-"]',
  containers: [ '#swup-body', '#swup-menu' ],
  plugins: [ new SwupBodyClassPlugin() ]
};
const swup = new Swup( options );

// 10. Run Once
// ------------

init();

swup.on( 'contentReplaced', init );

} );