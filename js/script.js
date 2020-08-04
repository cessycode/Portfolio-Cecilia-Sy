$(document).ready(function() {

    /* for sticky-nav impt: waypoint is a plug-in */
    $('.section-about').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    /* Mobile Navi */
    $('.js--mobile-nav').click(function() {
        var main = $('.main-nav'),
            icon = $('.mobile-nav i');

        main.slideToggle(200); //toggle between up and down scrolls
        
        if (icon.hasClass('ion-md-menu')){
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
            disableScroll();           
            
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('icon ion-md-close');
            enableScroll();         
        }

        $('#home').click(function(){
            main.css('display', 'none');
            location.reload();
        });

        function disableScroll() {
            var html = jQuery('html');
            html.data('previous-overflow', html.css('overflow'));
            html.css('overflow', 'hidden');
           
        }
        function enableScroll() {
            var html = jQuery('html');
            html.css('overflow', html.data('previous-overflow'));
        }
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

// Header intro-page 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = $('.typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


/*scroll to top of page when page is refreshed or reloaded */
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}*/
