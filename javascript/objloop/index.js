// var obj = {
//     name :"hira",
//     rollno :"87236as"
// }
// var obj1 = {
//     name :"rida",
//     rollno :"87236fgdfgs",
//     getname: function(){
//         console.log(this.name);

//     }
// }

// function in obj called method

// obj1.getname()


// function Students (naa,email,rollNo){
//    this.name = naa;
//    this.email= email ;
//    this.rollno=  rollNo;




// }

// Students.prototype.getDetails = function(){
//       return `hi ${this.naa} your email adress is ${this.email}`
//    }

// var st1= new Students("hira","her@gmail.com",8723764);
// var st2= new Students("sana","sana@gmail.com",'8723sdf');
// var st3 = new Students("shaziya","sh@gmail.com",'8723dfg');
// console.log(st1);
// console.log(st2);
// console.log(st3);
// console.log(st1.getDetails());




// // var arr = [st1,st2,st3]
// // var newindex = new Students('warisha','warisha@gmail.com0',"7236g")
// // arr.push(newindex)
// // console.log(arr);
// console.log(st1.hasOwnProperty('getDetails'));


// var obj1 = {
//     name :"rida",
//     rollno :"87236fgdfgs",
//     email:'hjhrgwkejr'
// }
// var obj2 = {
//     name :"rida",
//     rollno :"87236fgdfgs",
//     email:'hjhrgwkejr',
//     num:98247
// }





// for(var a in obj2){
//     console.log(obj1[a]);

// }


var makeupProduct = {
    Maybelline: {
        NewYork: {
            img: "lip.jpg",
            productName: "Lipstick",
            shade: "Red",
            price: "$10",
        },
        turkey: {
            img: "masc.jpg",
            productName: "mascara",
            shade: "blue",
            price: "$20",


        }
    },
    LOreal: {
        Paris: {
            img: "found.jpg",
            productName: "Foundation",
            shade: "Beige",
            price: "$15",
        }
    },
    Revlon: {
        London: {
            img: "masc.jpg",
            productName: "Mascara",
            shade: "Black",
            price: "$12",
        },
        Pakistan: {
            img: "one.jpg",
            productName: "lipglow",
            shade: "pink",
            price: "$8",
        }
    },
    MAC: {
        Toronto: {
            img: "ey.png",
            productName: "Eyeshadow",
            shade: "Gold",
            price: "$20",
        }
    },
    NARS: {
        Tokyo: {
            img: "blush.jpg",
            productName: "Blush",
            shade: "Pink",
            price: "$18",
        }
    },


}
var main = document.querySelector('#main')

for(var key in makeupProduct){
  
    for(var key2 in makeupProduct[key] ){
        console.log(makeupProduct[key][key2]);
        var obj = makeupProduct[key][key2];
        main.innerHTML +=`  <div class="card col-4 " style="width: 18rem;">
  <img src='${obj.img}' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.productName}</h5>
    <p class="card-text">${obj.shade}</p>
    <a href="#" class="btn btn-primary">${obj.price}</a>
  </div>
</div>`
        
    }
    
}


var company = document.querySelector('#company');
var country = document.querySelector('#country')

for(var key in makeupProduct){
   company.innerHTML += `<option value="${key}"> ${key}</option>`
 
    
}



  function selectCoun(){
for(var key in makeupProduct[company.value]){
   


console.log(key);


country.innerHTML = ''
country.innerHTML =`<option value="">select city </option>`


country.innerHTML += `<option value="${key}">${key}</option>`

}

999999999999999
  
    
}









