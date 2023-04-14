# _Credit Card Validator_

#### By _**Jason Falk**_

#### _Application to validate credit cards I hope I don't go on a watch list for this._

## Technologies Used

* _HTML_
* _Javascript_
* _Git/Git Bash_
* _Bootstrap_

## Description

_{A fidgetech project created in order to demonstrate knowledge of looping and arrays. Enter a credit card number to find out if the number given is a valid credit card or not.}_

## Setup/Installation Requirements

1. _In Git Bash type git clone https://github.com/JasoFal/credit-card-validator.git_
2. _Either use Git Bash to reach the top level of the directory or open file explorer and find the directory._
3. _Open index.html in the browser of your choice using one of the following methods._
-------------
* _Use command start index.html if in Git Bash._
* _In file explorer click on index.html._

## Known Bugs

* _No known bugs._

## License

_MIT_

Copyright (c) _4/14/23_ _Jason Falk_

Describe: collectAndVerifyCCNum()

Test: "It will return "Invalid Credit Card Number" if cc number is less than 15"
Code:
const ccNumber = 0;
collectAndVerifyCCNum();
Expected Output: "Invalid Credit Card Number"

Test: "It will take a set of numbers and split them into an array."
Code:
const ccNumber = 4102080860435620;
collectAndVerifyCCNum();
ExpectedOutput: [4102080860435620 split]

Test: "It will return the numbers from a string back into a number."
Code:
const ccNumber = 4102080860435620;
numberMutator: [0,2,6,5,3,4,0,6,8,0,8,0,2,0,1,4 string];
ExpectedOutput: [0,2,6,5,3,4,0,6,8,0,8,0,2,0,1,4];

Test: "It will reverse the set of numbers."
Code:
const ccNumber = 4102080860435620;
numberMutator();
ExpectedOutput: [0,2,6,5,3,4,0,6,8,0,8,0,2,0,1,4 but string]

Describe VerifyCCType()

Test "It will check the first numbers of cc number to see if It is a valid."
Code:
const ccNumber = 370208086043562;
VerifyCCType();
ExpectedOutput: "American Express"

Test "It will validate multiple types of credit cards"
Code: 
const ccNumber = 4102080860435620;
VerifyCCType();
ExpectedOutput: "Visa"

Describe: applyLuhnAlgorithm();



