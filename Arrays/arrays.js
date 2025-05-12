const people = ['Susan','Jane','Morris'];

//Add items
people.push('Max')
console.log({people});

people.push('Marion')
console.log({people});


people.unshift('Helen');
console.log({people});

people.unshift('Mercy')
console.log({people});


//Removing items
people.pop();
console.log({people});

people.pop()
console.log({people});

people.shift();
console.log({people});

//looping
let nums= [10,20,30,40,25,37];
// the arrow function is a callback function and in JS the function is anonymous

const doubled = nums.map(item => item*2)
console.log({doubled});

let length = nums.length
console.log({length});


let average = nums.map(item => item*6)
console.log({average});




//Sum of all elements

    

let count = 0;
for( let i = 0; i< nums.length; i++){
    count += nums[i];
   
    
}  console.log({count});

const sum = nums.reduce((acc, curr) => acc + curr, 5);
console.log({sum});

let Menu = [{'name':'Mercy','price': 1200, 'cuisine':'italian'},
    {'name':'Mary','price': 1800, 'cuisine':'italian'},
    {'name':'Mariam','price': 900, 'cuisine':'mexican'},

]


//filter gives every elm that meets the condition
const even = nums.filter ( item => item%2 ===0)
console.log({even});

const discover = nums.find( item => item > 20);
console.log({discover});

let multiples = [];

//foreach should never be assigned a variable bc it will return undefined
//push pushes the items in multiples variable
const square = nums.forEach(item => {
    multiples.push(item*item);
})
console.log({square});
console.log({multiples});

let x = Math.max(10,334,23,4,12)

console.log({x});

nums.forEach(item => {
    multiples.push(item*item);
})
console.log({multiples});

