#!/usr/bin/node

// 2-14-23 Literal just typing JS
let myVariable = Math.floor(Math.random() * 100);
function guess(g) {
    if (g < myVariable) {
        console.log('eh!')
    }
    else if (g > myVariable) {
        console.log('m3h');
    } else {
        console.log('Yay!');
    }
}
guess(40);

// JS Expressionss: <, >, <=, >=, ==, ===, !=, !==)

// JS Data types: (&& and) (|| or) (! not)

// JS Conditional: 
function randomMath() {
    let x = Math.random(2, 100)

    if (x>7) {
        // do something
        console.log('m3h');
    
    } else if (x <= 7) {
        console.log('be nice');
    }
}
console.log(randomMath())


// JS while loops
function whileUWait() {
    let i = 0;
    while (i < 6); {
        console.log(i);
        i += 1;
    }
}
// console.log(whileUWait())


// JS For loops
for (let i = 0; i< 10; i++) {
    console.log("I love ", i);
}

// JS Functions
function multiply(x,y) {
    return x*y;
}

// JS Function epressions - notice this syntax!
let fExpression = function(x, y) {
    return x + y
}
console.log(fExpression(3, 5));

// Funtioncs are used in callbacks - are assigned a variable to the result of some function
let product = multiply(5, 5);

// JS Callbacks - for example, this defines an alert that waits for the function expreesion? to be executed
function popUpAlert() {
    // alert('Time is up'); // make sure you define alert
    console.log('d');
}

setTimeout(popUpAlert, 1000); // built in func accepts a callback

/* Codecademy bb https://www.codecademy.com/courses/introduction-to-javascript/lessons/variables/exercises/review-variables * /


// 7 JS Datatypes: String, number, boolean, null, undefined, symbol, object

// Numbers: 23.8879 - anything without quotes

/*Objects, properties. (DOT operator)
Objects, including instances of data types, can have:
1. PROPERTIES, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
2. METHODS  - called by appending the object or instance with a period, method name, ()

*/ 
'Hello'.length
'hello'.toUpperCase();


/* "Built in objects" - Math and Number
    Collections of methods + properties that JS provides
*/
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));

console.log(Number.isInteger(43.8));


/* Variables

    Hold reusable data, store a name in memory + data

    var is used in pre-ES6 versions of JavaScript. It is function scoped.
    let is the preferred way to declare a variable when it can be reassigned. It is block scoped.
    const is the preferred way to declare a variable with a constant value. It is also block scoped.

    DYNAMIC TYPING 
    Q: What is 'Dynamic typiing?
    A: means JS assigns variables based on their assumed data type in definition.

    Examples.
    Variables not initialized store primitive data type Undefined
    Math assignment operators 
    Concatenation + 
    Template literals `` around string and ${} for interpolation

    typeof
*/

let str = 'Blach';
let num = 2;
num = '2';
num = false;

/* Introducing `typeof`,
    Concatenation,
    strings :)
 */
let concat = str;
console.log(typeof str, typeof num);

if (typeof num === 'number') {
    concat = str + num;
}
else if (typeof num === 'string'){
    concat = str + '...' + num;
}
else {
    concat = str + '!!!'
}
console.log(concat);


/* Kelvin practice
https://www.codecademy.com/courses/introduction-to-javascript/projects/kelvin-weather-javascript
*/

let kelvin = 0;
let celsius = kelvin + 273;
let f = celsius *(9/5) + 32;
let fahrenheit = Math.floor(f);

console.log(`The temp is ${fahrenheit} degrees F.`)

/*Dog years
https://www.codecademy.com/courses/introduction-to-javascript/projects/dog-years-javascript
*/

let myAge = 30;
let earlyYears = 2;
earlyYears = 10.5 * earlyYears;// *= will multiply the num by 3 and then reassign the value of num to that result.
let laterYears = myAge - 2;
console.log(laterYears);
let name = 'Oliiiivia';
console.log(name.toLowerCase());


// String Interpolation is using template literals to embed variables into strings.
console.log(`my name is ${name}. I am ${myAge} in human years and ${laterYears} in dog years.`);



/* Variable SCOPE 
    https://www.codecademy.com/resources/docs/javascript/variable-scope

    Variable scope refers to areas where a variable is Visible & Accessible.
    See function scope vs block scope (ES 6)

    1. Global scope: defined outside of functions, this is used / accessible in any part of the program.
    2. Function scope: Local variables are defined within functions.
    3. Block scope: let and const allow for the use within a block. This is considered local only to block declared in.
    
*/
let gloablVar  = 333;
function myFunction() {
    let a = 2;
}


/* Conditionals
An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
*/


/* Control flow + Input validation
*/

function eightBall() {
    let userName = 'Olivia';
    let q = "what will happen?"
    let eightBall = '';
    let randomNumber =  Math.floor(Math.random() * 8);
    
    userName ? console.log(userName) : console.log('None entered');
    console.log(q + `, ${userName}`);
    
    // Main logic:
    switch(randomNumber) {
        case 0:
          eightBall = 'It is certain';
          break;
        case 1:
          eightBall = 'It is decidedly so';
          break;
        case 2:
          eightBall = 'Reply hazy try again';
          break;
        case 3:
          eightBall = 'Cannot predict now';
          break;
        case 4:
          eightBall = 'Do not count on it';
          break;
        case 5:
          eightBall = 'My sources say no';
          break;
        case 6:
          eightBall = 'Outlook not so good';
          break;
        case 7:
          eightBall = 'Signs point to yes';
          break;
      }
      
      console.log(eightBall);
}





