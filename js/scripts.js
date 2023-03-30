// Utility Logic

// Business Logic
function VerifyCCType(Number) {
  const ccNumber = Number.toString().split("");
  if (ccNumber[0] == "3" && ccNumber[1] === "4" || ccNumber[1] === "7") {
    return "American Express";
  } else if (ccNumber[0] == "4") {
    return "VISA"
  } else if (ccNumber[0] == "5") {
    return "Mastercard"
  } else if (ccNumber[0] == "6") {
    return "Discover"
  } else {
    return "Invalid Credit Card"
  }
}

function collectAndVerifyCCNum(Number) {
  if (Number.toString().length === 15 || Number.toString().length === 16) {
    const startingNumber = Number.toString().split("");
    const ccTestNumber = [];
    startingNumber.forEach(ele => ccTestNumber.push(+ele));
    ccTestNumber.reverse();
    return ccTestNumber;
  } else {
    return "Invalid Credit Card";
  }
}

function applyLuhnAlgorithm() {
  collectAndVerifyCCNum[1,3,5,7] * 2;
  // let luhnTestedWord = collectAndVerifyCCNum().map(function(Element) {
  //   return Element * 2;
  // });
  // console.log(luhnTestedWord);
}
applyLuhnAlgorithm;


console.log(applyLuhnAlgorithm());
// UI Logic