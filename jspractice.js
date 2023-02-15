// 2-14-23 Literal just typing JS 
myVariable = Math.floor(Math.random() * 100);

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
if (x>7) {
    // do something
    console.log('m3h');

} else if (x <= 7) {
    console.log('be nice');

}
// JS while loops
var i = 0;
while (i < 6); {
    console.log(i);
    i += 1;
}

// JS For loops
for (var i = 0; i< 10; i++) {
    console.log("I love ", i);
}

// JS Functions
function multiply(x,y) {
    return x*y;
}

// JS Function epressions - are used in callbacks - are assigned a variable to the result of some function
var product = multiply(5, 5);

// JS Callbacks - for example, this defines an alert that waits for the function expreesion? to be executed
function popUpAlert() {
    alert('Time is up');
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
    var is dated!
    let is preferred!

    variables not initialized store primitive data type Undefined
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

console.log(`The temp is ${} degrees F.`)
