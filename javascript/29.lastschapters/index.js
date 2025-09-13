
// function checkIn() {
// var radioInp =  document.getElementsByName('gender')
// for (var i = 0; i < radioInp.length;i++){
//        console.log(radioInp[i].value)
//    if(radioInp[i].checked === true){
//    console.log( radioInp[i].value)
//    }

// }
// }


// checkIn()

try {
    var fullName = 'hello'
  if(fullName == ''){
    throw "enter your name"
  }else{
   console.log(fullName);
   
  }

 
     
} catch (error) {

  console.log(error)
    
   


}



function checkIn() {
    var radioInp = document.getElementsByName('gender')
    for (var i = 0; i < radioInp.length; i++) {
        console.log(radioInp[i].value)
        if (radioInp[i].checked === true) {
            console.log(radioInp[i].value)
        }

    }
}


checkIn()





