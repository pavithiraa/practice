import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const navigate = useNavigate();
    const [input ,setInput]= useState({
        email:"",
        password:""
    });

    const handleInput=(e)=>{
        if(e.target.type==="email"){
           setInput({...input,email:e.target.value})
        }
        if(e.target.type==="password"){
            setInput({...input,password:e.target.value})
        }
    }

    const handleLoginBtn=()=>{
        if(input.email && input.password){
            navigate('/')
        }
    }

    const handleGoogleLogin=useGoogleLogin({
onSuccess:(response)=>{
    console.log(response);
    navigate('/')
},

onError:()=>{
    console.log("Login Failed");
}
    })


    // client id=898014212130-24k42om91lg7rgsk696v1npqe8q4q1vg.apps.googleusercontent.com
return(
    <div className="login-container">
        <h3>Login</h3>
        <div className="login-input-container">
            <input type="email" value={input.email} onChange={handleInput}/>
            <input type="password" value={input.password} onChange={handleInput}/>
            <button className="login-button" type="submit" onClick={handleLoginBtn}>Login</button>
            <button className="login-button" style={{ backgroundColor: 'red', color: 'white' }} type="submit" onClick={()=>handleGoogleLogin()}>
                Continue with Google
            </button>
        </div>
        
    </div>
)
}
export default Login