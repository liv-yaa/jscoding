// script.js

/* Javascript EVENTS aka "scripting code" and EVENT HANDLERS

    Things that happen in HTML objects that can trigger "scripting code"
    
    - See template.html -

    HTML objects can execute Javascript in 2 way
    1. JS code can be an attribute

    <button onclick="window.alert('Hello World!');">Click Me!</button>


    2. Separate script an define an "event handler" on hte object that executes when the event is fired.
    Ex. there is this HTML on the page with the object of interest.

    <button id="hello-button">Click Me!</button>

    Then, in a separate script, the object is referred to and assigned an _event handler_

*/
// var btn = document.getElementById("myBtn");
// console.log('btn', btn);

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("myBtn").innerHTML = "Hello World";
    window.alert('!');
}

// btn.addEventListener('click', () => {
//   window.alert('Hello World!');
// });
