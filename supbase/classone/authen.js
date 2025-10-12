import supabase from "./config.js";

let regFrom = document.getElementById('regFrom')
//FOR SIGNUP setup first time  go your project -> authentication -> signin/providers -> 
// 1.Confirm email <disabled> 2. enabled email


let semail = document.getElementById('exampleInputEmail1')
let spassword = document.getElementById('exampleInputPassword1')
let sname = document.getElementById('username')
let scontact = document.getElementById('usercontact')




async function signup(e){
    e.preventDefault()
 try{
    if(!semail.value){
        alert('plz enter your email');
        
     return
    }
     if(!spassword.value){
         alert('plz enter your password');
     return
    }
   const { data, error } = await supabase.auth.signUp({
  email: semail.value,
  password: spassword.value,
    options: {
      data: {
        phone: scontact.value,
        Name:sname.value ,
      }
    }
})
if(data){
    console.log(data);
    location.href = 'home.html'
    
}

 }catch(err){
    console.log(err);
    
 }
      
}



regFrom.addEventListener('submit',signup)



