(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);


 let testiIndex = 0;
    const testiSlides = document.querySelector('.testi-slides');
    const testiDots = document.querySelectorAll('.testi-dots span');
    const testiTotal = testiDots.length;

    function testiShowSlide(i) {
      testiIndex = i;
      testiSlides.style.transform = `translateX(-${testiIndex * 100}%)`;
      testiDots.forEach(dot => dot.classList.remove('active'));
      testiDots[testiIndex].classList.add('active');
    }

    function testiAutoSlide() {
      testiIndex = (testiIndex + 1) % testiTotal;
      testiShowSlide(testiIndex);
    }

    setInterval(testiAutoSlide, 4000); // Auto slide every 4s

    testiDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        testiShowSlide(i);
      });
    });

    const finsSlider = document.getElementById('fins-slider');
    let finsIndex = 0;
    const finsSlides = document.querySelectorAll('.fins-slide');
    const finsTotal = finsSlides.length;

    function finsNextSlide() {
      finsIndex = (finsIndex + 1) % finsTotal;
      finsSlider.style.transform = `translateX(-${finsIndex * 100}%)`;
    }

    setInterval(finsNextSlide, 4000); // Auto slide every 4s



    const customaiContentData = [
      {
        title: "AI and Intelligent Operations",
        image: "https://via.placeholder.com/600x300?text=AI+and+Intelligent+Ops",
        text: "Use AI-powered tools to optimize workflows, predict outcomes, and drive automation."
      },
      {
        title: "Business & Industry Applications",
        image: "https://via.placeholder.com/600x300?text=Business+Applications",
        text: "Tailored software solutions for various industries to enhance productivity and innovation."
      },
      {
        title: "Cybersecurity",
        image: "https://via.placeholder.com/600x300?text=Cybersecurity",
        text: "Advanced cybersecurity tools to protect data, systems, and networks from threats."
      },
      {
        title: "Data and Analytics",
        image: "https://via.placeholder.com/600x300?text=Data+and+Analytics",
        text: "The tools you need to distill complex data into clear, actionable insights — to predict outcomes, profile customers, optimize operations and identify new opportunities through data patterns and market analysis."
      },
      {
        title: "Sovereign Collaboration",
        image: "https://via.placeholder.com/600x300?text=Sovereign+Collaboration",
        text: "Collaborate across borders with secure, sovereign data sharing frameworks and policies."
      },
      {
        title: "Specialized Software",
        image: "https://via.placeholder.com/600x300?text=Specialized+Software",
        text: "Custom software designed for unique business needs and domain-specific challenges."
      },
      {
        title: "Total Experience",
        image: "https://via.placeholder.com/600x300?text=Total+Experience",
        text: "Enhance customer, employee, and user experience with integrated technology solutions."
      },
    ];

    function customaiShowContent(index) {
      const content = customaiContentData[index];
      const contentDiv = document.getElementById("customai-content");

      contentDiv.innerHTML = `
        <div class="customai-content-image">
          <img src="${content.image}" alt="${content.title}" />
        </div>
        <div class="customai-content-text">
          <h2>${content.title}</h2>
          <p>${content.text}</p>
          <a href="#" class="customai-learn-more">Learn more →</a>
        </div>
      `;

      // Update active state
      const buttons = document.querySelectorAll(".customai-menu-item");
      buttons.forEach(btn => btn.classList.remove("active"));
      buttons[index].classList.add("active");
    }

    // Load default content on first render
    customaiShowContent(0);