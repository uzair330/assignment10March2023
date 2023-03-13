//  rest parameter (...value)
/*
The rest parameter syntax allows
a function to accept an indefinite number of arguments
as an array. The syntax for defining a rest parameter
 is to use three dots(...) followed by the parameter name
*/

//------------Example 01----------------------
function addElements(...elements : string[]) {
    console.log(elements);
    
}
addElements("ali","usman","abbas")


//------------Example 02----------------------
function sum(...num : number[])  {
    let add : number = 0;
  for(let i : number = 0; i < num.length; i++){
    add += num[i];
  }
    return add; 
}
console.log(sum(1,2,3,4,5));



//------------Example 03----------------------
function studentNames(...names: string[]) : string[] {
    let students : string[] = [];

    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        students = [...names];
    }
    // myArgs is an array of strings
    return students;
   // console.log(myArgs);
  }
  console.log(studentNames("uzair","tufail","khubaib"));
  
  