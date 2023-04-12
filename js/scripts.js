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
        console.log(doubledNumArray, "doubledNumArray2ElectricBoogaloo");
      } else {
        doubledNumArray.push(num);
        console.log(doubledNumArray, "doubledNumArray1");
      }
    });
    console.log(doubledNumArray, "doubledNumArray");
    // console.log(tempStringArray, "tempStringArray");
  }
  let doubledArraySum = doubledNumArray.reduce((a,b) => a+b, 0);
  console.log(doubledArraySum, "doubledArraySum");
}

luhnAlgorithm(4102080860435620);
// UI Logic