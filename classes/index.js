function Person (name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        return `Hello my name is ${this.name} and i am ${this.age} years old`;
    }
};

const anne = new Person('Anne', 22)
console.log({anne});

Person.prototype.nationality = 'Kenyan';
console.log({anne});
console.log(anne.nationality);


function Driver(name,carModel,rating){
    this.name = name;
    this.carModel = carModel;
    this.rating = rating;
}

Driver.prototype.getDetails = function() {
    return `The driver's name is ${this.name} and the car model is ${this.carModel}`  
}



Driver.prototype.isTopRated = function(){
    if(this.rating > 4.5){
        return true;
    }

}

const uberDriver = new Driver("Mwangi", "Toyota", 5)
console.log(uberDriver.getDetails());
console.log(uberDriver.isTopRated());

const boltDriver = new Driver("Maina", "Ford", 4)
console.log(boltDriver.getDetails());
console.log(boltDriver.isTopRated());


class Car {
    constructor (model, color, plateNumber){
        this.model = model;
        this.color = color;
        this.plateNumber = plateNumber;
    }
    accelerate(acceleration){
        return`${this.model} accelerates at ${acceleration} km/hr`;

    }
}

const car = new Car("Toyota","black")
console.log(car.accelerate(80));





class Student{
    constructor(name,course,scores){
        this.name = name;
        this.course = course;
        this.scores = scores;
    }
    
}

Student.prototype.getAverageScore = function(){
   let sum = 0
    for(let i = 0; i < this.scores.length; i++){
       sum += this.scores[i]
    }
       let average = sum/this.scores.length

       return average

} 
      


Student.prototype.isPassing = function(){
    if (this.getAverageScore() > 50) {
        return "passed"
        
    }else{
        return "failed"
    }
}

const student = new Student("Anne","Maths",[23,45,89,78,67])
console.log(student.getAverageScore());
console.log(student.isPassing());

const student2 = new Student("Jace","Maths",[23,45,39,68,67])
console.log(student2.getAverageScore());
console.log(student2.isPassing());




class Bus extends Car{
    constructor(model,color,plateNumber,seats){
        super(model,color,plateNumber);

        this.seats = seats;
    }
    start(){
        return `Vroom`
    }

}
 const bus = new Bus("Nissan","white","KBZ 123D",45)
 console.log(bus);
 console.log(bus.accelerate(43));
 console.log(bus.start());
 
 
 