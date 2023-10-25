const email = document.getElementById("email");

let isEmailValid = false;
let isCountryValid = false;
let isZipCodeValid = false;
let isPasswordValid = false;
let isConPasswordValid = false;

function validateForm() {
  const submitButton = document.getElementById("submit");
  const finalText = document.getElementById("text");

  submitButton.addEventListener("click", function () {
    if (
      isEmailValid &&
      isCountryValid &&
      isZipCodeValid &&
      isPasswordValid &&
      isConPasswordValid
    ) {
      finalText.textContent = "daghe";
      const gif = document.getElementById("gif");
      gif.style.display = "block";
    } else {
      finalText.textContent = "nope";
    }
  });
}

function validateEmail() {
  email.addEventListener("input", () => {
    console.log(email.validity.typeMismatch);
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Please, type a valid email!");
      email.reportValidity();
      email.style.borderColor = "red";
      isEmailValid = false;
    } else {
      email.setCustomValidity("");
      email.reportValidity();
      email.style.borderColor = "green";
      isEmailValid = true;
    }
  });
}

function validateCountry() {
  const country = document.getElementById("country");
  const dataList = document.getElementById("countries");
  const options = Array.from(dataList.options).map((option) =>
    option.value.toLowerCase()
  );

  country.addEventListener("change", () => {
    const enteredValue = country.value.toLowerCase();
    if (options.includes(enteredValue)) {
      country.style.borderColor = "green";
      country.setCustomValidity("");
      isCountryValid = true;
    } else {
      country.setCustomValidity(
        "Please, select a valid country from the list!"
      );
      country.reportValidity("");
      country.style.borderColor = "red";
      isCountryValid = false;
    }
  });
}

function validateZipCode() {
  const zipcode = document.getElementById("zipcode");
  const maxLength = 5; // Change this value to your desired maximum length

  zipcode.addEventListener("input", function () {
    if (this.value.length > maxLength) {
      this.value = this.value.slice(0, maxLength);
    }
    if (this.value.length === maxLength) {
      zipcode.setCustomValidity("");
      zipcode.style.borderColor = "green";
      isZipCodeValid = true;
    } else {
      zipcode.setCustomValidity("Enter a valid zipcode!");
      zipcode.reportValidity();
      zipcode.style.borderColor = "red";
      isZipCodeValid = false;
    }
  });
}

function validatePassword() {
  const password = document.getElementById("password");
  const conpassword = document.getElementById("conpassword");

  const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/; // Adjusted the regex pattern for a password between 8 and 16 characters

  password.addEventListener("input", function () {
    if (passReg.test(password.value)) {
      password.setCustomValidity("");
      password.style.borderColor = "green";
      isPasswordValid = true;
    } else {
      password.setCustomValidity(
        "Password must contain at least 8 characters, including at least one digit" +
          ", one lowercase letter, and one uppercase letter."
      );
      password.reportValidity();
      password.style.borderColor = "red";
      isPasswordValid = false;
    }
  });

  conpassword.addEventListener("input", function () {
    if (
      passReg.test(conpassword.value) &&
      password.value === conpassword.value
    ) {
      conpassword.setCustomValidity("");
      conpassword.style.borderColor = "green";
      isConPasswordValid = true;
    } else {
      conpassword.setCustomValidity("Passwords does not match!");
      conpassword.reportValidity();
      conpassword.style.borderColor = "red";
      isConPasswordValid = false;
    }
  });
}

validateEmail();
validateCountry();
validateZipCode();
validatePassword();
validateForm();
