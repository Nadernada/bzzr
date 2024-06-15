// Function to handle scroll animation with delay
document.addEventListener('DOMContentLoaded', () => {
const home = document.querySelector('.fade-up-all');

  document.getElementById('menuIcon').addEventListener('click', function() {
    var mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('visible');
    if(mobileNav.classList.contains('visible')) {
      home.style.display = 'none'
    } else {
      home.style.display = 'block'
    };
  });

const sections = document.querySelectorAll('.fade-up');
const faqContainer = document.getElementById('faq-container');
const cards = document.querySelectorAll('.card');
const screenHeight = window.innerHeight;

function checkPosition() {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const position = section.getBoundingClientRect().top;
    
    
    if (position < screenHeight * 0.75) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(100px)';
    }
    
  }
  const faqPosition = faqContainer.getBoundingClientRect().top;
  if (faqPosition < screenHeight * 0.75) {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
      }, index * 200); // Adjust the delay as needed
    });
  } else {
    cards.forEach(card => {
      card.style.opacity = '0';
    });
  }
}

window.addEventListener('scroll', checkPosition);



function isMobileDevice() {
  return window.innerWidth < 425;
}

// Function to set the appropriate video source based on the device
function setVideoSource() {
  var videoElement = document.getElementById('home-video');
  if (isMobileDevice()) {
    // Set the source for mobile devices
    videoElement.src = './assets/images/mobile-video.mkv';
  } else {
    // Set the source for desktop devices
    videoElement.src = './assets/images/desktop-video.mp4';
  }
  // Load the new source
  videoElement.load();
}

// Call the function when the page loads
window.onload = function() {
  setVideoSource();
};



const hero = document.querySelectorAll('.fade-late');
const videoContainer = document.querySelector('.video');
const homeVideo = document.getElementById('home-video');
const body = document.getElementsByTagName('body');
home.style.display = 'none';
homeVideo.addEventListener('ended', () => {
  body.style
  homeVideo.style.transform = 'translateY(-110vh)';
  videoContainer.style.display = 'none';
  home.style.display = 'block';
  home.style.transform = 'translateY(0)';
  home.style.opacity = 1;
  hero.forEach((item) => item.classList.add('fade-up'))
})

const gif = document.querySelector('.pages-mockup-gif');
gif.playbackRate = 0.7;

})
// Listen for scroll events
window.addEventListener('scroll', () => {
  handleScrollAnimationWithDelay();
});
