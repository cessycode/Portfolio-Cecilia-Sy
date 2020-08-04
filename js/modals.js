/*******    Modals   *******/
    
    $('#cessyBtn').click(function(){ 
        $('#cessyModal').css('display', 'block'); 
    });

    $('#healthyEatsBtn').click(function(){ 
        $('#healthyEatsModal').css('display', 'block'); 
    });

     /*(x) close button on Modals */
    $('.close').click(function(){
        $('#cessyModal').css('display', 'none'); 
    })
   
    var modalBtns = [...$('.modalBtn')];
    modalBtns.forEach(function(btn){
        btn.onclick = function() {
          var modal = btn.getAttribute('data-modal');
          document.getElementById(modal).style.display = "block";
        }
      });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == $('.modal')) {
      $('.modal').css('display', 'none');
    }
  } 

    /*******     Slide Show on Modals     *********/

    $('.prev').click(function(){
        plusSlides(-1);
    });
    
    $('.next').click(function(){
        plusSlides(1);
    });
    
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    var slideIndex = 1;
    showSlides(slideIndex);
    console.log(showSlides);
    
    function showSlides(n) {
        var i;
        var slides = $('.slides');
    
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex-1].style.display = "block";
    } 

    