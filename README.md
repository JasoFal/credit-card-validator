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

# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_

