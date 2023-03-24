// Utility Logic

// Business Logic
function collectAndVerifyCCNum(Number) {
  if (Number.toString().length < 15) {
    return "Invalid Credit Card Number";
  }
  const ccNumber = Number.toString().split("");
  if (ccNumber[0] === "3" && ccNumber[1] === "4" || ccNumber[1] === "7") {
    return "American Express";
  }
} 

console.log(collectAndVerifyCCNum(3702080860435620));
// UI Logic