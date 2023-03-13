/*
1- Task: Create a Program to Calculate Student Grades

Breakdown:
•	Declare two variables for the exam scores, e.g., englishMarks and urduMarks, and assign them values.
•	Calculate the average of the two exams using the formula: (englishMarks + urduMarks) / 2
•	Use if-else conditionals to determine the student's grade based on the average score.
•	For example, if the average score is greater than or equal to 80, assign grade "A", if it is greater than or equal to 70 and less than 80, assign grade "B", and so on until grade "F" for a score below 60.
•	Display the grade to the user as output.

*/
let englishMarks : number = 54;
let urduMarks : number = 44;

let average : number = (englishMarks + urduMarks)/2;
console.log("English score: " + englishMarks);
console.log("Urdu score: " + urduMarks);
console.log("Your average score: " + average);

if(average >= 80){
    console.log("student Grade is: A");

} else if (average >= 70 && average <= 80){
    console.log("student Grade is: B");

} else if (average >= 60 && average <= 70){
    console.log("student Grade is: C");

}else if (average < 60){
    console.log("student Grade is: F");
}
