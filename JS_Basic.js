//OR
//이름이 gahyun이거나 성인이면 통과
/*
const name = prompt("NAME : ");
const age = 22;
if(name === "gahyun" && age > 19) {
  console.log("PASS");
} else {
  console.log("FAIL")
}

//우선순위
const gender = "female";
const name = "Jane";
const isAdult = true;
if(gender === "female" && (name === "Jane" || isAdult)) {
  console.log("PASS")
}*/

/*반복문
for(let i = 0; i < 10; i++) {
  console.log(i+1)
}

//switch문

let fruit = prompt("과일을 입력하세요. ");
switch (fruit) {
  case '사과' :
    console.log("사과는 1000원입니다. ");
    break;
  case '배' :
    console.log("배는 1500원입니다. ");
    break;
  case '체리' :
    console.log("체리는 1800원입니다. ");
    break;
  case '오렌지' :
    console.log("오렌지는 2000원입니다. ");
    break;
  case '수박' :
    console.log("수박 2500원입니다. ");
    break;
  default :
    console.log("그런 과일은 없습니다. ");
    break;
    }


//매개변수가 없는 함수
function showError() {
  alert("에러가 발생했습니다. 다시 시도해주세요.");
}
//showError();

//매개변수가 있는 함수
function sayhello(name) {
  const msg = `hello ${name}`;
  console.log(msg);
}
sayhello("gahyun");



let message = "Hello";  //전역변수
console.log("함수 호출 전")
console.log(message)

function sayHello(name) {
  if(name) {
    message += `, ${name}`;
  }
 console.log("함수 내부")
  //지역변수
  console.log(message)
}
sayHello("GAHYUN");
console.log("함수 호출 후")
console.log(message)
*/

/*
//default Value
function sayHello(name = "freind") {
  let msg = `Hello, ${name}`;
  console.log(msg)
}

sayHello();
sayHello('Gahyun');


function add(num1, num2) {
  return num1 + num2;
}
console.log(add(10, 20))


//화살표 함수 
let add = (num1, num2) => {
  return num1 + num2;
}
res = add(12, 12);
console.log(res)


//객체 만들기 
const name = "superman";
const age = 32;
const superman = {
  name, //키 : 값
  age,
}

console.log(superman.name)
superman.gender = 'male';   //추가  
superman.haircolor = 'black';   //추가
superman.hobby = 'soccer';      //추가
console.log(superman.gender)

delete superman.gender;   //삭제
console.log(superman)

//프로퍼티 존재 여부
'age' in superman;


function makeObject(name, age) {
  return {
    name, 
    age,
    hobby : "football"
  };
}
const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birthday' in Mike);

*/

function isAdult(user) {
  if (user.age < 20) {
    return false;
  }
  return true;
}

const Mike = {
  name : "Mike", 
  age : 30
};

const Jane = {
  name : "Jane", 
  age : 19
};

if (isAdult(Mike) === true) {
  console.log("MIKE IS ADULT");
}
else {
  console.log("MIKE IS NOT ADULT");
}


if (isAdult(Jane) === true) {
  console.log("Jane IS ADULT");
}
else {
  console.log("Jane IS NOT ADULT");
}


