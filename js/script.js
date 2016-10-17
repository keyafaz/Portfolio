
// Script to open and close sidenav
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";

}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function() {
  
  function parallaxIt() {

    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // on window scroll event
    $fwindow.on('scroll resize', function() {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }); 

    // for each of content parallax element
    $('[data-type="content"]').each(function (index, e) {
      var $contentObj = $(this);
      var fgOffset = parseInt($contentObj.offset().top);
      var yPos;
      var speed = ($contentObj.data('speed') || 1 );

      $fwindow.on('scroll resize', function (){
        yPos = fgOffset - scrollTop / speed; 

        $contentObj.css('top', yPos);
      });
    });

    // for each of background parallax element
    $('[data-type="background"]').each(function(){
      var $backgroundObj = $(this);
      var bgOffset = parseInt($backgroundObj.offset().top);
      var yPos;
      var coords;
      var speed = ($backgroundObj.data('speed') || 0 );

      $fwindow.on('scroll resize', function() {
        yPos = - ((scrollTop - bgOffset) / speed); 
        coords = '50% '+ yPos + 'px';

        $backgroundObj.css({ backgroundPosition: coords });
      }); 
    }); 

    // triggers winodw scroll for refresh
    $fwindow.trigger('scroll');
  };

  parallaxIt();
    $( "#tabs" ).tabs({
       active: false,
       collapsible: true
  });


});