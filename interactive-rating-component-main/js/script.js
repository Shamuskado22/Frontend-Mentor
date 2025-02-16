const ratingNumbers = document.querySelectorAll('.rating-number');
const submitButton = document.querySelector('#submit-rating');
const selectedRating = document.querySelector('#selected-rating');
const ratingContainer = document.querySelector('.rating-container');
const thankYouContainer = document.querySelector('.thank-you-container');
let activeNumber = null;

ratingNumbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (activeNumber !== null) {
      activeNumber.classList.remove('active');
    }

    activeNumber = number;
    number.classList.add('active');
  });
});

submitButton.addEventListener('click', () => {
  console.log('Rating submitted!');
  selectedRating.innerHTML = activeNumber.innerHTML;
  ratingContainer.classList.add('hidden');
  thankYouContainer.classList.remove('hidden');

  setTimeout(reloadPage, 3000);
});

function reloadPage() {
  window.location.reload();
}