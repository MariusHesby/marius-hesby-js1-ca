// Selecting all the necessary elements
const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector(".message");

function validateForm(event) {
  // Prevent default form actions
  event.preventDefault();

  // Check full name
  if (checkLength(fullName.value, 0)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  // Check address
  if (checkLength(address.value, 25)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  // Check e-mail
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // Check subject
  if (checkLength(subject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

// Check valid length
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// Validate e-mail
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// Confirm that form has been sent
function submitForm(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 0) && checkLength(address.value, 25) && validateEmail(email.value) && checkLength(subject.value, 10)) {
    message.innerHTML = `<p class="sent">Your message has been sent</p>`;
    form.reset();
  } else {
    console.log("dude");
  }
  // clear all input values
}

form.addEventListener("submit", submitForm);

// form.onsubmit = function (event) {
// event.preventDefault();
//   console.log(event);

//   console.log(name.value);
// };

// function checkIfButtonIsDisabled() {
//   // if all inputs pass validation enable the button
//   if (checkLength(firstName.value, 1) && checkLength(lastName.value, 4) && validateEmail(email.value)) {
//     button.disabled = false;
//   } else {
//     // clear the message
//     message.innerHTML = "";
//     // disable button
//     button.disabled = true;
//   }
// }

// // call the same function for each input's keyup event
// firstName.addEventListener("keyup", checkIfButtonIsDisabled);
// lastName.addEventListener("keyup", checkIfButtonIsDisabled);
// email.addEventListener("keyup", checkIfButtonIsDisabled);

// function to run when the form is submitted

// form.addEventListener("submit", submitForm);

// // function to check if the length of the input value is valid
// function checkLength(value, len) {
//   if (value.trim().length >= len) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validateEmail(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternMatches = regEx.test(email);
//   return patternMatches;
// }
