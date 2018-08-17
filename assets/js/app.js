$(document).on('turbolinks:load', function() {
  
  $(function(){
    $(document).foundation();
  });
  
  $(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   


  $(function() {
  window.addEventListener('load', AOS.refresh);
  });
  
  $(function() {  
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyZXRoam9obnNkZXNpZ24iLCJhIjoibWRoWDZWUSJ9.n1A58EO10IDrB5yIAKqAPA';
  });


  $(function(){
    if($('body').is('.home')){
      
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
  
  $(function(){
  if($('body').is('.find-us')){
    
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
  });
  });
