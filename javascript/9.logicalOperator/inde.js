// 


// console.log(9 <10 && 10==10 && 5==5);
// console.log(true && 0 && 1 );  //0
// _____________________________________1.stops at first falsy valu
//______________________________________2 . returns last truthy value
/*
console.log(0 && false && true);  //0
console.log(true && 1 && "true" && -0 && 'four');   //-0
console.log(true && 1 && "true"  && 'four'); //four
*/




// logical or||
// _____________________________________1.retrns first trthy value
//______________________________________2 . stops at last falsy value
// console.log(false || 'hira' || 0); //'hira
// console.log(false || 0 || '' || 66); //66
// console.log(false || 0 || '' || -0);  //-0

// console.log(true && 1 || 0);
// console.log( undefined || undefined);
// {products && products.map}
// {phone || email} //optional input


//_______________________________________________program

let distance = '2k'
let time = 15 
let height = 5.7
let weight = 80 
let age = 25

if(time < 20 && distance == '3k' || age < 40){
  console.log('you are eligible');
  
}else{
  console.log('ghr jao');
  
}




















