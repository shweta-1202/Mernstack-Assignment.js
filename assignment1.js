// Question 1: Data Types and Variables

// primitive datatype----number,string,boolean,undefined,null
//non-primitive----array(list),objects
// 3 types of varibale declaration-----let,var,const
// let----gives error immediately that initiazation is done after declaration
// var--allows reusing the variable and let--error pops bcuz that variable is already used 
// const---value remains the same throughout the code

let S = "Dipak"; // string
let N = 12; // number
let B = false; // boolean
let O = { name: "Shweta", age: 20 }; // object
let A = [12,7,4,2,5]; // array
var Z =null //null
const pie =3.14;

//  value and type of each variable
console.log("Value of String:" + S);
console.log(typeof S);
console.log( "Value of Number:"+N );
console.log(typeof N);
console.log("Value of boolean:" + B);
console.log(typeof B);
console.log("Value of Object" +O);
console.log(typeof O);
console.log("Value of Array:" +A);
console.log(typeof A);
console.log("Value of Z:" +Z);
console.log( typeof Z);
console.log("Value of pie:" +pie);
console.log(typeof pie);

// <----------------------------------------------------------------------------------------------->

// Question 2: Operators and Expressions
// Arithmetic operator-- +,-,*,/,%
// Function to perform arithmetic operations
// prompt takes input from user

// enter two numbers
let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));

// Performing arithmetic operations
let sum = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let mod = a%b;

// Displaying the results
console.log(a)
console.log(b)
console.log("Addition result: " +sum);
console.log("Subtraction result: " +sub);
console.log("Multiplication result: " + mul);
console.log("Division result: " + div);
console.log("modules result: " + mod);

// <-------------------------------------------------------------------------------------------------->

// Question 3: Conditional Statements
// In this we use a prompt to take user input
// syntax of if-elseif-else
// if(condition){
    //code
// }
// else if(condition){
    //code
// }
// else{
    //code
// } 

// Function to check if a number is positive, negative, or zero
 // Prompt  to enter a number
 let d = prompt("Enter a number:");
if ( d> 0) {
    console.log("The number is positive.");
} else if (d < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// <--------------------------------------------------------------------------------------------------->

// Question 4: Control Flow Keywords
// control flow keywords
// break----if the given condition is true then it will break the whole code
// continue-----to skip the iteration where the condition is true
// return ------it returns the value/returns a value but doesnot prints it
// for loop syntax:
// for(let i=0;i<=10;i++){
//     console.log(i)

// Function to print all even numbers from 1 to 20
    let v
    for ( v = 1; v<= 20; v++) {
        if (v%2==0) {
            if(v==0) {
                continue  // Skip odd numbers
            }
        // Print the even number
        console.log(v);
    }
    }

// <--------------------------------------------------------------------------------------------------->
// Question 5: Combining Concepts
// && --if both conditions are true then it is true

// Prompt  to enter a grade (0-100)
let s = prompt("Enter a Grade(0-100):");
if ( s>= 90 &&  s<= 100)
     {
    console.log('Grade is - A');// Print A if s is between 90 and 100
} 
else if ( s>= 80 &&  s<= 89) 
    {
    console.log('Grade is - B');// Print B if s is between 80 and 89 
} 
else if (s>= 70 && s<= 79)
     {
    console.log('Grade is - C');// Print C if s is between 70 and 79 
} 
else if (s>= 60 && s <= 69)
     {
    console.log('Grade is - D');// Print D if s is between 60 and 69
} 
else if (s>= 0 && s<= 59) 
    {
    console.log('Grade is - F');// Print F if s is between 0 and 59
} 
else {
    console.log("Invalid  number Grade. Please enter valid number Grade.");// Print an error message for invalid input

}

