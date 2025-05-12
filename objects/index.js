const person ={
    age:21,
    name: "Jane",
    gender: "female",
    greet: function(){
        console.log('Hello there');

        console.log(`Hello there ${this.name}`);
        
        
    }
// object initializer    

};
console.log(person.age);
console.log(person["name"]);

person.country = "Kenya";
console.log({person});

person.age=24;
console.log({person});

delete person.country;
console.log({person});

person.greet()



//JSON placeholder

person.introduction = ()=>{

    console.log(`My name is ${person.name} and I am ${person.age} years old`);
    
}
person.introduction()

//when using an arrow function this keyword refers to the global object instead use the object name

// function studentScores(scores){
//     for( let i = 0; i < scores.length; i++){
//         if ( typeof scores[i].score !== "number"){
            
//         }
//         while(scores[i].score > 50){
//             console.log(scores.name);
            
//         }
//     } 
// }
// const scores = [
//     {name: "Max",
//      score: 20.3},

//      {name: "Jane",
//       score: 58}, 
     
//      {name: "Michal",
//       score: "60" 
//      } 

// ]



// studentScores(scores)



function studentScores(scores){
    let passedStudents = scores.filter(student => student["score"] > 50);

    console.log(passedStudents);
    
}
const scores = [
    {name: "Max",
     score: 20.3},

     {name: "Jane",
      score: 58}, 
     
     {name: "Michal",
      score: 60
     } 

]



studentScores(scores)




















function Car(model, color, brand){
    this.model = model;
    this.color = color;
    this.brand = brand
}

const car = new Car('Maybach','black','Mercedes');
console.log({car});
console.log(car.color);
car.description = function(){
    console.log(`This is a ${this.brand}`);
    
}
car.description();

const toyota = new Car('Corolla','black','Toyota')
console.log({toyota});





