const reviewsContainer = document.querySelector('.reviews-container');
const reviewCards = document.querySelectorAll('.review-card');

let currentCardIndex = 0;

function animateReviews() {
  reviewCards.forEach((card, index) => {
    if (index === currentCardIndex) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  currentCardIndex = (currentCardIndex + 1) % reviewCards.length;

  setTimeout(animateReviews, 5000); // adjust animation interval to your liking
}

animateReviews();