// Utility Logic
// Business Logic
function verifyCCType(num) {
  const ccNumberStringArray = num.toString().split("");
  if (ccNumberStringArray[0] == "3" && ccNumberStringArray[1] === "4" || ccNumberStringArray[1] === "7") {
    return "American Express";
  } else if (ccNumberStringArray[0] == "4") {
    return "VISA"
  } else if (ccNumberStringArray[0] == "5") {
    return "Mastercard"
  } else if (ccNumberStringArray[0] == "6") {
    return "Discover"
  } else {
    return false;
  }
}

function verifyCCNum(num) {
  if (num.toString().length === 15 || num.toString().length === 16) {
    return true;
  } else {
    return false;
  }
}

function doubleNumSum(num) {
  let doubleNum = num * 2;
  if (Math.ceil(Math.log10(doubleNum + 1)) > 1) {
    return sumOfDigits(doubleNum);
  } else {
    return doubleNum;
  }
}

function sumOfDigits(num) {
  let remainder, sum = 0;
  while(num){
      remainder = num % 10;
      sum = sum + remainder;
      num = Math.floor(num/10);
  }
  return sum;
}

function luhnAlgorithm(num) {
  const startingNumber = num.toString().split("");
  let ccTestNumber = startingNumber.reverse().map(function (item) {
    return parseInt(item);
  });
  let isValidCCType = verifyCCType;
  let isValidCCNum = verifyCCNum;
  let doubledNumArray = [];
  if (!isValidCCType || !isValidCCNum) {
    return "Invalid Credit Card Number";
  } else {
    ccTestNumber.forEach(function (num, index) {
      if (index % 2 == 0) {
        doubledNumArray.push(doubleNumSum(num));
      } else {
        doubledNumArray.push(num);
      }
    });
  }
  let doubledArraySum = doubledNumArray.reduce((a,b) => a+b, 0);
  let finalCCCheck = doubledArraySum.toString().split("").slice(-1);
  if (finalCCCheck == 0) {
    return true;
  } else {
    return false;
  }
}
// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const cardNumberHolder = document.getElementById("typeNumber").value;
  const creditCardValidatingGenerator = luhnAlgorithm(cardNumberHolder);
  if (creditCardValidatingGenerator == true) {
    document.querySelector("p#validStatement").innerText = "This is a valid credit card";
  } else {
    document.querySelector("p#validStatement").innerText = "Please Enter A Valid Credit Card";
  }
}

window.addEventListener("load", function() {
  this.document.querySelector("form#user-input").addEventListener("submit", handleFormSubmission);
});