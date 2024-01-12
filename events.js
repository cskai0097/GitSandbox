let myButton = document.createElement('button')
myButton.addEventListener('click',function(){
    console.log('Hello World')
})
document.body.appendChild(myButton)
myButton.textContent = 'Click Me!'

const wrapper = (fn)=>fn();
const hi = () => console.log('Hello Chris!');
wrapper(hi);


const adder = (x)=>(y)=>x+y;
const add5 = adder(5);
console.log(add5(2));

const multiplyr = (x) => (y) => x * y;
const multiply5 = multiplyr(5)
console.log(multiply5(6));