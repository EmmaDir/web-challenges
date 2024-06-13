console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = new FormData(event.target);
  const data = Object.fromEntries(formElements);

  console.log(data);

  event.target.reset();
  event.target.elements.firstName.focus();

  console.log(
    "The age-badness-sum of " +
      data.firstName +
      " is " +
      (parseInt(data.age) + parseInt(data.badness))
  );
});
