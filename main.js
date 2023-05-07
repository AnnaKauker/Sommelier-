$('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle();
    $(this).toggleClass('active');
});





  $(".read").click(function(){
     $(this).prev().toggle();
     $(this).siblings('.dots').toggle();
     if($(this).text()=='Mehr'){
      $(this).text('Weniger');
          }
          else{
      $(this).text('Mehr');
          };
       });








  $('.testimonial-slider-container').slick({
	responsive: [
        {
    breakpoint: 2054,
    settings: {
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 3000, // How long between each slide when auto-playing
        speed: 1000, // How fast is the transition in milliseconds
        arrows: true, // Do you want to show arrows to trigger each slide
        accessibility: true, // Enables keyboard tabbing and arrow key navigation
        dots: true, // Enables the dots below to show how many slides
        fade: false, // Changes the animate from slide to fade if true - false=good for Mobile
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
            }
        },
        {
        breakpoint: 1554,
        settings: {
            autoplay: true, // Do we want it to autoplay? true or false
            autoplaySpeed: 3000, // How long between each slide when auto-playing
            speed: 1000, // How fast is the transition in milliseconds
            arrows: false, // Do you want to show arrows to trigger each slide
            accessibility: true, // Enables keyboard tabbing and arrow key navigation
            dots: true, // Enables the dots below to show how many slides
            fade: true, // Changes the animate from slide to fade if true - false=good for Mobile
            infinite: true, // When true, means that it will scroll in a circle
            pauseOnHover: true, // When true means the autoplay pauses when hovering
            pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
                }
            }
        ]   
    });



    //  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
  
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length == 0) {
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
          }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
      }
    })
    
    // Background image lazy load
    document.addEventListener("DOMContentLoaded", function() {
      var lazyloadImages;
    
      if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.classList.remove("lazy");
              imageObserver.unobserve(image);
            }
          });
        });


        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
          });
        } else {
          var lazyloadThrottleTimeout;
          lazyloadImages = document.querySelectorAll(".lazy");
      
          function lazyload () {
            if(lazyloadThrottleTimeout) {
              clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                      img.src = img.dataset.src;
                      img.classList.remove('lazy');
                    }
                });
                if(lazyloadImages.length == 0) {
                  document.removeEventListener("scroll", lazyload);
                  window.removeEventListener("resize", lazyload);
                  window.removeEventListener("orientationChange", lazyload);
                }
              }, 20);
            }
        
            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
          }
        })
      