// /*let word  = "help us"

//  (word.includes (" ") && 5<= word.length >=15)? okay:change;*/


// /*function example() {
//   if (condition1) {
//     return value1;
//   } else if (condition2) {
//     return value2;
//   } else if (condition3) {
//     return value3;
//   } else {
//     return value4;
//   }
// }


// age = Number(age);
// if (isNaN(age)) {
//   voteable = "Input is not a number";
// } else {
//   voteable = (age < 18) ? "Too young" : "Old enough";*/

//   let marks = "39"
//   let result = (marks >= 40) ? 'pass' : 'fail';

//   console.log(`you ${result} the exam.`);

//   let name = 'Angel'

//   const letter = (name.charAt(0) == "A") ? 'yes':'no'
//   console.log(`${letter} it starts with A`);

//   let Input= "help me please"


//   const message= (Input.includes ("help"&&"the" ))? "i'm here for you":"how else can i help"
//   console.log(message);

//   let shopName = "Ebenezer "

//   const shop= (shopName.includes (" "&& 5<= shopName.length >= 15))? "you chose to continue" : "you chose to stop"
//   console.log(shop);


//   const showDate = (date) =>{
//     let 
//   }

//Used to get the current date and time
var today = new Date();

//Gets the specific day of week, identified by the new Date function.
// And gives the day inform of an index e.g today is 4
var day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

console.log("Today is:" + daylist[day] + ".");

//Get current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//determine whether it's am or pm
var am_Pm = (hour >= 12) ? "PM" : "AM";

//Convert to 12-hour

hour = (hour >= 12) ? hour - 12 : hour;

//Special cases when hour is 0
if (hour === 0 && am_Pm === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    am_Pm = "Noon";

  } else {
    hour = 12;
    am_Pm = "PM";
  }

}

// special cases when hour is 0(midnight)
if (hour === 0 && prepand === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = ' Midnight';
  } else {
    hour = 12;
    prepand = ' AM';
  }
}

//currentt time

console.log("Current Time: " + hour + am_Pm + " : " + minute + " : " + second);



// function reverse(number){


// }

function reminder_message(percentage) {
  if (percentage > 100) {
    return "Finish your assignment"
  }
  else {
    return "Completed assignment"
  }
}
console.log(reminder_message(70));


// function checkFun(feedback){

//  let newFeedback = feedback.toLowerCase().includes("fun")

//   return newFeedback

// }

// console.log(checkFun("It was fun"));

function checkFun(arr) {

  return arr.filter(feedback => feedback.toLowerCase().includes('fun'));

}
console.log(checkFun(["It was fun", "It was okay"]));

function countFun(arr) {

  let count = 0
  for (let i = 0; i < arr.length; i++) {
    arr.filter(feedback => feedback.toLowerCase().includes('fun'));

    // count += arr[i];
    count++;
  }
  // console.log(count.length);

  return count
}
console.log(countFun(["It was fun", "It was okay"]));





function sortWord(str) {
  let newString = str.split("").sort().join(" ")
  return newString
}

console.log(sortWord("alphaBet"));








function capitalize(str) {
  //split() method splits a string object into an array of 
  //strings by separating the string into substrings.
  //["my","name","is","karen"]
  let splitWords = str.split(" ")
  // Initialize an empty array to store the modified words
  let newWords = []
  // Iterate through each word in the array
  for (let i = 0; i < splitWords.length; i++) {
    // Push the word with its first letter capitalized 
    //and the rest of the letters unchanged
    newWords.push(splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1))
  }

  return newWords.join(' ')
}

console.log(capitalize("my name is karen"));








function findLongestWord(array) {
  let longest = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longest.length) {

      longest = array[i];
    }
  }
  return longest;
}

console.log(findLongestWord(['we', 'are', 'whoever', 'we', 'are']));







// Define a function named vowel_count that takes a string parameter (str1)
function vowel_count(str1) {
  // Define a string containing all the vowels in both lowercase and uppercase
  var vowel_list = 'aeiouAEIOU';

  // Initialize a variable vcount to count the number of vowels
  var vcount = 0;

  // Iterate through each character in the input string
  for (var x = 0; x < str1.length; x++) {
    // Check if the current character is a vowel by searching for it in the vowel_list
    //-1 ignores a character that is not vowel
    if (vowel_list.indexOf(str1[x]) === -1) {
      // If the character is a vowel, increment the vowel count
      vcount += 1;
    }
  }

  // Return the total count of vowels in the input string
  return vcount;
}

// Log the result of calling vowel_count with the input string 'The quick brown fox' to the console
console.log(vowel_count("The quick brown fox"));








function capiltalizeFirst(str2) {
  let newStr = str2.split(" ");

  for (let i = 0; i < newStr.length; i++) {
    let x = newStr[i].charAt(0).toUpperCase();
    let y = newStr[i].slice(1).toLowerCase();

    newStr[i] = x + y;
  }

  return newStr.join(" ")


}
console.log(capiltalizeFirst("I WANT A NEW CAR"));






