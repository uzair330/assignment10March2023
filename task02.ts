/*
2- Task: Create an Array Manipulation Program
Breakdown:
•	Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]
•	Use array methods to perform the following manipulations:
o	Append a string to the end of the array
o	Prepend a string to the beginning of the array
o	Remove a string from a specific index in the array and replace it with another string
•	Display the array before and after each manipulation to the user as output.

*/

let friuts : string [] = ["apple", "banana", "cherry", "date", "elderberry"];



console.log("Original Array");
console.log(friuts);
//Append a string to the end of the array using push method
friuts.push("orrange");
console.log("Append string (orrange) to end: ")
console.log(friuts);


// Prepend a string to the beginning of the array using unshift() method
friuts.unshift("guava");
console.log("Prepend string (guava) at start: ")
console.log(friuts);

//Remove a string from a specific index in the array and replace it with another string
console.log("Remove apple from index 01 and replace with pear: ")
friuts.splice(1,1,"pear")
console.log(friuts);