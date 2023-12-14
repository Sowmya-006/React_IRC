import './Assets/Css/register.css'
function register(){
    return(
        
   <form class="container shadow" onsubmit="register()">
        <input type="text" name ="" id="" placeholder="Username" class="auth-input"/>
        <input type ="email" name ="" id="" placeholder="Email" class="auth-input"/>
        <input type ="phone" name ="" id="" placeholder="Phone Number" class="auth-input"/>
        <input type ="password" name ="" id="" placeholder="Password" class="auth-input"/>
        <input type ="password" name ="" id="" placeholder="Confirm Password" class="auth-input"/>
        <input type ="submit" value ="Register" class="auth-btn"/>
        
    </form>   
    
    )
}
export default register;