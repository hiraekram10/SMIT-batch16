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
if(error){
    console.log(error);
    return

    
}else{
  location.href = 'home.html'
}

 }catch(err){
    console.log(err);
    
 }
      
}



regFrom && regFrom.addEventListener('submit',signup)


// ________________________login


let loginForm = document.getElementById('loginForm')



let lemail = document.getElementById('exampleInputEmail1')
let lpassword = document.getElementById('exampleInputPassword1')





async function login(e){
    e.preventDefault()
 try{
    if(!lemail.value){
        alert('plz enter your email');
        
     return
    }
     if(!lpassword.value){
         alert('plz enter your password');
     return
    }
   const { data, error } = await supabase.auth.signInWithPassword({
  email: lemail.value,
  password: lpassword.value,
   
})
if(error){
    console.log(error);
    return

    
}else{
Swal.fire({
  title: "login",
  text: "congratulation , you are signed in",
  icon: "success"
});

location.href = 'home.html'

  
}

 }catch(err){
    console.log(err);
    
 }
      
}





loginForm && loginForm.addEventListener('submit',login)


let logoutBtn = document.getElementById('logout')


async function logout (){
const { error } = await supabase.auth.signOut()

if (!error) {
   alert('logout successfully')
   location.href = 'index.html'
}
}

logoutBtn && logoutBtn.addEventListener('click',logout)



