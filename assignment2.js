// shweta  Powar

// Question 1: Multiplication Table Generator
// lexical scope---inner function can access the local variables of outer function

function Table() {
    // Iterate through numbers from 1 to 10 (outer loop)
    for (let i = 1; i <= 10; i++) {
        let result =''; 
        // Iterate through numbers from 1 to 10 (inner loop)
        for (let j = 1; j <= 10; j++) {
            let multiResult = i * j; //  multiplication result of i and j
            result += multiResult + '\t'    // multiplication result to the result string with tab spacing (\t)
        }
        console.log(result);  // Output 
    }
}
Table();// Call the function to display the multiplication table

// <---------------------------------------------------------------------------------------------------->

// Question 2: Sum of Numbers in an Array

// for of gives the value
// for of doesnot work on object because we need key to find the value

const arr = [50, 12, 7, 48, 25];
let sum = 0;// Initialize a variable to hold the sum
//  for...of loop
for (let number of arr) {
    sum += number; // Add each number to sum
}
console.log("The sum of the numbers in the array is:", sum);//store the sum of numbers


// <---------------------------------------------------------------------------------------------------->
// Question 3: Palindrome Checker

//join :join() method is used to join all elements of an array into a string. 
// split(''):separat the string with the help of separater   // space is separater in this line


function Palindrome(str) {
    str = str.toLowerCase();// Convert the string to lowercase 
    return str === str.split('').reverse().join('');// Reverse the string and compare with original string
                                            //separat the string with the help of separater   // space is separater in this line
}
let str ="LEVEL";
console.log(Palindrome("LEVEL")); // Output: true


// <---------------------------------------------------------------------------------------------------->
// Question 4: Fibonacci Sequence Generator

let arr1=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function Fibonacci(n) {
    let newarr = []; // Initialize an array to store Fibonacci numbers

    // inital n = 0
    if (n === 0) {
        return newarr; // Return empty array
    }

    // First two Fibonacci numbers
   newarr.push(0); // push 0 at last
    if (n > 1) {
        newarr.push(1); //push 1 at last
    }
      for (let s = 2; s < n; s++) {
        let nextFibonacci = newarr[s - 1] + newarr[s - 2];
       newarr.push(nextFibonacci);// Calculate and push next Fibonacci numbe
    }
    return newarr;
}
console.log(Fibonacci(0));   // Output: []
console.log(Fibonacci(1));   // Output: [0]
console.log(Fibonacci(5));   // Output: [0, 1, 1, 2, 3]
console.log(Fibonacci(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



// <---------------------------------------------------------------------------------------------------->
// Question 5: Block Scope with Let and Const

function scope() {
    // Using var
    if (true) {
        var d = "Var variable inside if block";
    }
    console.log(d); // Output: Var variable inside if block
    // Using let
    if (true) {
        let v = "Let variable inside if block";
        console.log(v); // Output: Let variable inside if block
    }
    // console.log(letVariable); // This would cause an error: ReferenceError: letvariable is not defined

    // Using const
    const pie = "Const variable";
    if (true) {
        console.log(pie); // Output: Const variable
        // pie = "Changed value"; // This gives  an error: TypeError: Assignment to constant variable.
    }
}

// Calling the function scope
scope();
