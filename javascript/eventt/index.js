



// function picChange(e){
//     // console.log(e.target.src);
//     e.target.src ="https://media.istockphoto.com/id/93214254/photo/vervet-monkey-chlorocebus-pygerythrus.jpg?s=612x612&w=0&k=20&c=p0Pxilywbzh0Jcsobjv3zCUaT5IQ93eTOtre8He4W9A="
//     e.target.style.cursor = "pointer"

// }


// function resetPic(a){
//     a.target.src ='https://images.unsplash.com/photo-1605559911160-a3d95d213904?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9ua2V5fGVufDB8fDB8fHww'
    
// }

// var image = document.querySelector('#image')
// function picChange(){
  
//  image.src = 'https://media.istockphoto.com/id/93214254/photo/vervet-monkey-chlorocebus-pygerythrus.jpg?s=612x612&w=0&k=20&c=p0Pxilywbzh0Jcsobjv3zCUaT5IQ93eTOtre8He4W9A='

// }

// var email = document.querySelector('#email')
// function check(){
   
// var userInp = email.value
// if (userInp.indexOf('@') != -1){
//   console.log('hi');
  
    
// }else{
//  email.className = 'cahngeColor'
// email.setAttribute("class","cahngeColor")
//   email.focus()
   
    
// }

    
    
// }

// function changeTheme(){
//     var a = document.querySelector('.main')
//     var icon = document.querySelector('.fa-solid')
//     icon.className += " colorlight"
//     a.className += ' dark'
//     console.log(icon.classList);
    
    
// }


function submitfucn(e){
    e.preventDefault()
     var email = document.querySelector('#email')
     var _pass = document.querySelector('#pass')
   var   checkBox = document.querySelector('#checkBox')
   console.log(checkBox.checked);
   if(checkBox.checked){
   _pass.type = 'text'
   }else{
     _pass.type = 'password'
   }
   

   console.log(email.value, _pass.value);
   localStorage.setItem('email',email.value)
   




}


