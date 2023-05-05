// phew… not a lot going on here. Please add some code!
console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const cardAnswer = document.querySelector('[data-js="card-answer"]');
const cardAnswerButton = document.querySelector(
  '[data-js="card-answer-button"]'
);
cardAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer");
});
