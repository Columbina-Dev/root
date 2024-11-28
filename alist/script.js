const desktopBackgrounds = [
  "https://minas.mihoyo.com/media/custom/login-bg.jpg" // miHoYo Official
  // More TBA
];

const mobileBackgrounds = [
  "https://i.pximg.net/img-original/img/2023/08/05/00/00/38/110531327_p0.png" // Pixiv: 110531327
  // More TBA
];

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function setRandomBackground() {
  const isMobile = window.matchMedia("(max-width: 960px)").matches;
  const randomImage = isMobile 
    ? getRandomImage(mobileBackgrounds) 
    : getRandomImage(desktopBackgrounds);
  
  document.body.style.setProperty('--background-image', `url(${randomImage})`);
}

window.addEventListener('DOMContentLoaded', setRandomBackground);

window.addEventListener('resize', setRandomBackground);
