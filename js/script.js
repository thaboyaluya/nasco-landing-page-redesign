  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
   const icon = document.getElementById('menuIcon');
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));


let isOpen = false; // Track menu state

  btn.addEventListener('click', () => {
    if (!isOpen) {
      // Change to close (X) icon
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>`;
      isOpen = true;
    } else {
      // Change back to hamburger icon
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>`;
      isOpen = false;
    }
  });

  const counters = document.querySelectorAll('.count');
const speed = 200; // lower = faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counter);
});


 $(document).ready(function(){
    $("#nascoSocialCarousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 20,
      nav: false,
      dots: true,
        animateOut: "fadeOut",
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 }
      }
    });
  });

  $(document).ready(function(){
  $("#nascoHero").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    animateOut: "fadeOut",
    margin: 20,
    nav: false,
    dots: true,
     lazyLoad: true, 
        responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 }
      }
  });
});

  $(document).ready(function(){
    $("#productCarousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      nav: false,
      dots: true,
       lazyLoad: true, 
      animateOut: "fadeOut"
    });
  });