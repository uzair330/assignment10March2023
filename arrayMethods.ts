
let studentsNames : string[] = [ 'Muhammad','Aisha','Ali','Fatima','Hassan','Hussein','Khadija','Omar','Zainab'];

//---------------01 copyWithIn()-----------------------------


// console.log("Original Array");

// console.log(studentsNames);
// console.log("copyWithIn Method");
// // array.copyWithin(target, copy, end)

// studentsNames.copyWithin(4,2,5);
// //(fourth position index,2nd index element,(5-2 # of characters))
// console.log(studentsNames);



//-----------------02 concat()-------------------------------//
// console.log("Original Array");
// console.log(studentsNames);

// console.log("concat() method adding string to end of array");
// console.log(studentsNames.concat("uzair"));

// console.log("concat() method adding arrays");
// let students : string[] = ["khubaib","tufail"];
// console.log(studentsNames.concat(students));






//----------------03 entries()----------------------------------
// console.log("Original Array");
// console.log(studentsNames);

// console.log("entries() method");
// for (const [i,names] of studentsNames.entries()){
//     console.log(`${i}: ${names}`);
// }




//------------------04 every()---------------------------------

// console.log("every() method");
// function isEven(number: number) {
//     return number % 2 === 0;
//   }
  
//   const numbers = [2, 4, 6, 8];
  
//   const areAllNumbersEven = numbers.every(isEven);
  
//   console.log(areAllNumbersEven);






//------------------05 map()-----------------------------------
//const number1 : number[] = [1,2,3,4,5,6];
//---Arrow function---
// console.log("Original Array!");
// console.log(number1);
//      let multiply2 = number1.map((num)=>{ 
//         return num * 2;
//         })
//         console.log("Map method used with arrow function");    
//         console.log(multiply2);


// //---Name Function---
//     console.log("Map method used with name function");    
//      let mapFunction = number1.map(function Multiply3(num){
//     return num * 3
//      });
//      console.log(mapFunction);





//-----------------06 fill()------------------------------------
// console.log("Original Array");
// console.log(studentsNames);
// // fill(string,start fill,end fill)
// studentsNames.fill("yousaf",0,2)
// console.log("fill() method");
// console.log(studentsNames);



//-----------------07 filter()------------------------------------

// console.log("Original Array");
// console.log(studentsNames);

//  let letter : string = "B"
// console.log("filter() method");
// let searchingNames = studentsNames.filter(name => name[0] == letter);
// if(searchingNames.length === 0){
// console.log(`No match found for letter: ${letter}`);
// }else{
//   console.log(searchingNames);
  
// }



//-----------------08 find()------------------------------------
// const number1 : number[] = [2,6,1,56,7,8,9,8,76,34,2];
// console.log("Original Array");
// console.log(number1);
// // Search for even number @ zero index if found return it 
// // @ zero index if even not found return undefine 
// let numberFind = number1.find((num)=> {num%2==0})
// console.log("First Even number found is: " + numberFind);







//----------------09 findIndex()---------------------------------
// const number1 : number[] = [1,4,8,6];
// console.log("Original Array");
// console.log(number1);
 
// let findIndex = number1.findIndex((num)=> num%2==0);
// console.log(findIndex);

// if(findIndex != -1){
//   console.log("First Even number at index: " + findIndex);
// }else{
//   console.log("Even Number not found");

// }









//-------------------10 forEach()---------------------------------
// console.log("Original Array");
// console.log(studentsNames);

// console.log("foreach() method: using arrow function");

// studentsNames.forEach(((student) => console.log(student)
// ))

// console.log("foreach() method: using name function");

// studentsNames.forEach(function(student){
//   console.log(student);
  
// })








//------11 includes()-------

//------12 indexOf()-------

//------13 keys()-------

//------14 reduce()-------

//------15 reduceRight()-------

//------16 reverse()-------

//------17 indexOf()-------

