function greet(name,someValue){
    console.log("Hello " + name);
    console.log("So nice to see you! " + someValue);
}
greet("Chris",3);
let mydocument = document;
document.body.style.backgroundColor = "#111";
mydocument.title = "Document Title";
const p = document.querySelector('p');
console.log(p.textContent)
p.textContent = "Inventory";
p.style.color = "crimson";
p.style.fontSize = "20px";
p.style.borderRight = "5px solid crimson";
p.style.margin = "auto";
p.style.marginTop = "10%";
p.style.marginBottom = "10%";

let hlink = document.getElementById('link1');
hlink.style.color = "red";
const mainHeading = document.querySelector('h1');
mainHeading.style.color = "orange";
mainHeading.textContent = "Players: " + 2;

const body = document.querySelector("body"); //initializing element via query selector
const h1 = document.getElementById('fire'); //initializing variable to hold value element by ID
h1.textContent = "FIRE"; //modify the text content of h1
h1.style.color = "crimson"; // modify the style of h1

const myHeading = document.createElement('h1');//CREATE ELEMENT
myHeading.id = 'water';//GIVE ELEMENT AN ID
//MODIFY ELEMENT
myHeading.textContent = 'WATER';
myHeading.style.color = "blue";
//APPENDING
body.appendChild(h1);
document.body.appendChild(myHeading);






