//Functions
function myFunction(p1, p2) {
  return p1 * p2;
}

console.log(myFunction(2, 4)) //8

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
console.log(text)


function justsay() {
  console.log("Hello World!")
}
justsay();
