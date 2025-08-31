// var stundets = {
//     stName :'hira',
//     RollNo :'c5665',
//     Ispresent:null,
//     instInfo :{
//         name: 'SMIT',
//         campus:'Aliabad',
//         email:'hera@gmail.comn'
//     },
//     courses:['gd','uiux','web&app']

// }
// // console.log(stundets.instInfo.location);  //undefined

// // console.log(stundets.subject.location);
// // console.log(stundets);

// // stundets.location ={
  
// // }
// // stundets.location.branch = 'numaish'
// // delete stundets.RollNo

// // for (var i = 0;i <stundets.courses.length;i++){
// //     console.log(stundets.courses[i]);
    
// // }
// stundets.courses.push('dm')
// stundets.courses.splice(1,2)

// console.log('email' in stundets.instInfo);

// this
//call globally return window obj
// console.log(this);



// var stundets = {
//     stName :'hira',
//     RollNo :'c5665',
//     branch:"numaish",
//     getName:function (){
//         return 
        
//     }
   
// }

// console.log(stundets.getName())



var stundets = {
    stName :'hira',
    RollNo :'c5665',
    branch:"numaish",
    getName:function (){
    return this.name
      
        
    }
   
}


console.log(stundets.getName())




