const ratingNumbers = document.querySelectorAll('.rating-number');
let activeNumber = null;

ratingNumbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (activeNumber !== null) {
      activeNumber.classList.remove('active');
    }

    activeNumber = number;
    number.classList.add('active');

    document.querySelector('.rating');
  });
});

