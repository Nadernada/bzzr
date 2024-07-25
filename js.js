
document.addEventListener('DOMContentLoaded', () => {



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


})