// function capitalizeSentence(paragraph){
//   let newParagraph = paragraph.split(". ")

//   for( let i = 0; i < newParagraph.length; i++){
//     let result = newParagraph[i].charAt(0).toUpperCase() + newParagraph[i].slice(1).toLowerCase();

//     return result.join(". ")
//   }

// }
// console.log(capiltalizeFirst("pink ponies and purple giraffes roamed the field. cotton candy grew from the ground as a chocolate river meandered off to the side. what looked like stones in the pasture were actually rock candy. everything in her dream seemed to be perfect except for the fact that she had no mouth."));






function capitalizeSentence(paragraph) {
  let newParagraph = paragraph.split(". ")

  const capitalizeSentence = newParagraph.map(sentence => {
    if (sentence.length > 0) {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return sentence;
  });
  return capitalizeSentence.join(". ")

}
console.log(capitalizeSentence("pink ponies and purple giraffes roamed the field. cotton candy grew from the ground as a chocolate river meandered off to the side. what looked like stones in the pasture were actually rock candy. everything in her dream seemed to be perfect except for the fact that she had no mouth."));






function SortDescending(str) {

  let newStr = str.split("").sort((a, b) => b.localecompare - a.localecompare).join("")

  return newStr;
}
console.log(SortDescending("alphabet"));






function sortWord(str) {

  let newString = str.split("").sort().join("")

  return newString
}

console.log(sortWord("alphaBet"));





// function findPerfect(array){
//   for( let i = 0; i < array.length; i++){
//     if (array[i])
//   }



// }



//CONTROL FLOW ASSIGNMENT
//A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".


function login() {
  let login = 1
  while (login <= 3) {
console.log("Failed");
login ++
if(login >3){
  console.log("Account blocked");
  
}

  }

}
login()

//Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.
// function userVotes(){

//   let votes = 1
//   do{
    
//     console.log(`vote count ${votes}`);
//     votes ++;
    
//   }
//   while(votes >= 0){
//     console.log("All votes processed");
    
//   }
// }
// let votes = ["Mary","Peter","John","Andrew"]
// userVotes()





//Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
function daysOfTheWeek(dayNumbers) {
  daysNumbers.forEach(day => {
    switch (day) {
      case 1:
        console.log("Sunday");
        break;

      case 2:
        console.log("Monday");
        break;

      case 3:
        console.log("Tuesday");
        break;

      case 4:
        console.log("Wednesday");
        break;

      case 5:
        console.log("Thursday");
        break;

      case 6:
        console.log("Friday");
        break;

      case 7:
        console.log("Saturday");
        break;



      default:
        console.log("Day not found");

        break;
    }

  });


}
let daysNumbers = ([1,9,6,7,5,4,3,2])
daysOfTheWeek(daysNumbers)





//Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.

const strongPassword = (password) => {
  for( let i = 0; i < password.length; i++){
    if(password[i].length >= 8){
      console.log("Strong");
      
    }
    else{
      console.log("Weak");
      
    }
  }
}
let password = ["heyworld","ftyui","Karenwan"]
strongPassword(password)




//You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".

function multiLingual(language){
  language.forEach(greeting => {
    switch(greeting){
      case "en":
        console.log("Hello");
        break;
      case "fr":
        console.log("Bonjour");
        break;
      case "sw":
        console.log("Habari");
        break;
      default:
        console.log("Language not found")   
        break;
              
      
    }

  })

}
let language = ["en","sw","fr","sp"]
multiLingual(language)





//You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"

function weather(temperatures){
  for (let i = 0; i < temperatures.length; i++){
    if(temperatures[i] > 30){
      console.log("High heat alert!");
      
    }
    else if(temperatures[i] < 15){
      console.log("Cold alert!");
      
    }
    else{
      console.log("Normal conditions");
      
    }


  }
}
let temperatures = [45,57,21,12,44,22,15]
weather(temperatures)


//Users are queued to register. Use a while loop to remove and print each name until the queue is empty.

function printUserName(users){
  while(users.length > 0){
    let registered = users.shift()
    console.log(`${registered} has been registered`);
    
  }
  console.log("Queue is empty");
  
}
let users = ["Mary","Peter","John","Andrew"]
printUserName(users)



//Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.

function test(score){

  let attempt = 1
do{ 
  
console.log(`attempt:${attempt} score:${score}`);
attempt ++
score += 10 
}
while(score <= 50);
 
}
let score = 10
test(score)


//PRACTICE FOR WHILE LOOP
function printNums (){
  let n = 1
  while (n <= 10){
    console.log(n);
    n++
    
  }
}
printNums()


//Write a JavaScript program that calculates the sum of the first N natural numbers using a while loop.

function sum(N){
let sum = 0  
let n = 1

//The ! is a negation operator. So, !isNaN(N) returns true if N is a number
// (because isNaN(N) would be false) and false if N is not a number.
if (!isNaN(N) && N > 0) {
while (n <= N){
  sum += n;
  n++;
    
}
  console.log(`the sum of the first ${N} natural numbers is ${sum}`);
} else {
  console.log("Please enter a valid positive number for N.");}


}
sum(14)


function factorial(N) {
  
factorial = 1

  while (N > 1){
    factorial*=N;
    N--;
  }
  console.log(`The factorial is ${factorial}`);
  


  
}
factorial(5)

function reverse(num) {
  let reversed = 0
  
  
}

//find the longest country name
function longestCountryName(array){
  let longest = array[0]
  for ( let i = 0; array[i] > array.length; i++ ){
    if(array[i] > longest.length){
      longest = array
    }
  }



}


//Create a function constructor called Employee that accepts a name,
// position, and salary. Create an array of 5 employees. Write a program 
//that increases the salary by 10% for employees who have the position "developer"
// and print the updated employee list. (5 pts)

function Employee(name,position,salary){

this.name = name;
this.position = position;
this.salary = salary

}

let employees=[ 
  new Employee("John","developer","100000"),
  new Employee("Jane","Manager","102000"),
  new Employee("Happy","CEO", "500000"),
  new Employee("Angel","Engineer", "300000"),
  new Employee("Max","developer", "470000")
  
]

employees.filter(employee => {

  if(employee.position == "developer"){
    employee.salary*= 1.10
  }
})
console.log(employees);

//Given an array of product objects (each with name, price, and inStock properties), write a function 
//that returns a new array containing only the products that are inStock: true, and sort the available 
//products by price in ascending order. (5 pts)

function instockProducts(products) {
  let presentProducts = products.filter(product => product.inStock === true)
      presentProducts.sort((a,b) => a.price - b.price) 

      console.log (presentProducts);
    
  
  
}
let products = [
  {name: "bottles",
    price: "100",
    inStock: true
  },
  {name: "combs",
    price: "50",
    inStock: true
  },
  {name: "chairs",
    price: "100",
    inStock: false
  },
  {name: "tables",
    price: "100",
    inStock: false
  },
  {name: "bags",
    price: "100",
    inStock: true
  }

]


instockProducts(products)




//Create an object called grades where the keys are student names 
//and the values are arrays of their scores. Write a function that 
//calculates and prints each student's average score, and if the average 
//is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)



//Write a function constructor called User that takes username, email, and isActive (boolean). 
//Create an array of users. Write a program that loops through the array and deactivates users 
//who have not logged in recently (simulate this with a random isActive: false assignment) and 
//print out the usernames of active users. (5 pts)


//Create a User object with properties like name, stepsWalked (an array of daily steps), and a 
//method totalSteps() that calculates and returns the total number of steps walked. Add another method averageSteps()
// that returns the average steps per day.

// const User ={
//   name: "pauline"
// }


function User(username,email,isActive){
  this.username = username;
  this.email = email;
  this.isActive = isActive;
}


let userss = [
  new User("Rena" ,"rena@gmail.com",true),
  new User("Rene" ,"rene@gmail.com",true),
  new User("Reni" ,"reni@gmail.com",true),
  new User("Reno" ,"reno@gmail.com",true)
  
]

users.forEach(user =>{
 if ( user.isActive = Math.floor(Math.random() * userss.length) == false){
  console.log("deactivated");
  
 }
} )

// console.log(User);





class Employees{
  constructor(id,name,performanceMetrics,feedback){
    this.id = id
    this.name = name
    this.performanceMetrics = performanceMetrics
    this.feedback = feedback
  }
}

Employees.prototype.average = function(){
 
  // let sum = 0
  // let count = 0

  const values =  Object.values(this.performanceMetrics)
  console.log(this.performanceMetrics);
  
  let sum = 0;
  // if (values.length === 0){
  //   return 0;
  // }
  for (let i = 0; i < values.length; i++) 
  // const sum = values.reduce((acc, curr) => acc + curr, 0);
    sum += values[i];
    // count++;
    console.log({sum});
    console.log(values.length)
  
  let avg = values.length > 0 ? sum/values.length : 0;

  console.log({avg});


  if (avg > 10) { 
      return `${this.name}, Good job`; 
  }
  else{
    return `${this.name}, pull up your socks`
  }
}




const employee = [
  new Employees (
  "001",
  "John",
  {"communication": 8, "efficiency": 10, "reliance": 3},
  ["He is good","Nice job"]

),new Employees (
  "002",
  "James",
  {"communication": 22, "efficiency": 10, "reliance": 17},
  ["He is good","Nice job"]

)
]

// console.log(employee.average());
employee.forEach(emp => console.log(emp.average()));
