$(function() {

  var isTouch = 'ontouchstart' in document.documentElement;
  var topoffset = 0;
 var diff, top = 0;


  //window height & width
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.fullwidth').css('width', wwidth);
  $('.50height').css('height', wheight * .50);
  $('.50width').css('width', wwidth * .50);
  $('.15width').css('width', wwidth * .15);
  $('.panelpic').css('width', wwidth * .25);
  $('#mainlogo').css('width', wwidth * .30);



  $(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.fullwidth').css('width', wwidth);
  $('.50height').css('height', wheight * .50);
  $('.50width').css('width', wwidth * .50);
  $('.15width').css('width', wwidth * .15);
  $('.panelpic').css('width', wwidth * .25);
  $('#mainlogo').css('width', wwidth * .30);
  $('#width').text(wwidth);
  $('#height').text(wheight);

}) //on resize

//$("#mainlogo").bind("load", function () { $(this).fadeIn("slow"); });
$('#opener1').hide().delay(500).fadeIn(1000);
$('#opener1').delay(7000).fadeOut(1000);
$('#opener2').hide().delay(10000).fadeIn(1000);
$('#opener2').delay(7000).fadeOut(1000);
$('#opener3').hide().delay(20000).fadeIn(1000);
$('#opener3').delay(7000).fadeOut(1000);


$('#roads').hide().delay(30000).fadeIn(1000);
$('#mainlogo').hide().delay(33000).fadeIn(500);
$('#star').hide().delay(33500).fadeIn(10);
$('#scroll').hide().delay(34500).fadeIn(500);

$('#traintext1').hide().delay(500).fadeIn(1000);
$('#traintext1').delay(9000).fadeOut(1000);
$('#traintext2').hide().delay(12000).fadeIn(1000);
$('#traintext2').delay(9000).fadeOut(1000);
$('#traintext3').hide().delay(26000).fadeIn(1000);
$('#traintext3').delay(9000).fadeOut(1000);


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click
 
var $w = $(window), $display = $(".pixels");

$w.on("scroll", function(e){
  $display.text($w.scrollTop())
});


  // init troller for for Fluff , Events, Train, & Building Tweens, and Map pages
    var controller2 = new ScrollMagic({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    });

 //fluff tweens
  var flufftween = TweenMax.staggerFromTo('#community .smpic', 5, 
    { 
      right: 20 + "%" ,
      bottom: -120 + "%" 

    }, 
    {
      right: 40 + "%",
      bottom: 45 + "%",
      delay: 9, 
      ease: Cubic.easeOut
    });

  var fluffdancertween = TweenMax.staggerFromTo('#community .lgpic', 3, 
    { 
      bottom: -150 + "%" 
    }, 
    {
      bottom: -5 + "%" ,
      ease: Cubic.easeOut
    });

  var fmtween1 = TweenMax.staggerFromTo('#community .lgpic2', 8, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 20,
      ease: Cubic.easeOut
    });
  
  var fmtween2 = TweenMax.staggerFromTo('#community .lgpic3', 9, 
    { 
      bottom: -150 + "%" 
    }, 
    {
      bottom: -5 + "%" ,
      delay: 24,
      ease: Cubic.easeOut
    });

  ////Create scenes, set pins, trigger when images are visible, and add to controller


  var scene1 = new ScrollScene({triggerElement: "#community", duration: 9000})
    .setPin("#community")
    .addTo(controller2);

  var scene1a = new ScrollScene({triggerElement: '#community', duration: 1600}) 
    .setTween(flufftween)
    .addTo(controller2);

  var scene1b = new ScrollScene({triggerElement: '#community', duration: 1200}) 
    .setTween(fluffdancertween)
    .addTo(controller2);

  var scene1c = new ScrollScene({triggerElement: '#community', duration: 6000}) 
    .setTween(fmtween1)
    .addTo(controller2);

  var scene1d = new ScrollScene({triggerElement: '#community', duration: 8000}) 
    .setTween(fmtween2)
    .addTo(controller2);


    //event tweens

    var snowtween1 = TweenMax.staggerFromTo('#events .slidepic1', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

    var snowtween2 = TweenMax.staggerFromTo('#events .snowpic2', 2, 
    { 
      right: 150 + "%" 
    }, 
    {
      right: 25 + "%" ,
      delay: 15,
      ease: Cubic.easeOut
    });
    var snowtween3 = TweenMax.staggerFromTo('#events .snowpic3', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 25 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

    var snowtween4 = TweenMax.staggerFromTo('#events .snowpic4', 2, 
    { 
      bottom: -150 + "%",
      left: 25 + "%"
    }, 
    {
      bottom: 0 + "%",
      left: 25 + "%",
      delay: 18,
      ease: Cubic.easeOut
    });

    var walltween1 = TweenMax.staggerFromTo('#events .slidepic', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 14,
      ease: Cubic.easeOut
    });
    var playertween = TweenMax.staggerFromTo('#events #playicon', 3, 
    { 
      left: 125 + "%", 
      bottom: 10 + "%"
    }, 
    {
      left: 70 + "%",
      bottom: 20 + "%",
      delay: 23,
      ease: Cubic.easeOut
    });


    var scene2a = new ScrollScene({triggerElement: '#events', duration: 20000}) 
      .setPin("#events")
      .addTo(controller2);
    
    var scene2b = new ScrollScene({triggerElement: '#events', duration: 2000}) 
      .setTween(snowtween1)
      .addTo(controller2);

    var scene2c = new ScrollScene({triggerElement: '#events', duration: 5000}) 
      .setTween(snowtween2)
      .addTo(controller2);

    var scene2d = new ScrollScene({triggerElement: '#events', duration: 6000}) 
      .setTween(snowtween3)
      .addTo(controller2);
        
    var scene2e = new ScrollScene({triggerElement: '#events', duration: 8000}) 
      .setTween(snowtween4)
      .addTo(controller2);

    var scene2f = new ScrollScene({triggerElement: '#events', duration: 10000}) 
      .setTween(walltween1)
      .addTo(controller2);

    var scene2g = new ScrollScene({triggerElement: '#events', duration: 13000}) 
      .setTween(playertween)
      .addTo(controller2);


    //traintweens
   
    var traintween1 = TweenMax.staggerFromTo('#train .slidepic7', 7, 
    { 
      right: 0 + "%",
      opacity: 0
    }, 
    {
      right: 0 + "%",
      opacity: 100,
      delay: 20,
    
    });

    var traintween2 = TweenMax.staggerFromTo('#train .slidepic8', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });
    
    var traintween3 = TweenMax.staggerFromTo('#train .slidepic9', 4, 
    { 
      left: 0 + "%",
      top: -150 + "%" 
    }, 
    {
      left: 0 + "%",
      top: 0 + "%" ,
      delay: 15,
      ease: Cubic.easeOut
    });

    var traintween4 = TweenMax.staggerFromTo('#train .slidepic10', 4, 
    { 
      right: 125 + "%" 
    }, 
    {
      right: 0 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

    var playertween2 = TweenMax.staggerFromTo('#trainslide #playicon2', 3, 
    { 
      right: 125 + "%", 
      bottom: 70 + "%"
    }, 
    {
      right: 70 + "%",
      bottom: 70 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });



    var scene3a = new ScrollScene({triggerElement: '#train', duration: 25000}) 
      .setPin("#train")
      .addTo(controller2);
    
    var scene3d = new ScrollScene({triggerElement: '#train', duration: 5000}) 
      .setTween(traintween1)
      .addTo(controller2);
    
    var scene3e = new ScrollScene({triggerElement: '#train', duration: 8000}) 
      .setTween(traintween2)
      .addTo(controller2);

    var scene3f = new ScrollScene({triggerElement: '#train', duration: 11000}) 
      .setTween(traintween3)
      .addTo(controller2);
        
    var scene3g = new ScrollScene({triggerElement: '#train', duration: 14000}) 
      .setTween(traintween4)
      .addTo(controller2);

   var scene4 = new ScrollScene({triggerElement: '#trainslide', duration: 8000}) 
      .setPin("#trainslide")
      .addTo(controller2);

    var scene4a = new ScrollScene({triggerElement: '#trainslide', duration: 5000}) 
      .setTween(playertween2)
      .addTo(controller2);
        
    /*var scene4b = new ScrollScene({triggerElement: '#tour2', duration: 500}) 
      .setPin("#tour2")
      .addTo(controller2);*/

    // init controller for parallax
    var controller = new ScrollMagic({
      globalSceneOptions: {
        triggerHook: "onEnter", duration: $(window).height()*2}});


    new ScrollScene({triggerElement: "#market1"})
            .setTween(TweenMax.from("#market1 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#market2"})
            .setTween(TweenMax.from("#market2 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);
    
    new ScrollScene({triggerElement: "#market3"})
            .setTween(TweenMax.from("#market3 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#train1"})
            .setTween(TweenMax.from("#train1 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#train2"})
            .setTween(TweenMax.from("#train2 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);
    
    new ScrollScene({triggerElement: "#train3"})
            .setTween(TweenMax.from("#train3 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);

  

});

//redraw map on resize
$(window).resize(function(){
  location.reload();
});

//add tour stops
  var locations = [
    ['Union United', 42.381307, -71.099733, 1, 'https://player.vimeo.com/video/123591383', 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=1|cc3300|000000'],
    ['Affordable Housing', 42.380508, -71.100172, 2,'https://player.vimeo.com/video/123645660','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=2|cc3300|000000'],
    ['Local Jobs and Workers Rights', 42.380746,    -71.098092, 3,'https://player.vimeo.com/video/125298543','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=3|cc3300|000000'],
    ['Small Business Protection', 42.38011, -71.097088, 4,'https://player.vimeo.com/video/125299384','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=4|cc3300|000000'],
    ['History of Community Organizing', 42.379674, -71.096366, 5,'https://player.vimeo.com/video/124195710','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=5|cc3300|000000'],
    ['Green Space', 42.377, -71.096093, 6,'https://player.vimeo.com/video/125300942','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=6|cc3300|000000'],
    ['Green Line Extension', 42.376768, -71.095627, 7,'https://player.vimeo.com/video/124197491','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=7|cc3300|000000'],
    ['Public Safety', 42.378882, -71.092666, 8,'https://player.vimeo.com/video/125362876','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=8|cc3300|000000'],
    ['Arts, Culture and Community Resources', 42.379684, -71.093669, 9,'https://player.vimeo.com/video/125363521','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=9|cc3300|000000'],
    ['Participatory Planning', 42.379332, -71.094231, 10,'https://player.vimeo.com/video/125364062','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=10|cc3300|000000']
  ];

var locations2 = [
    ['Old Post Office', 42.379628, -71.093640, 1, 'https://player.vimeo.com/video/123591383', 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=1|cc3300|000000'],
    ['Parcels D2, D6', 42.378614, -71.094584, 2,'https://player.vimeo.com/video/123645660','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=2|cc3300|000000'],
    ['Parcels D3, D4', 42.377290, -71.095496, 3,'https://player.vimeo.com/video/125298543','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=3|cc3300|000000'],
    ['Washington St. & Somerville Ave.', 42.379834, -71.096418, 4,'https://player.vimeo.com/video/125299384','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=4|cc3300|000000'],
    ['Market Basket & Innovation District', 42.381625, -71.100978, 5,'https://player.vimeo.com/video/124195710','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=5|cc3300|000000'],
    ['Union Square Plaza', 42.379707, -71.094745, 6,'https://player.vimeo.com/video/125300942','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=6|cc3300|000000']
    
  ];
 var map1 = new google.maps.Map(document.getElementById('map1'), {
      zoom: 16,
      center: new google.maps.LatLng(42.379198, -71.096366), // Union Square, Somerville, MA
     disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,

      scrollwheel: false,
      //set map styles
      styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"saturation":"-1"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"1"}]},{"featureType":"administrative.neighborhood","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"28"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#66a8b8"},{"visibility":"on"}]}]
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map1,
        icon: locations[i][5],
        clickable: true,
        url:locations[i][4]
      });

    google.maps.event.addListener(marker, 'click', function() {
    $('#mapvid1').html('<iframe style="width:100%;height:100%;" frameborder="0" src="' + this.url + '" />');
  });
}

    var map2= new google.maps.Map(document.getElementById('map2'), {
      zoom: 16,
      center: new google.maps.LatLng(42.379667, -71.097154), // Union Square, Somerville, MA
     disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,

      scrollwheel: false,
      //set map styles
      styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"saturation":"-1"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"1"}]},{"featureType":"administrative.neighborhood","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"28"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#66a8b8"},{"visibility":"on"}]}]
    });

    var infowindow2 = new google.maps.InfoWindow();

    var marker2, i;

    for (i = 0; i < locations2.length; i++) {  
      marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(locations2[i][1], locations2[i][2]),
        map: map2,
        icon: locations2[i][5],
        clickable: true,
        url:locations2[i][4]
      });
    
    google.maps.event.addListener(marker, 'click', function() {
    $('#mapvid2').html('<iframe style="width:100%;height:100%;" frameborder="0" src="' + this.url + '" />');
  });
}

      // google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //   return function() {
      //     infowindow.setContent(locations[i][0]);
      //     //infowindow.open("#mapvid", marker);
      //     $('#mapvid'.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="' + url + '" />'; },20);

      //   }
      // })(marker, i));


var n = $('#nav');
var nb = $('.navbar');
var nt = $('.navtab');
var vp = $('#viewport');

$(document).ready(function() {
        $('.navtab').click(function() {
          $('.navbar').slideToggle();
            $('.navbar').css('display: block');

        });
    
    /*$(document).mouseup(function (e) { 
      if (!nb.is(e.target) && !nt.is(e.target) // if the target of the click isn't the navbar..
         && nb.has(e.target).length === 0) // ... nor a descendant of the navbar
      {
          nb.hide('slow');
      }
    });*/

});$(window).scroll(function () {
        if( $(this).scrollTop() > 0) {
          nt.addClass("nav-scrolled");
          n.addClass("nav-scrolled");
        } else {
          nt.addClass("nav-scrolled");
          n.addClass("nav-scrolled");
        }
      });
/*$(window).resize(function() {
var the_width = $(window).width();
$('#width').text(the_width);
var the_height = $(window).height();
$('#height').text(the_height);
});*/


  