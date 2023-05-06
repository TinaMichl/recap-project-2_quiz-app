console.clear();

const main = document.querySelector('[data-js="main"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   const formElements = event.target.elements;
  //   console.log(formElements.question.value);
  //   console.log(formElements.answer.value);
  //   console.log(formElements.input.value);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const newUnorderedList = document.createElement("ul");
  newUnorderedList.classList.add("card-list");
  main.append(newUnorderedList);

  const newListItem = document.createElement("li");
  newListItem.classList.add("card-list__item");
  newUnorderedList.append(newListItem);

  const newArticle = document.createElement("article");
  newArticle.classList.add("card");
  newListItem.append(newArticle);

  const newHeadlineTwo = document.createElement("h2");
  newHeadlineTwo.classList.add("card__question");
  newArticle.append(newHeadlineTwo);
  newHeadlineTwo.textContent = data.question;

  const newParagraph = document.createElement("p");
  newParagraph.classList.add("card__answer");
  newArticle.append(newParagraph);
  newParagraph.textContent = data.answer;

  const newButton = document.createElement("button");
  newButton.classList.add("card__button-answer");
  newArticle.append(newButton);
  newButton.textContent = "The answer";

  newButton.addEventListener("click", () => {
    newParagraph.classList.toggle("card__answer");
  });

  const newUnorderedListTag = document.createElement("ul");
  newUnorderedListTag.classList.add("card__tag-list");
  newArticle.append(newUnorderedListTag);

  const newListItemTag = document.createElement("li");
  newListItemTag.classList.add("card__tag-list-item");
  newUnorderedListTag.append(newListItemTag);
  newListItemTag.textContent = data.input;

  const cardButtonBookmark = document.createElement("div");
  cardButtonBookmark.classList.add("card__button-bookmark");
  newArticle.append(cardButtonBookmark);

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("bookmark");
  cardButtonBookmark.append(newBookmarkButton);

  const newBookmarkIcon = document.createElement("svg");
  newBookmarkIcon.classList.add("bookmark__icon");
  newBookmarkButton.append(newBookmarkIcon);

  event.target.reset();
});

const yourQuestion = document.querySelector('[data-js="your-question-input"]');
const yourAnswer = document.querySelector('[data-js="your-answer-input"]');
const amountLeft1 = document.querySelector('[data-js="amount-left-1"]');
const amountLeft2 = document.querySelector('[data-js="amount-left-2"]');
const maxLength = yourQuestion.getAttribute("maxlength");

const updateAmountLeft1 = (value) => {
  amountLeft1.innerText = value;
};
const updateAmountLeft2 = (value) => {
  amountLeft2.innerText = value;
};

updateAmountLeft1(maxLength);
updateAmountLeft2(maxLength);

yourQuestion.addEventListener("input", () => {
  updateAmountLeft1(maxLength - yourQuestion.value.lenght);
});

yourAnswer.addEventListener("input", () => {
  updateAmountLeft2(maxLength - yourAnswer.value.lenght);
});
