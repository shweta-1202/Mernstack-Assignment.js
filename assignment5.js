// Assignment 5: Closures and Prototypes
// Question 1-- Write a function that returns a closure which adds a specific number to its argument.

// Closures is the combination of a function bundled together with its surrounding state(lexical scope)


// Function that returns a closure to add a number 
function createAdder(x) {
    // Inner function (closure) that adds the number 
    return function(y) {
        return x + y; // Adds x (from outer function scope) to y (inner function argument)
    };
}
const add5 = createAdder(5); // Creates a closure 
console.log(add5(12)); 
console.log(add5(7)); 

const add10 = createAdder(10); // Creates a closure 
console.log(add10(22)); 
console.log(add10(27)); 


// -----------------------------------------------------------------------------------------------------------------------------------

// Question 2--Create a function using closure to keep track of how many times it has been called.

const counter = (() => {
    let count = 0;  //  variable to hold the count
    // Function to increment the count
    const increment = () => {
        count++;
    };
    // Function to get the current count value
    const getCount = () => {
        return count;
    };
    // Function to reset the count to 0
    const reset = () => {
        count = 0;
    };
    // Return an object with methods to  access the count
    return {
        increment,
        getCount,
        reset
    };
})();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); 

counter.increment();
counter.increment();
console.log(counter.getCount()); 

counter.reset();
console.log(counter.getCount()); 




// -----------------------------------------------------------------------------------------------------------------------------------

// Question 3--Implement a prototype method to calculate the area of a rectangle object.

// Prototype- to make an inbuild functionality in a class, or add functions or variables

// Define a constructor function for Rectangle objects
function Rectangle(width, height) {
    this.width = width; // Initialize width 
    this.height = height; // Initialize height 
}
// Add a prototype method to calculate the area of the rectangle
Rectangle.prototype.Area = function() {
    return this.width * this.height; // Calculate and return the area 
};
const rectangle1 = new Rectangle(7, 12); // Create a new rectangle object 
console.log(rectangle1.Area());

const rectangle2 = new Rectangle(15, 4); // Create another rectangle object
console.log(rectangle2.Area()); 



// -----------------------------------------------------------------------------------------------------------------------------------

// Question 4-- Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.


const Pie = 3.14
// Constructor function for Circle objects
function Circle(radius) {
    this.radius = radius; // Initialize radius
}
// Function to calculate area of the circle
function area(radius) {
    return Pie * radius*radius; // Calculate and return area
}
// Function to calculate perimeter of the circle
function perimeter(radius) {
    return 2 *Pie* radius; // Calculate and return perimeter 
}
// area and perimeter functions to Circle prototype
Circle.prototype.area = function() {
    return area(this.radius);
};
Circle.prototype.perimeter = function() {
    return perimeter(this.radius); 
};
const circle1 = new Circle(4); // Create a circle object
console.log("Radius:", circle1.radius);
console.log("Area:", circle1.area()); 
console.log("Perimeter:", circle1.perimeter()); 

const circle2 = new Circle(7); // Create another circle object 
console.log("\nRadius:", circle2.radius);
console.log("Area:", circle2.area()); 
console.log("Perimeter:", circle2.perimeter()); 


// -----------------------------------------------------------------------------------------------------------------------------------
// Question 5--Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. 
// Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.

// Immediately Invoked Function Expressions (IIFE)
// it is immediately called when the function is declared
// it is executed only ones
// wrap the function in paranthesis(function)()


// Define a counter  using an immediately-invoked function expression (IIFE)
const counter1 = (() => {
    let count = 0; // Private variable to hold the counter value
    
    // Function to increment the counter
    const increment = () => {
        count++;  // Increment count by 1
    };
    
    // Function to decrement the counter
    const decrement = () => {
        count--;  // Decrement count by 1
    };
    
    // Function to reset the counter to 0
    const reset = () => {
        count = 0;  // Reset count to 0
    };
    
    // Function to get the current value of the counter
    const getValue = () => {
        return count;  // Return the current value of count
    };
    
    // Return an object with methods that can manipulate and access the private counter
    return {
        increment,  
        decrement,  
        reset,      
        getValue    
    };
})();
counter1.increment();              
counter1.increment();      
counter1.increment();           
console.log(counter1.getValue());    

counter1.decrement();                
console.log(counter1.getValue());    

counter1.reset();                    
console.log(counter1.getValue());    
