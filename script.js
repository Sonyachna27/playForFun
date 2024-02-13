const buttonClick = document.querySelectorAll('.btn');
// const imageBox = document.querySelector('.image-box');
const bodyTheme = document.body;
let sunImageSrc = "./images/sun ball.jpg";
let moonImageSrc = "./images/moon.jpg";
const imageBox = document.querySelector('.image-box');


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

buttonClick.forEach((button) => {
  button.addEventListener('click', () => {
      animate();
      changeImage();
      bodyTheme.classList.toggle('dark');
  });
});

