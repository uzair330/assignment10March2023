/*
4- Task: Create a Function to Calculate the Factorial of a Number
Breakdown:
•	Create a function that takes a number as input and calculates its factorial using a loop.
•	The factorial of a number is the product of all positive integers less than or equal to the number. For example, the factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120.
•	The function should return the factorial of the input number.
•	Test the function with different numbers to make sure it is working correctly.
*/
let factNumber : number = 5;
function factorialNumber(num : number) : number {
    let result : number= 1;
for(let i : number = 1; i <= num ; i++ )
    {
     result *= i;
    }
return result;
}


let factorial_Number = factorialNumber(factNumber);
console.log(`Factorial of number ${factNumber} is= ${factorial_Number}`);
console.log(`Factorial of number 6 is= ${factorialNumber(6)}`);
console.log(`Factorial of number 7 is= ${factorialNumber(7)}`);
console.log(`Factorial of number 9 is= ${factorialNumber(9)}`);
console.log(`Factorial of number 11 is= ${factorialNumber(11)}`);




  