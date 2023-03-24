Describe: collectAndVerifyCCNum()

Test: "It will return "Invalid Credit Card Number" if cc number is less than 15"
Code:
const ccNumber = 0;
collectAndVerifyCCNum();
Expected Output: "Invalid Credit Card Number"

Test "It will check the first numbers of cc number to see if It is a valid."
Code:
const ccNumber = 4102080860435620;
collectAndVerifyCCNum();
ExpectedOutput: "American Express"

