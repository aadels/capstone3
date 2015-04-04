$(function() {

  var isTouch = 'ontouchstart' in document.documentElement;
  var topoffset = 0;
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


  // init troller for for Fluff , Events, and, Building Tweens, and Map pages
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

    var playertween = TweenMax.staggerFromTo('#events #playicon', 3, 
    { 
      left: 125 + "%", 
      bottom: 70 + "%"
    }, 
    {
      left: 55 + "%",
      bottom: 70 + "%",
      delay: 20,
      ease: Cubic.easeOut
    });

    var texttween = TweenMax.staggerFromTo('#events #eventstext', 3, 
    { 
      right: 125 + "%", 
      bottom: 50 + "%"
    }, 
    {
      right: 50 + "%",
      bottom: 50 + "%",
      delay: 20,
      ease: Cubic.easeOut
    });

    var scene2 = new ScrollScene({triggerElement: '#events', duration: 18000}) 
      .setPin("#events")
      .addTo(controller2);
    
    var scene2f = new ScrollScene({triggerElement: '#events', duration: 5000}) 
      .setTween(snowtween1)
      .addTo(controller2);

    var scene2g = new ScrollScene({triggerElement: '#events', duration: 6000}) 
      .setTween(snowtween2)
      .addTo(controller2);

    var scene2h = new ScrollScene({triggerElement: '#events', duration: 8000}) 
      .setTween(snowtween3)
      .addTo(controller2);
        
    var scene2i = new ScrollScene({triggerElement: '#events', duration: 10000}) 
      .setTween(snowtween4)
      .addTo(controller2);

    var scene2j = new ScrollScene({triggerElement: '#events', duration: 11000}) 
      .setTween(playertween)
      .addTo(controller2);

    var scene2k = new ScrollScene({triggerElement: '#events', duration: 11000}) 
      .setTween(texttween)
      .addTo(controller2);


    //business tweens
    var colortween1 = TweenMax.staggerFromTo('#business .colorpic1', 7, 
    { 
      opacity: 0
    }, 
    {
      opacity: .75,
      delay: 2,
    });
    var slidetween1 = TweenMax.staggerFromTo('#business .slidepic2', 6, 
    { 
      right: 125 + "%" 
    }, 
    {
      right: 0 + "%",
      delay: 4,
      ease: Cubic.easeOut
    });

    var colortween2 = TweenMax.staggerFromTo('#business .colorpic2', 7, 
    { 
      right: 0 + "%",
      opacity: 0
    }, 
    {
      right: 0 + "%",
      opacity: .75,
      delay: 8,
    });

    var bwtween1 = TweenMax.staggerFromTo('#business .bwpic1', 3, 
    { 
      left: 150 + "%" 
    }, 
    {
      left:75 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var bwtween2 = TweenMax.staggerFromTo('#business .bwpic2', 7, 
    { 
      left:150 + "%"

    }, 
    {
      left:50 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var bwtween3 = TweenMax.staggerFromTo('#business .bwpic3', 11, 
    { 
      left:150 + "%"
    }, 
    {
      left: 25 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var bwtween4 = TweenMax.staggerFromTo('#business .bwpic4', 15, 
    { 
      left:150 + "%"
    }, 
    {
      left: 0 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var amestween1 = TweenMax.staggerFromTo('#business .slidepic3', 6, 
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

    var amestween2 = TweenMax.staggerFromTo('#business .amespic1', 3, 
    { 
      bottom: -150 + "%", 
      right: 75 + "%" 
    }, 
    {
      bottom: 0,
      right: 75 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var amestween3 = TweenMax.staggerFromTo('#business .amespic2', 7, 
    { 
      top: -150 + "%",
      right:50 + "%"

    }, 
    {
      top: 0 + "%" ,
      right: 50 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var amestween4 = TweenMax.staggerFromTo('#business .amespic3', 11, 
    { 
      bottom: -150 + "%",
      right: 25 + "%" 
    }, 
    {
      bottom: 0,
      right: 25 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var amestween5 = TweenMax.staggerFromTo('#business .amespic4', 15, 
    { 
      top: -150 + "%",
      right: 0 + "%"
    }, 
    {
      top: 0 + "%" ,      
      right: 0 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var buildingtween1 = TweenMax.staggerFromTo('#business .slidepic4', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 5,
      ease: Cubic.easeOut
    });

    var arttween1 = TweenMax.staggerFromTo('#business .slidepic5', 2, 
    { 
      right: 125 + "%" 
    }, 
    {
      right: 0 + "%",
      delay: 5,
      ease: Cubic.easeOut
    });

    var arttween2 = TweenMax.staggerFromTo('#business .artlogo1', 2, 
    { 
      left: 0 + "%" ,
      top: -50 + "%"
    }, 
    {
      left: 0 + "%",
      top: 0 + "%",
      delay: 5,
      ease: Cubic.easeOut
    });

    var arttween3 = TweenMax.staggerFromTo('#business .slidepic6', 2, 
    { 
      right: 0 + "%",
      bottom: -200 + "%" 
    }, 
    {
      right: 0 + "%",
      bottom: 101 + "%",
      delay: 5,
      ease: Cubic.easeOut
    });


    var buildingtween2 = TweenMax.staggerFromTo('#business .bldgpic1', 3, 
    { 
      right: 150 + "%" 
    }, 
    {
      right:75 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var buildingtween3 = TweenMax.staggerFromTo('#business .bldgpic2', 7, 
    { 
      right:150 + "%"

    }, 
    {
      right:50 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var buildingtween4 = TweenMax.staggerFromTo('#business .bldgpic3', 11, 
    { 
      right:150 + "%"
    }, 
    {
      right: 25 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var buildingtween5 = TweenMax.staggerFromTo('#business .bldgpic4', 15, 
    { 
      right:150 + "%"
    }, 
    {
      right: 0 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

  
    //Create scenes, set pins, trigger when images are visible, and add to controller
    var scene3 = new ScrollScene({triggerElement: '#business', duration: 605000}) 
      .setPin("#business")
      .addTo(controller2);

    var scene3a = new ScrollScene({triggerElement: '#business', duration: 6000}) 
      .setTween(colortween1)
      .addTo(controller2);

    var scene3b = new ScrollScene({triggerElement: '#business', duration: 13000}) 
      .setTween(slidetween1)
      .addTo(controller2);

    var scene3c = new ScrollScene({triggerElement: '#business', duration: 25000}) 
      .setTween(colortween2)
      .addTo(controller2);

    var scene3d = new ScrollScene({triggerElement: '#business', duration: 27000}) 
      .setTween(bwtween1)
      .addTo(controller2);


    var scene3e = new ScrollScene({triggerElement: '#business', duration: 28000}) 
      .setTween(bwtween2)
      .addTo(controller2);

    var scene3f = new ScrollScene({triggerElement: '#business', duration: 29000}) 
      .setTween(bwtween3)
      .addTo(controller2);

    var scene3g = new ScrollScene({triggerElement: '#business', duration: 30000}) 

    var scene3e = new ScrollScene({triggerElement: '#business', duration: 50000}) 
      .setTween(bwtween2)
      .addTo(controller2);

    var scene3f = new ScrollScene({triggerElement: '#business', duration: 60000}) 
      .setTween(bwtween3)
      .addTo(controller2);

    var scene3g = new ScrollScene({triggerElement: '#business', duration: 70000}) 

      .setTween(bwtween4)
      .addTo(controller2);

    var scene3h = new ScrollScene({triggerElement: '#business', duration: 40000}) 
      .setTween(amestween1)
      .addTo(controller2);

    var scene3i = new ScrollScene({triggerElement: '#business', duration: 60000}) 
      .setTween(amestween2)
      .addTo(controller2);

    var scene3j = new ScrollScene({triggerElement: '#business', duration: 63000}) 
      .setTween(amestween3)
      .addTo(controller2);

    var scene3k = new ScrollScene({triggerElement: '#business', duration: 66000}) 
      .setTween(amestween4)
      .addTo(controller2);

    var scene3l = new ScrollScene({triggerElement: '#business', duration: 69000}) 
      .setTween(amestween5)
      .addTo(controller2);

    var scene3m = new ScrollScene({triggerElement: '#business', duration: 100000}) 
      .setTween(buildingtween1)
      .addTo(controller2);

    var scene3n = new ScrollScene({triggerElement: '#business', duration: 200000}) 
      .setTween(arttween1)
      .addTo(controller2);

    var scene3o = new ScrollScene({triggerElement: '#business', duration: 201000}) 
      .setTween(arttween2)
      .addTo(controller2);

    var scene3p = new ScrollScene({triggerElement: '#business', duration: 300000}) 
      .setTween(arttween3)
      .addTo(controller2);

    var scene3r = new ScrollScene({triggerElement: '#business', duration: 600000}) 
      .setTween(buildingtween2)
      .addTo(controller2);

    var scene3s = new ScrollScene({triggerElement: '#business', duration: 601000}) 
      .setTween(buildingtween3)
      .addTo(controller2);

    var scene3t = new ScrollScene({triggerElement: '#business', duration: 602000}) 
      .setTween(buildingtween4)
      .addTo(controller2);

    var scene3u = new ScrollScene({triggerElement: '#business', duration: 603000}) 
      .setTween(buildingtween5)
      .addTo(controller2);

    // business scenes
    
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
    new ScrollScene({triggerElement: "#housing"})
            .setTween(TweenMax.from("#housing > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);


    new ScrollScene({triggerElement: "#maps"})
            .setTween(TweenMax.from("#maps > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);
    
    new ScrollScene({triggerElement: "#transit"})
            .setTween(TweenMax.from("#transit > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);


});

//redraw map on resize
$(window).resize(function(){
  location.reload();
});

//add tour stops
  var locations = [
    ['Union United', 42.381307, -71.099733, 1, 'https://player.vimeo.com/video/123591383'],
    ['Affordable Housing', 42.380508, -71.100172, 2,'https://player.vimeo.com/video/111537719'],
    ['Local Jobs and Workers Rights', 42.380746,    -71.098092, 3,'https://player.vimeo.com/video/111542966'],
    ['Small Business Protection', 42.38011, -71.097088, 4,'https://player.vimeo.com/video/111544069'],
    ['History of Community Organizing', 42.379674, -71.096366, 5,'https://player.vimeo.com/video/111551065'],
    ['Green Space', 42.377, -71.096093, 6,'https://player.vimeo.com/video/111554655'],
    ['Green Line Extension', 42.376768, -71.095627, 7,'https://player.vimeo.com/video/111555617'],
    ['Public Safety', 42.378882, -71.092666, 8,'https://player.vimeo.com/video/111558282'],
    ['Arts, Culture and Community Resources', 42.379684, -71.093669, 9,'https://player.vimeo.com/video/111529297'],
    ['Participatory Planning', 42.379332, -71.094231, 10,'https://player.vimeo.com/video/111531551']
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
        clickable: true,
        url:locations[i][4]
      });

      // google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //   return function() {
      //     infowindow.setContent(locations[i][0]);
      //     //infowindow.open("#mapvid", marker);
      //     $('#mapvid'.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="' + url + '" />'; },20);

      //   }
      // })(marker, i));

    google.maps.event.addListener(marker, 'click', function() {
    $('#mapvid').html('<iframe style="width:100%;height:100%;" frameborder="0" src="' + this.url + '" />');
  });
}


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

});

/*$(window).scroll(function () {
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


  