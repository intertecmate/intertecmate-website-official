// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Animated Counter
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 200;

    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


document.addEventListener("DOMContentLoaded", function(){

  const video = document.getElementById("agencyVideo");
  const button = document.getElementById("soundToggle");

  if(video && button){

    // Default: sound ON
    video.muted = false;
    video.volume = 1;

    button.addEventListener("click", function(){

      if(video.muted){
        video.muted = false;
        button.textContent = "🔇";
      } else {
        video.muted = true;
        button.textContent = "🔊";
      }

    });
  }

});

