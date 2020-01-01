
$(function(){


  

    //*****************************
    // Match Height Functions
    //*****************************
    $('.matchheight').matchHeight();
    
    
  

    //*****************************
    // Slick Slider
    //*****************************


   
    
    $('.hero-slider').slick({

        dots: false,
        arrows:false,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
        {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                     autoplay: true,
                    arrows: false,
                    draggable: true,
                    swipe: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                     autoplay: true,
                    arrows: false,
                    draggable: true,
                    swipe: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                     autoplay: true,
                    arrows: false,
                    draggable: true,
                    swipe: false,
                }
            },
             {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                     autoplay: true,
                    arrows: false,
                    draggable: true,
                    swipe: false,
                }
            }
        ]
        
    });




    


    //*****************************
    // Responsive Slider
    //*****************************

    var tabrespsliders = {
      1: {slider : '.difference-slider'}
    };


    //*****************************
    // Responsive Slider
    //*****************************

    var respsliders = {
      1: {slider : '.res-slider'}

    };

    //*****************************
    // Function for Responsive Slider 991
    //*****************************

    $.each(tabrespsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 991,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });


    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });   
















    // var m = new Masonry($('.grid').get()[0], {
    //     itemSelector: ".block-grid"
    // });

    
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.parallaxing1').parallax("50%", 0.1);
    $('.parallaxing2').parallax("50%", 0.2);
    $('.parallaxing3').parallax("50%", 0.3);
    $('.parallaxing4').parallax("50%", 0.4);
    $('.parallaxing5').parallax("50%", 0.5);
    $('.parallaxing6').parallax("50%", 0.6);
    $('.parallaxing7').parallax("50%", 0.7);
    $('.parallaxing8').parallax("50%", 0.8);
    $('.parallaxing9').parallax("50%", 0.9);
    $('.parallaxing10').parallax("50%", 0.10);

});




 
     //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');

        $(document).mouseup(function(e) 
        {
            var container = $(".mobile-nav, .mobile-nav-btn");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                $('.mobile-nav-btn, .mobile-nav, .app-container').removeClass('active');
            }
        });
    });
    
