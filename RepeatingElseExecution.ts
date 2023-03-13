let cities : string [] = ["karachi","islamabad","lahore","peshawar"];
let cleanCity : string = "multan";
let cleanCityFound : boolean = false; 
for (let i : number = 0; i < cities.length; i++){
    if (cities[i] === cleanCity){
        console.log(cleanCity + " is cleanest day!");
        cleanCityFound = true;
        break;
    }
    //else {
      //  console.log(cleanCity + " Not Found");  
        
      /*
      The else block will be executed 04 times
       as there are 04 elements in the Cities
        array and none of them is equal to "Multan".
      */ 

        //  break; 
         /*
      If we use break in else statement, whenever only
      for once if else executed , program will come out of the loop.
      and will not check array
      */ 
    //}
}
if(!cleanCityFound){
    console.log(cleanCity + " Not Found");  
    
}

