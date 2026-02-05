const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const suggestion = document.querySelector('#suggestion');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight";
    return;
  }

  const bmi = weight / ((height * height) / 10000);

  results.innerHTML = bmi.toFixed(2);


  if (bmi < 18.6) {
    suggestion.innerHTML = "You are underweight, increase your weight";
  } else if (bmi <= 24.9) {
    suggestion.innerHTML = "You are Normal";
  } else {
    suggestion.innerHTML = "You are overweight, do exercise";
  }
});
