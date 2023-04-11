const adviceEl = document.getElementById("adviceMessage");
const adtag = document.getElementById("spanId");
const clickButton = document.getElementById("diceButton");
const url = "https://api.adviceslip.com/advice";

let adviceResult;
let adviceId;

const getAdvice = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      adviceResult = item.slip.advice;
      adviceId = item.slip.id;
      console.log(adviceResult);
      console.log(adviceId);
      adviceEl.textContent = adviceResult;
      adtag.textContent = adviceId;
    });
};
clickButton.addEventListener("click", getAdvice);
