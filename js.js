// Function to handle scroll animation with delay
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menuIcon').addEventListener('click', function() {
    var mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('visible'); // Toggle the 'show' class
  });

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScrollAnimationWithDelay() {
  const elements = document.querySelectorAll('.fade-up');
  
  elements.forEach((element, index) => {
    if (isInViewport(element)) {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200); // Adjust delay between elements (200ms delay in this example)
    }
  });
  }
handleScrollAnimationWithDelay();

})
// Listen for scroll events
window.addEventListener('scroll', () => {
  handleScrollAnimationWithDelay();
});
