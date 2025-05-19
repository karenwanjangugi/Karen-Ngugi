const hello = (name)=>{
    console.log(`Hello there ${name}`);
    // hello(name);
    
};
// this is how you pass a function as an argument in another function(call back fn) 
const greet = (name,hello) => {
    console.log(`Hello ${name}`);
    hello(name);
    
}

greet('Henry', hello);

// setTimeout(() => {
//     console.log("This is a timeout");
    
// }, 2000);

// setInterval(() => {
//     console.log("This is a setinterval");
    
// }, 3000);

const outerFunction = ()=> {
    let person = "John"; //not returned
    function innerFunction() {
        console.log(`Hi, ${person}`);
        
    }
    return innerFunction;
};
console.log(outerFunction);

const callOuterFunction = outerFunction() //has to be called twice
callOuterFunction()

//resolve and reject are in-built functions
const internship = false;

const promise = new Promise(function(resolve, reject){
    if(internship){
        resolve('I shall visit you')
    }else{
        reject('I am still applying')
    }
});// can chain from here by removing the semi-colon and adding a full-stop

//chaining: continues the function outside the function

promise
.then((res)=>{
    console.log("I have an internship",res);
})
.catch(()=>{
    console.log("There i still time");
})
.finally(() => {
    console.log("I enjoyed my time");
    
})

console.log(promise);

const tour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I want to tour Mombasa");
    }, 4000)
});

async function visitPlaces() {
    try {
        const visit = await tour;

        console.log({visit});
    } catch (error) {
        console.log(" I don't want to tour");
        throw new Error(error);
        
        
    }
    
    
}
visitPlaces()


