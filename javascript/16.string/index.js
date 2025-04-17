// var userName = "sTalHa"
// var result= userName.toLowerCase()

// console.log(userName);
// console.log(result);


// var userName = "talHa"
// console.log(userName);

// var result = userName[0].toUpperCase() + userName.slice(1).toLocaleLowerCase()
// console.log(result);

var fullName = "ali hehzad";
var result = '';
var tempr = ''

for (var i = 0; i< fullName.length; i++){
    if(i == 0){
       
        
        result += fullName[i].toUpperCase() 

    }else if(fullName[i] == ' '){
      tempr= fullName[i + 1].toUpperCase()
      result += fullName[i]
    }
    else{
        if(tempr){
            
       result += tempr
       tempr =''
       
        } else{
            result += fullName[i]
            console.log("hi");
            
        } 
    }
}

console.log(result);












