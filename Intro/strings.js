let greeting = 'hello';

console.log(greeting[2]);
console.log(greeting[greeting.length - 1]);
console.log(greeting[0]);
greeting[2] = 'f';
console.log({greeting});

const replaced = greeting.replace(greeting[2], 'f');
console.log({replaced});

let world = 'world';
console.log(greeting + ' '+ world);

const combine = `${greeting} ${world}`
console.log({combine});

let text = `the child walked to the market`
let newText = text.charAt(0).toUpperCase() + text.slice(1);
console.log({newText});

const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
 for (bird in birds){
  console.log(bird);
  
 }
