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
  $('.75width').css('width', wwidth * .75);

  $('.15width').css('width', wwidth * .15);
  $('.panelpic').css('width', wwidth * .25);
  $('#mainlogo').css('width', wwidth * .30);
  $('#width').text(wwidth);
  $('#height').text(wheight);


  $(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.fullwidth').css('width', wwidth);
  $('.50height').css('height', wheight * .50);
  $('.50width').css('width', wwidth * .50);
  $('.75width').css('width', wwidth * .75);
  $('.15width').css('width', wwidth * .15);
  $('.panelpic').css('width', wwidth * .25);
  $('#mainlogo').css('width', wwidth * .30);
  $('#width').text(wwidth);
  $('#height').text(wheight);

}) //on resize

//$("#mainlogo").bind("load", function () { $(this).fadeIn("slow"); });
$('#opener1').hide().delay(500).fadeIn(1000);
$('#opener1').delay(8000).fadeOut(1000);
$('#opener2').hide().delay(11000).fadeIn(1000);
$('#opener2').delay(8000).fadeOut(1000);
$('#opener3').hide().delay(22000).fadeIn(1000);
$('#opener3').delay(5000).fadeOut(1000);


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
      bottom: 0 + "%" ,
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
      bottom: 0 + "%" ,
      delay: 24,
      ease: Cubic.easeOut
    });

  ////Create scenes, set pins, trigger when images are visible, and add to controller


  var scene1 = new ScrollScene({triggerElement: "#community", duration: 51000})
    .setPin("#community")
    .addTo(controller2);

  var scene1b = new ScrollScene({triggerElement: '#community', duration: 15200}) 
    .setTween(fluffdancertween)
    .addTo(controller2);

  var scene1a = new ScrollScene({triggerElement: '#community', duration: 18600}) 
    .setTween(flufftween)
    .addTo(controller2);

  var scene1c = new ScrollScene({triggerElement: '#community', duration: 30000}) 
    .setTween(fmtween1)
    .addTo(controller2);

  var scene1d = new ScrollScene({triggerElement: '#community', duration: 50000}) 
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
      bottom: 25 + "%",
      delay: 23,
      ease: Cubic.easeOut
    });


    var scene2a = new ScrollScene({triggerElement: '#events', duration: 150000}) 
      .setPin("#events")
      .addTo(controller2);
    
    var scene2b = new ScrollScene({triggerElement: '#events', duration: 15000}) 
      .setTween(snowtween1)
      .addTo(controller2);

    var scene2c = new ScrollScene({triggerElement: '#events', duration: 25000}) 
      .setTween(snowtween2)
      .addTo(controller2);

    var scene2d = new ScrollScene({triggerElement: '#events', duration: 35000}) 
      .setTween(snowtween3)
      .addTo(controller2);
        
    var scene2e = new ScrollScene({triggerElement: '#events', duration: 45000}) 
      .setTween(snowtween4)
      .addTo(controller2);

    var scene2f = new ScrollScene({triggerElement: '#events', duration: 55000}) 
      .setTween(walltween1)
      .addTo(controller2);

    var scene2g = new ScrollScene({triggerElement: '#events', duration: 70000}) 
      .setTween(playertween)
      .addTo(controller2);


    //traintweens
   
    var traintween1 = TweenMax.staggerFromTo('#train #traintext1', 4, 
    { 
      right: 125 + "%"
    }, 
    {
      right: 50 + "%",
      delay: 20,
      ease: Cubic.easeOut
    
    });

    var traintween2 = TweenMax.staggerFromTo('#train .slidepic8', 4, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });

    var traintween3 = TweenMax.staggerFromTo('#train #traintext2', 4, 
    { 
      left: 125 + "%"
    }, 
    {
      left: 50 + "%",
      delay: 20,
      ease: Cubic.easeOut
    });

    var traintween4 = TweenMax.staggerFromTo('#train .slidepic9', 4, 
    { 
      right: 125 + "%"
    }, 
    {
      right: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    }); 

    var traintween5 = TweenMax.staggerFromTo('#train #traintext3', 4, 
    {  
      right: 125 + "%"
    }, 
    {
      right: 50 + "%",
      delay: 20,
      ease: Cubic.easeOut  
    }); 

    var traintween6 = TweenMax.staggerFromTo('#train .slidepic10', 6, 
    { 
      left: 125 + "%"
    }, 
    {
      left: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    }); 


    var scene3a = new ScrollScene({triggerElement: '#train', duration: 425000}) 
      .setPin("#train")
      .addTo(controller2);
    
    var scene3b = new ScrollScene({triggerElement: '#train', duration: 25000}) 
      .setTween(traintween1)
      .addTo(controller2);
    
    var scene3c = new ScrollScene({triggerElement: '#train', duration: 125000}) 
      .setTween(traintween2)
      .addTo(controller2);

    var scene3d = new ScrollScene({triggerElement: '#train', duration: 160000}) 
      .setTween(traintween3)
      .addTo(controller2);
        
    var scene3e = new ScrollScene({triggerElement: '#train', duration: 260000}) 
      .setTween(traintween4)
      .addTo(controller2);

    var scene3f = new ScrollScene({triggerElement: '#train', duration: 305000}) 
      .setTween(traintween5)
      .addTo(controller2);

    var scene3g = new ScrollScene({triggerElement: '#train', duration: 395000}) 
      .setTween(traintween6)
      .addTo(controller2);

    //train coming video tween



    var playertween2 = TweenMax.staggerFromTo('#trainslide #playicon2', 4, 
    { 
      right: 125 + "%", 
      bottom: 45 + "%"
    }, 
    {
      right: 70 + "%",
      bottom: 45 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var scene4a = new ScrollScene({triggerElement: '#trainslide', duration: 50000}) 
      .setPin("#trainslide")
      .addTo(controller2);

    var scene4b = new ScrollScene({triggerElement: '#trainslide', duration: 25000}) 
      .setTween(playertween2)
      .addTo(controller2);

   
    /*var scene4b = new ScrollScene({triggerElement: '#tour1', duration: 500}) 
      .setPin("#tour2")
      .addTo(controller2);*/
 //business tweens
    var colortween1 = TweenMax.staggerFromTo('#business .colorpic1', 8, 
    { 
      opacity: 0
    }, 
    {
      opacity: .50,
      delay: 20,
    });
    var slidetween1 = TweenMax.staggerFromTo('#business .slidepic2', 9, 
    { 
      right: 125 + "%" 
    }, 
    {
      right: 0 + "%",
      delay: 30,
      ease: Cubic.easeOut
    });

    var colortween2 = TweenMax.staggerFromTo('#business .colorpic2', 8, 
    { 
      right: 0 + "%",
      opacity: 0
    }, 
    {
      right: 0 + "%",
      opacity: .50,
      delay: 30,
    });

    var bwtween1 = TweenMax.staggerFromTo('#business .bwpic1', 3, 
    { 
      left: 150 + "%" 
    }, 
    {
      left:75 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });

    var bwtween2 = TweenMax.staggerFromTo('#business .bwpic2', 7, 
    { 
      left:150 + "%"

    }, 
    {
      left:50 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });

    var bwtween3 = TweenMax.staggerFromTo('#business .bwpic3', 11, 
    { 
      left:150 + "%"
    }, 
    {
      left: 25 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });

    var bwtween4 = TweenMax.staggerFromTo('#business .bwpic4', 15, 
    { 
      left:150 + "%"
    }, 
    {
      left: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });

    var amestween1 = TweenMax.staggerFromTo('#business .slidepic3', 8, 
    { 
      left: 0 + "%",
      top: -150 + "%" 
    }, 
    {
      left: 0 + "%",
      top: 0 + "%" ,
      delay: 25,
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
      delay: 30,
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
      delay: 30,
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
      delay: 30,
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
      delay: 30,
      ease: Cubic.easeOut
    });

    var buildingtween1 = TweenMax.staggerFromTo('#business .slidepic4', 7, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });

    var arttween1 = TweenMax.staggerFromTo('#business .slidepic5', 7, 
    { 
      right: 125 + "%" 
    }, 
    {
      right: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });


    var arttween2 = TweenMax.staggerFromTo('#business .slidepic6', 7, 
    { 
      right: 0 + "%",
      bottom: -200 + "%" 
    }, 
    {
      right: 0 + "%",
      bottom: 101 + "%",
      delay: 25,
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

     var buildingtween6 = TweenMax.staggerFromTo('#business .slidepic11', 15, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 40,
      ease: Cubic.easeOut
    });

    var buildingtween7 = TweenMax.staggerFromTo('#business .slidepic12', 10, 
    { 
      right: 125 + "%" 
    }, 
    {
      right: 0 + "%",
      delay: 45,
      ease: Cubic.easeOut
    });

    var buildingtween8 = TweenMax.staggerFromTo('#business .slidepic13', 15, 
   { 
      right: 0 + "%",
      bottom: -200 + "%" 
    }, 
    {
      right: 0 + "%",
      bottom: 101 + "%",
      delay: 45,
      ease: Cubic.easeOut
    });
    var buildingtween9 = TweenMax.staggerFromTo('#business .slidepic14', 15, 
   { 
      left: 125 + "%"
    }, 
    {
      left: -101 + "%",
      delay: 45,
      ease: Cubic.easeOut
    });
    var biztween = TweenMax.staggerFromTo('#business .slidepic15', 15,  
    { 
      right: 125 + "%" 
    }, 
    {
      right: 0 + "%",
      delay: 45,
      ease: Cubic.easeOut
    });

    var playertween3 = TweenMax.staggerFromTo('#business #playicon3', 7, 
    { 
      right: 125 + "%", 
      bottom: 30 + "%"
    }, 
    {
      right: 70 + "%",
      bottom: 30 + "%",
      delay: 65,
      ease: Cubic.easeOut
    });
  
    //Create scenes, set pins, trigger when images are visible, and add to controller
    var scene5 = new ScrollScene({triggerElement: '#business', duration: 2900000}) 
      .setPin("#business")
      .addTo(controller2);

    var scene5a = new ScrollScene({triggerElement: '#business', duration: 56000}) 
      .setTween(colortween1)
      .addTo(controller2);

    var scene5b = new ScrollScene({triggerElement: '#business', duration: 69000}) 
      .setTween(slidetween1)
      .addTo(controller2);

    var scene5c = new ScrollScene({triggerElement: '#business', duration: 84000}) 
      .setTween(colortween2)
      .addTo(controller2);

    var scene5d = new ScrollScene({triggerElement: '#business', duration: 120000}) 
      .setTween(bwtween1)
      .addTo(controller2);


    var scene5e = new ScrollScene({triggerElement: '#business', duration: 125000}) 
      .setTween(bwtween2)
      .addTo(controller2);

    var scene5f = new ScrollScene({triggerElement: '#business', duration: 130000}) 
      .setTween(bwtween3)
      .addTo(controller2);

    var scene5g = new ScrollScene({triggerElement: '#business', duration: 135000}) 
      .setTween(bwtween4)
      .addTo(controller2);

    var scene5h = new ScrollScene({triggerElement: '#business', duration: 180000}) 
      .setTween(amestween1)
      .addTo(controller2);

    var scene5i = new ScrollScene({triggerElement: '#business', duration: 220000}) 
      .setTween(amestween2)
      .addTo(controller2);

    var scene5j = new ScrollScene({triggerElement: '#business', duration: 223000}) 
      .setTween(amestween3)
      .addTo(controller2);

    var scene5k = new ScrollScene({triggerElement: '#business', duration: 226000}) 
      .setTween(amestween4)
      .addTo(controller2);

    var scene5l = new ScrollScene({triggerElement: '#business', duration: 229000}) 
      .setTween(amestween5)
      .addTo(controller2);

    var scene5m = new ScrollScene({triggerElement: '#business', duration: 284000}) 
      .setTween(buildingtween1)
      .addTo(controller2);

    var scene5n = new ScrollScene({triggerElement: '#business', duration: 330000}) 
      .setTween(arttween1)
      .addTo(controller2);


    var scene5p = new ScrollScene({triggerElement: '#business', duration: 415000}) 
      .setTween(arttween2)
      .addTo(controller2);

    var scene5r = new ScrollScene({triggerElement: '#business', duration: 708000}) 
      .setTween(buildingtween2)
      .addTo(controller2);

    var scene5s = new ScrollScene({triggerElement: '#business', duration: 709000}) 
      .setTween(buildingtween3)
      .addTo(controller2);

    var scene5t = new ScrollScene({triggerElement: '#business', duration: 710000}) 
      .setTween(buildingtween4)
      .addTo(controller2);

    var scene5u = new ScrollScene({triggerElement: '#business', duration: 711000}) 
      .setTween(buildingtween5)
      .addTo(controller2);

    var scene5v = new ScrollScene({triggerElement: '#business', duration: 1100000}) 
      .setTween(buildingtween6)
      .addTo(controller2);
    
    var scene5w = new ScrollScene({triggerElement: '#business', duration: 1110000}) 
      .setTween(buildingtween7)
      .addTo(controller2);

    var scene5x = new ScrollScene({triggerElement: '#business', duration: 1500000}) 
      .setTween(buildingtween8)
      .addTo(controller2);

    var scene5y = new ScrollScene({triggerElement: '#business', duration: 1900000}) 
      .setTween(buildingtween9)
      .addTo(controller2);

    var scene5z = new ScrollScene({triggerElement: '#business', duration: 2300000}) 
      .setTween(biztween)
      .addTo(controller2);

    var scene5z2 = new ScrollScene({triggerElement: '#business', duration: 2390000}) 
      .setTween(playertween3)
      .addTo(controller2);


    //redev tweens
var redevtween1 = TweenMax.staggerFromTo('#redev #traintext1', 4, 
    { 
      left: 125 + "%"
    }, 
    {
      left: 50 + "%",
      delay: 25,
      ease: Cubic.easeOut
    
    });

    var redevtween2 = TweenMax.staggerFromTo('#redev .slidepic17', 4, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    });

    var redevtween3 = TweenMax.staggerFromTo('#redev #traintext2', 4, 
    { 
      right: 125 + "%"
    }, 
    {
      right: 50 + "%",
      delay: 20,
      ease: Cubic.easeOut
    });

    var redevtween4 = TweenMax.staggerFromTo('#redev .slidepic22', 4, 
    { 
      right: 125 + "%"
    }, 
    {
      right: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    }); 

    var redevtween5 = TweenMax.staggerFromTo('#redev #traintext3', 4, 
    {  
      left: 125 + "%"
    }, 
    {
      left: 50 + "%",
      delay: 20,
      ease: Cubic.easeOut  
    }); 

    var redevtween6 = TweenMax.staggerFromTo('#redev .slidepic21', 6, 
    { 
      left: 125 + "%"
    }, 
    {
      left: 0 + "%",
      delay: 25,
      ease: Cubic.easeOut
    }); 



    var scene6a = new ScrollScene({triggerElement: '#redev', duration: 550000}) 
      .setPin("#redev")
      .addTo(controller2);
    
    var scene6b = new ScrollScene({triggerElement: '#redev', duration: 50000}) 
      .setTween(redevtween1)
      .addTo(controller2);
    
    var scene6c = new ScrollScene({triggerElement: '#redev', duration: 150000}) 
      .setTween(redevtween2)
      .addTo(controller2);

    var scene6d = new ScrollScene({triggerElement: '#redev', duration: 185000}) 
      .setTween(redevtween3)
      .addTo(controller2);
        
    var scene6e = new ScrollScene({triggerElement: '#redev', duration: 285000}) 
      .setTween(redevtween4)
      .addTo(controller2);

    var scene6f = new ScrollScene({triggerElement: '#redev', duration: 315000}) 
      .setTween(redevtween5)
      .addTo(controller2);

    var scene6g = new ScrollScene({triggerElement: '#redev', duration: 455000}) 
      .setTween(redevtween6)
      .addTo(controller2);

    var playertween3 = TweenMax.staggerFromTo('#redevslide #playicon3', 4, 
    { 
      right: 125 + "%", 
      bottom: 20 + "%"
    }, 
    {
      right: 70 + "%",
      bottom: 20 + "%",
      delay: 15,
      ease: Cubic.easeOut
    });

    var scene7a = new ScrollScene({triggerElement: '#redevslide', duration: 100000}) 
      .setPin("#redevslide")
      .addTo(controller2);

    var scene7b = new ScrollScene({triggerElement: '#redevslide', duration: 25000}) 
      .setTween(playertween3)
      .addTo(controller2);


    var scene9 = new ScrollScene({triggerElement: '#tour1', duration: 10000}) 
          .setPin("#tour1")
          .addTo(controller2);

});

