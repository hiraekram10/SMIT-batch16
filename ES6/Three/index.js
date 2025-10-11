// let arr = [2,3,[6,7]]
// // let copyarr = [...arr]
// let copyarr = JSON.parse(JSON.stringify(arr))
// copyarr[2][0] = 18
// console.log(arr);
// console.log(copyarr);

//a closure allows an inner function to access the variables and parameters of its outer 
// function, even after the outer function has finished executing.

// function createCounter() {
//     let count = 1;
//     function multi() {
    
//      return   count * 2
     
//     }
  
 
  
//    return multi

     
// }

// const counter1 = createCounter();
// console.log(counter1())


    // function multiplier(factor) {
    //     return function(number) {
    //         return number * factor;
    //     };
    // }

    // const innerFunc = multiplier(2);
    // console.log(innerFunc(10));



//     var i = 89
// function getName (a){
//     console.log(a +'hello user ');
    
// }


// getName('good morning')
// getName('hasjgsdfj')

//     // export default i  // import i from './index.js'  export default 
//     export {i , getName}
    


// let rollno = 2378

// let obj = {
//     rollno
// }
// console.log(obj);
// function Student1(){

// }

class Student1 {
    constructor(userName, age){
    this.userName = userName;
   this.age = age
    }
    getName (){
        console.log("hi");
        
    }
}
class Student extends Student1 {
    constructor(newZa, age234){

        super()

    }
    getName (){
        console.log("hi");
        
    }
}

var check = new Student('hira','283746');
check.getName()
console.log(new Student('sana','2453'));


 

   
  

