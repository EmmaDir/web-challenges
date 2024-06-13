console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

// message
const successMessage = document.querySelector('[data-js="success"]');

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

// error
function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// hide error
hideTosError();
hideSuccessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    const formElements = new FormData(event.target);
    const data = Object.fromEntries(formElements);

    console.log(data);
  } else {
    //
    showTosError();
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  showSuccessMessage();
  alert("Form submitted");
});

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