//redraw map on resize
$(window).resize(function(){
  location.reload();
});

//add tour stops
  var locations = [
    ['Union United', 42.381307, -71.099733, 1, 'https://player.vimeo.com/video/123591383', 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=1|cc6666|000000'],
    ['Affordable Housing', 42.380508, -71.100172, 2,'https://player.vimeo.com/video/123645660','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=2|cc6666|000000'],
    ['Local Jobs and Workers Rights', 42.380746,    -71.098092, 3,'https://player.vimeo.com/video/125298543','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=3|cc6666|000000'],
    ['Small Business Protection', 42.38011, -71.097088, 4,'https://player.vimeo.com/video/125299384','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=4|cc6666|000000'],
    ['History of Community Organizing', 42.379674, -71.096366, 5,'https://player.vimeo.com/video/124195710','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=5|cc6666|000000'],
    ['Green Space', 42.377, -71.096093, 6,'https://player.vimeo.com/video/125300942','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=6|cc6666|000000'],
    ['Green Line Extension', 42.376768, -71.095627, 7,'https://player.vimeo.com/video/124197491','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=7|cc6666|000000'],
    ['Public Safety', 42.378882, -71.092666, 8,'https://player.vimeo.com/video/125362876','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=8|cc6666|000000'],
    ['Arts, Culture and Community Resources', 42.379684, -71.093669, 9,'https://player.vimeo.com/video/125363521','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=9|cc6666|000000'],
    ['Participatory Planning', 42.379332, -71.094231, 10,'https://player.vimeo.com/video/125364062','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=10|cc6666|000000']
  ];

var locations2 = [
    ['Old Post Office', 42.379628, -71.093640, 1, 'https://player.vimeo.com/video/123591383', 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=1|cc6666|000000'],
    ['Parcels D2, D6', 42.378614, -71.094584, 2,'https://player.vimeo.com/video/123645660','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=2|cc6666|000000'],
    ['Parcels D3, D4', 42.377290, -71.095496, 3,'https://player.vimeo.com/video/125298543','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=3|cc6666|000000'],
    ['Washington St. & Somerville Ave.', 42.379834, -71.096418, 4,'https://player.vimeo.com/video/125299384','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=4|cc6666|000000'],
    ['Market Basket & Innovation District', 42.381625, -71.100978, 5,'https://player.vimeo.com/video/124195710','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=5|cc6666|000000'],
    ['Union Square Plaza', 42.379707, -71.094745, 6,'https://player.vimeo.com/video/125300942','http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=6|cc6666|000000']
    
  ];
 var map1 = new google.maps.Map(document.getElementById('map1'), {
      zoom: 16,
      center: new google.maps.LatLng(42.379198, -71.096366), // Union Square, Somerville, MA
     disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,

      scrollwheel: false,
      //set map styles
      styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#7bc8e5"},{"saturation":"0"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#bcbcbc"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#c2c1c1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#caebfa"}]},{"featureType":"administrative.land_parcel","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#b2d3e0"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#caebfa"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#e50b0b"}]},{"featureType":"landscape.man_made","elementType":"labels.text.fill","stylers":[{"color":"#ace8fb"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#caebfa"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#6b6262"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"color":"#545151"},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#4d4b4b"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"color":"#999797"},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"weight":"0.01"},{"saturation":"-41"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
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
      styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#7bc8e5"},{"saturation":"0"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#bcbcbc"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#c2c1c1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#caebfa"}]},{"featureType":"administrative.land_parcel","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#b2d3e0"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#caebfa"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#e50b0b"}]},{"featureType":"landscape.man_made","elementType":"labels.text.fill","stylers":[{"color":"#ace8fb"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#caebfa"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#caebfa"},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#6b6262"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"color":"#545151"},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#4d4b4b"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"color":"#999797"},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"weight":"0.01"},{"saturation":"-41"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
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


var n = $('#nav');
var nb = $('.navbar');
var nt = $('.navtab');
var vp = $('#viewport');

$(document).ready(function() {
  $('.navtab').click(function() {
  $('.navbar').slideToggle();
  $('.navbar').css('display: block');
});


});$(window).scroll(function () {
        if( $(this).scrollTop() > 0) {
          nt.addClass("nav-scrolled");
          n.addClass("nav-scrolled");
        } else {
          nt.addClass("nav-scrolled");
          n.addClass("nav-scrolled");
        }
      });




  