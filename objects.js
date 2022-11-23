//objects
//let car = "Fiat";
const car = {type : "Fiat", model : "500", color : "white"};


//object Definition
const person = {firstName : "Gahyun", lastName : "Kim", age : 22, haircolor : "Black"};

//property : firstName, lastName, age, haircolor
//property value : Gahyun, Kim, 22, Black

console.log(person.lastName)  //"Kim"
console.log(person["lastName"]) //"Kim"


const person2 = {
  firstName :"John",
  lastName  : "Doe",
  id        : 5566,
  fullName  : function() {
    return (this.firstName + " " + this.lastName);
  }
};

alert(person2.firstName);
