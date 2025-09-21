// find
// first number return  if true
// const numbers =[1,2,3,4,5]
// const firstevennum =numbers.find(function (num){
//    return num%2===0
// })

// console.log(firstevennum)

// every
// boolen if every number is true eles false

// const numbers =[
//     {name:"hira", isPresent: true},
//      {name:"sana", isPresent: true},
//       {name:"raza", isPresent: false},
// ]
// const allposnum =numbers.every(function (v,i){
//     console.log(v);
    
//    return v.isPresent === true
// })

// console.log(allposnum)

// Exponention operator
// console.log(2**4); // 2*2*2*2
// // iterator 
// const number = [1,2,3]
// const cycle = number [Symbol.iterator]()
// console.log(cycle.next());
// console.log(cycle.next());
// console.log(cycle.next());
// console.log(cycle.next());


// hoisting
// console.log(nfull); undefined

// var nfull = "hira"
// let and const declarations: Variables declared with let and const are also
//  hoisted, but they are not initialized with undefined like var. Instead, they enter a "Temporal Dead Zone" (TDZ) from the beginning of their scope until 
// their declaration line. Attempting to access them within the TDZ will result in a ReferenceError.

// console.log(newNum); error

// const newNum = 78

//  greet(); //function

//     function greet() { //function decalaration 
//       console.log("Hello!");
//     }


// function expression
// let myFunc = function (){
//  console.log('hello');
 
// }
 

// myFunc()

// arrow function 
// let myFunc = () => {
//  console.log('hello');
 
// }

// myFunc()


// let myFunc = (a,b) => {
//  console.log(a,b);
 
// }

// myFunc("hello" ,'hi')


// let myFunc = a =>  78 + a ;

// console.log(myFunc("hello" ));


// myFunc()  (TEMPORAL DEAD ZONE)

// let myFunc = a => {
//     console.log('HI');
    
//      return 78 + a
// } ;

// console.log(myFunc("hello" ));

// let myFunc = (a) => {
//     console.log(arguments);
    
 
// };
// myFunc()

const numbers =[1,2,3,4,5]
numbers.map((v,i)=>{
  console.log(v);
  
})










    