// More Function expression exalmples... (used with Callbacks)

/* Callbacks - 3 wayss :)
    1. Normal function
    2. Anonymous Inline Function
    3. Arrow expression

    Some types of functions directly accept a callback...see below.


1. Normal function - 
function popUpAlert() {
    alert('Time is up.');
}
setTimeout(popUpAlert, 1000); // this built in function accepts a callback.


2. Anonymous INNLINE FUNCTION - "a fuction created as an expression"
setTimeout(function() {alert("Time's up!"); }, 1000);


// 3. Arrow function

// Callbacks
setTimeout(() => {
    console.log("Time's up!");
}, 1000);
*/


/* JS Data Structures 
    Arrays + Lists
*/
let states = ['MD', 'CA', 'HI'];
states.push('NY');

states[2]; // 'HI' 
console.log( ' slice 2', states.slice(2));
console.log( ' slice', states.slice(2, 3));

// Loop over arrays and lists (of vs in. depeds on data structure)
// for (var state)




/* JS Data Structures 
    DICTIONARIES
*/
let capitals = {
    "MD": 'Anapolis',
    "CA": 'Sacramento',
    "OR": 'Salem',
};

// edit / update objects by adding key:value pairs
capitals.NY = 'Albany';
capitals["WA"] = 'Olympia';
console.log('capitals', capitals);


// Use syntax for JS objects (Built in object methods)
Object.keys(capitals);
Object.values(capitals);
Object.entries(capitals);



/* Arrays!
// https://www.codecademy.com/resources/docs/javascript/arrays
    Mixed or unified data types
    Ordered, sorted, data
    const or let, depending on if you want to edit;)
*/
const nums = [1, 2, 3, 4];
const mixed = [3, 'bread', null, false];
const fruit = ['apple', 'berry', 'cherri'];

// Indexing...Index n-1 has the nth element.
console.log(fruit[0]);
// Changing elements: Assign a new value!
nums[1] = '44'
console.log(nums[1]);

// Create a nested array - just use severl layers of indexing
const food = [
    ['Apple', 'Orange', 'Banana'],
    ['Strawberry', 'Blueberry', 'Raspberry'],
    ['Potato', 'Carrot', 'Broccoli'],
  ];
console.log(food[1][2]);


/* Array methods!
    let testcase = True;

    fruit.concat([4, 5]);           Merges 2 arrays
    fruit.filter(...);              creates a new array with all elems that pass test from func
    fruit.find(...)                 Return 1St element that satisfies given func            
    fruit.findIndex(...)            Return 1st index that passes callback func's test, or -1 if not found
    fruit.forEach(...)              Loops over arrray, passing each item into callback provided
    fruit.includes(...)             T/f
    fruit.indexOf(...value)         Returns index or -1
    fruit.isArray()                 T/f
    fruit.join()                    * JOIN Convert elems to strings and concat them -> returns "appleberrycherri" *
    fruit.lastIndexOf()             Returns index or -1
    fruit.length                    8, 3
    fruit.map(...)                  * MAP create new array with results of function *
    fruit.pop()                     remove last elem of array, dec. length 
    fruit.push()                    add elem to end
    fruit.reverse()                 reverse order of elems
    fruit.shift()                   ret. first elem of array
    fruit.slice(1, 4)               ret. shallow copy with d
    fruit.sort()                    Returns an array with its items sorted in place.
    fruit.valueOf()                 Ret. value of elems in original array
    
*/




/* Dicts <3

*/


/* JS OBJECTS
https://www.codecademy.com/resources/docs/javascript/objects

Contain `Object properties` - aka "key value pairs"

Key-value pair: `Property key` : `Property Value`

OBJECT methods are stored in properties as function definitions

*/
// Define All object properties with an `object literal`
const person = {
    firstName: 'Chhris',
    lastName: 'Leo fff',
    age: 33,
    greeting: function() {
        return `Hi, I'm so gladd. ${this.firstName}` // String interpolation
    }
};

// Access object properties with dot notation or bracket notation
console.log(person.firstName);
console.log(person[`lastName`]);

// OBJECT methods. See greeting ^
console.log(person.greeting());





/* JS OBJECT CLASSES  - Classes are Boilerplate for JS objects ^ - they are a Class definition that creates and instance of the objc.
    Car factory (class) -> car Objects (instances)

    Once created, you can add additional properties using dot notion.
*/
class Person {
    greeting() {
        return `Hi, I am ${this.age}`;
    }
}
const myppl = new Person ();
myppl.favoritemusic = 'acid';
myppl.state = 'Indiana';
myppl.age = 300;
console.log(myppl.greeting());
console.log(myppl.state, myppl.favoritemusic);


// Constructor functions!
class Man {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    greeting() {
        return `HI, I am ${this.firstName} ${this.lastName}. And you are C u t e ;)`;
    }
}
const man1= new Man('Ben', 'Jamin'); // these object properties are creaated at the instantiaion of this object, and the constructor function assigns them to new object 
console.log(man1);
console.log(man1.greeting());
























/* JS THIS*/




















