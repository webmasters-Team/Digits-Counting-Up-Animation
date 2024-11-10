let targetElements = document.querySelectorAll(".digit-box");
let animationtiming = 3000;

targetElements.forEach((targetElement) => {
  let currentValue = 0;
  let finalValue = parseInt(targetElement.getAttribute("data-val"));
  let timing = Math.floor(animationtiming / finalValue);
  let counter = setInterval(function () {
    currentValue += 1;
    targetElement.textContent = currentValue;
    if (currentValue == finalValue) {
      clearInterval(counter);
    }
  }, timing);
});
