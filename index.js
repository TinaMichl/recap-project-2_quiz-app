// phew… not a lot going on here. Please add some code!
console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
console.log("xxx");
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
