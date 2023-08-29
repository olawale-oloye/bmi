// "use strict";
// Create variables to store input from HTML form.
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const submit = document.querySelector(".submit-btn");
const reset = document.querySelector(".reset-btn");
const form = document.querySelector("form");
const errorTxt = document.querySelector(".error");
const bmiOutcome = document.querySelector(".bmi-outcome span");
const statusBmi = document.querySelector(".statusBmi  span");
// console.log(statusBmi);

// Validate the form inputs
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(weight.value);
  if (weight.value === "" || height.value === "") {
    errorTxt.innerHTML = "<p>Please fill in the fields</p>";
    setTimeout(function () {
      errorTxt.innerHTML = "";
    }, 3000);
  } else if (!Number(weight.value) || !Number(height.value)) {
    errorTxt.innerHTML = "<p>Both input fields should be numbers</p>";
    setTimeout(function () {
      errorTxt.innerHTML = "";
    }, 3000);
  }
  const heightInMeters = height.value / 100;
  console.log(typeof heightInMeters, heightInMeters);
  const bmiValue = weight.value / heightInMeters ** 2;
  //   console.log(typeof Number(bmiValue.toFixed(2)));
  //   console.log(typeof +bmiValue.toFixed(2));
  bmiOutcome.textContent = bmiValue.toFixed(2);

  if (+bmiValue.toFixed(2) < 18.5) {
    statusBmi.textContent = "You are underweight";
  } else if (+bmiValue.toFixed(2) >= 18.5 && +bmiValue.toFixed(2) <= 24.9) {
    statusBmi.textContent = "You are healthy weight";
  } else if (+bmiValue.toFixed(2) >= 25 && +bmiValue.toFixed(2) <= 29.9) {
    statusBmi.textContent = "You are overweight";
  } else if (+bmiValue.toFixed(2) >= 30 && +bmiValue.toFixed(2) <= 34.9) {
    statusBmi.textContent = "You are Obesity Class I";
  } else if (+bmiValue.toFixed(2) >= 35 && +bmiValue.toFixed(2) <= 39.9) {
    statusBmi.textContent = "You are Obesity Class II";
  } else if (+bmiValue.toFixed(2) >= 40) {
    statusBmi.textContent = "You are Obesity Class III";
  }
});

// Manipulate the DOM by injecting HTML element/text in browser.

reset.addEventListener("click", function () {
  bmiOutcome.textContent = "";
  statusBmi.textContent = "";
});

// Control Structures using If
