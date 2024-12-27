const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const plusIcons = document.querySelectorAll('.plus');
const minusIcons = document.querySelectorAll('.minus')

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    let answerActive = null;

    if (question === answerActive) {
      answers[index].classList.remove('active');
      minusIcons[index].classList.remove('active');
      plusIcons[index].classList.add('deactive')
      answerActive = null;
    }
    
    answers[index].classList.toggle('active');
    minusIcons[index].classList.toggle('active');
    plusIcons[index].classList.toggle('deactive');
  })

});
