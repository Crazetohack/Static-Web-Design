const readMoreBtn = document.getElementById("readMoreBtn");
if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function () {
        const dots = document.getElementById("dots");
        const moreText = document.getElementById("more");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            readMoreBtn.innerHTML = "Read More";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            readMoreBtn.innerHTML = "Read Less";
            moreText.style.display = "inline";
        }
    });
}


function goBack() {
    window.history.back();
}



// Select all elements with the scroll-animation class
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scroll-animation-visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 4000, // Controls the speed of the sliding effect
        autoplay: {
            delay: 0, // Continuous movement
            disableOnInteraction: false,
        },
        freeMode: true,
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector("#navbar ul");

    if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    // Swiper code if needed...
});

      let currentIndex = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    function moveSlide(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      if (currentIndex >= totalSlides) currentIndex = 0;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }


    /*moving cutomer image*/
  const slider = document.getElementById("customerSlider");

  slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
  });

  slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
  });
