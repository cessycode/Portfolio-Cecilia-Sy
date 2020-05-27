$(document).ready(function() {

    /* for sticky-nav impt: waypoint is a plug-in */
    $('.js--section-about').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        /* sets the distance when class 'sticky' is activated */
        offset: '60px'
    });


     /*******   ANIMATE HEADERS  *******/
    $('.js--wp-header').waypoint(function(direction) {
        $('.js--wp-header').addClass('animated slideInLeft');
    }, {
        offset: '50%'
    });

    $('.js--wp-header-bar').waypoint(function(direction) {
        $('.js--wp-header-bar').addClass('animated slideInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-header2').waypoint(function(direction) {
        $('.js--wp-header2').addClass('animated slideInLeft');
    }, {
        offset: '50%'
    });

    $('.js--wp-header-bar2').waypoint(function(direction) {
        $('.js--wp-header-bar2').addClass('animated slideInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-header3').waypoint(function(direction) {
        $('.js--wp-header3').addClass('animated slideInLeft');
    }, {
        offset: '50%'
    });

    $('.js--wp-header-bar3').waypoint(function(direction) {
        $('.js--wp-header-bar3').addClass('animated slideInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-header4').waypoint(function(direction) {
        $('.js--wp-header4').addClass('animated slideInLeft');
    }, {
        offset: '50%'
    });

    $('.js--wp-header-bar4').waypoint(function(direction) {
        $('.js--wp-header-bar4').addClass('animated slideInRight');
    }, {
        offset: '50%'
    });



    /*******   ANIMATE HEXAGON  ********/

    $('.js--hexa-1').waypoint(function(direction){
        $('.js--hexa-1').addClass('animated flipInY');
    }, {
        offset: '50%'
    });

    $('.js--hexa-1b').waypoint(function(direction){
        $('.js--hexa-1b').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--hexa-2').waypoint(function(direction){
        $('.js--hexa-2').addClass('animated flipInY');
    }, {
        offset: '50%'
    });

    $('.js--hexa-2b').waypoint(function(direction){
        $('.js--hexa-2b').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--hexa-3').waypoint(function(direction){
        $('.js--hexa-3').addClass('animated flipInY');
    }, {
        offset: '50%'
    });

    $('.js--hexa-3b').waypoint(function(direction){
        $('.js--hexa-3b').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--hexa-4').waypoint(function(direction){
        $('.js--hexa-4').addClass('animated flipInY');
    }, {
        offset: '50%'
    });

    $('.js--hexa-4b').waypoint(function(direction){
        $('.js--hexa-4b').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });



    /*******    ANIMATE ABOUT ME AND PIC/LOGO      *******/

    $('.js--profile-pic').waypoint(function(direction){
        $('.js--profile-pic').addClass('animated fadeInLeftBig');
    }, {
        offset: '85%'
    });

    $('.js--about-me').waypoint(function(direction){
        $('.js--about-me').addClass('animated fadeInRightBig');
    }, {
        offset: '85%'
    });


    /*********    ANIMATE PROJECTS     ********/

    $('.js--card-1').waypoint(function(direction){
        $('.js--card-1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--card-2').waypoint(function(direction){
        $('.js--card-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--card-3').waypoint(function(direction){
        $('.js--card-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--card-4').waypoint(function(direction){
        $('.js--card-4').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--card-5').waypoint(function(direction){
        $('.js--card-5').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--card-6').waypoint(function(direction){
        $('.js--card-6').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });


    /*********     ANIMATE SLIDES       **********/
    $('.js--modal-pic').addClass('animated fadeIn');
    

    /************   ANIMATE BLOGS ************/

    $('.js--blog-1').waypoint(function(direction){
        $('.js--blog-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--blog-2').waypoint(function(direction){
        $('.js--blog-2').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--blog-3').waypoint(function(direction){
        $('.js--blog-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    
    /*********   ANIMATE CONTACT    *********/

    $('.js--contact-form').waypoint(function(direction){
        $('.js--contact-form').addClass('animated zoomIn');
    }, {
        offset: '70%'
    });



    /***********  ANIMATE FOOTER  **************/

    $('.js--social-links').waypoint(function(direction){
        $('.js--social-links').addClass('animated bounce');
    }, {
        offset: '100%'
    });




    /*  NAVIGATION & BUTTON Scrolls */

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ){
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen

                event.preventDefault();
                $('nav, html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                    } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                    };
                });
            }
        }
    });




});

/*scroll to top of page when page is refreshed or reloaded */
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}*/
