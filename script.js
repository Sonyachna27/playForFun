const buttonClick = document.querySelectorAll('.btn');
const bodyTheme = document.body;
let sunImageSrc = "./images/sun ball.jpg";
let moonImageSrc = "./images/moon.jpg";
const imageBox = document.querySelector('.image-box');
const animateSection = document.querySelector('.cloud__section-bg');
let frontImage = true;
function changeImage(){
  
  if (frontImage) {
    imageBox.src = moonImageSrc;
  } else {
    imageBox.src = sunImageSrc;
  }
  frontImage = !frontImage;
}

function animate() {
    const duration = 1000;
    const startTimestamp = performance.now();

    function step(timestamp) {
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        imageBox.style.opacity = progress;
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}
function animateNextImage() {
  const duration = 1000;
  const startTimestamp = performance.now();

  function step(timestamp) {
      const progress = Math.max(1 - ((timestamp - startTimestamp) / duration), 0); // Обчислення прогресу зникнення

      imageBox.style.opacity = progress; // Застосування прогресу зникнення до прозорості зображення

      if (progress > 0) { // Перевірка, чи анімація ще не завершилася
          requestAnimationFrame(step); // Виклик наступного кроку анімації
      }
  }

  requestAnimationFrame(step); // Початок анімації
}


buttonClick.forEach((button) => {
  button.addEventListener('click', () => {
    animateNextImage();
    setTimeout(changeImage, 2000);
    setTimeout(animate, 2000);
      
  });
});

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const statValues = targetElement.querySelectorAll('.cloud__section-bg');
      
      statValues.forEach(value => {
        value.style.animationName = 'animateBg';
      });
    }
  })
}, { threshold: 0.3 });

let sections = document.querySelectorAll('.cloud__section');
if (sections.length) {
  sections.forEach(section => {
    observer.observe(section);
  })
}
