const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// ## Processing Employee Bonuses

// Loop over the `employees` array and do the following:

// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.


//## Function Logic

// Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object**
//with the following properties:

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

let employeeNames = [];

function name(employeesArray){
  console.log('name');
  
  for (let i = 0; i < employeesArray.length; i++) {
    employeeNames.push(employeesArray[i].name);
  }
  return employeeNames;
}

name(employees);



function bonusPercentage(){
  
}


function totalCompensation(){

}


function totalBonus(){

}

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
