
let a = 5;
let b = '5';

 const equal = a != b? true: false;
 console.log({ equal });

 const strictlyEqual = a !== b ? true : false;
console.log({strictlyEqual});

let student = true;
const confirm = !student ? true: false; 
console.log({confirm});

const add = +b +a;
console.log([add]);
console.log(a * b);

console.log(Number(b) + a);

let word  = "help us"

let check = (word.includes(" ") && 5 <= word.length <= 15)? true: false;
 console.log({check});
 
 console.log(word.length);
 

/*function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}*/


const age = (age) =>{
if (isNaN(age)) {
  console.log(
   "Input is not a number");
} else {
console.log(
(age < 18) ? "Too young" : "Old enough");
}

}

age(21)




let marks = "39"
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`you ${result} the exam.`);

let name = 'Angel'

const letter = (name.charAt(0) == "A") ? 'yes':'no'
console.log(`${letter} it starts with A`);

let Input= "help me please"

 
const message= (Input.includes ("help"&&"the" ))? "i'm here for you":"how else can i help"
console.log(message);

let shopName = "Ebenezer "

const shop= (shopName.includes (" "&& 5<= shopName.length >= 15))? "you chose to continue" : "you chose to stop"
console.log(shop);


let time = new Date()
console.log(time);

let timer = Date.now()
console.log(timer);


// let startTime;

// function startTimer() {
//     startTime = Date.now();
//     setInterval(updateTimer, 1); // Update every millisecond
// }

// function updateTimer() {
//     const currentTime = Date.now();
//     const milliseconds = currentTime - startTime;
//     console.log(milliseconds); // Display milliseconds in the console
// }

// startTimer();