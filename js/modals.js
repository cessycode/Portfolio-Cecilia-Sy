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

    /**** MODALS CSS *******/
    /****   The Modals  *****/
/*
.modal {
    display: none; 
    position: fixed; 
    margin: 0;
    padding: 0;
    background-color: #ffd633;
    z-index: 1; 

    /* center div */
    /*top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
    width: 700px;
    height: auto;
    overflow: hidden;
}

.slides {
    display: none;
}

.modal img {
    width: 100%;
    height: 480px;
}

.modal .slides {
    border-bottom: 3px solid #ff0066;
}

.modal-content {
    width: 100%; 
    position: relative;
  }

/* Next & previous buttons */
/*.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 350px;
    width:auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 25px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  
  /* Position the "next button" to the right */
  /*.next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* Position the "next button" to the left */
  /*.prev {
      left: 0;
      border-radius: 3px 0 0 3px;
  }
  
 /* On hover, add a black background color with a little bit see-through */
/*.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

 
  /* The Close Button */
  /*.close {
    color:#ff0066;
    float: right;
    font-size: 40px;
    font-weight: bold;
  }

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
} */
  