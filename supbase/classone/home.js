import supabase from "./config.js";

let username = document.getElementById('username')
async function UserFetch (){
    try{
    const { data, error } = await supabase.auth.getUser()
    console.log(data);
    
  if(data){
    username.innerHTML = data.user.user_metadata.Name
  }
    
    }catch(err){
        console.log(err);
        
    }
}
UserFetch()