/*
3- Task: Create a Function to Determine the Discount Amount for a Product
Breakdown:
•	Create a function that takes a product price and a discount percentage as input and calculates the discount amount for the product using the formula: discount amount = product price * (discount percentage / 100).
•	If the discount percentage is greater than or equal to 50%, the function should return an error message indicating that the discount percentage is invalid.
•	Display the original price, discount percentage, discount amount, and final price of the product to the user as output.
•	Test the function with different product prices and discount percentages.

*/

    let original_price : number = 200;
    let discount_percentage : number = 80;
    let discountAmount :number =  0;
  function product(productPrice : number, discountPercentage : number)  {
    
    if(discountPercentage < 50){
    
     discountAmount = productPrice * (discountPercentage / 100);
   }
return discountAmount;
}

let result  = product(original_price,discount_percentage);

if(discount_percentage >= 50){
    console.log("Discount percentage is invalid.");
    
}
else if(discount_percentage  < 50){

    console.log(`Original Price: ${original_price}`);
    console.log(`Discount Percentage: ${discount_percentage}%`);
    console.log(`Discount Amount: ${result}`);
    console.log(`Final Price: ${original_price + result}`);
}

