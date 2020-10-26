import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {auth} from '../firebase';
import { useStateValue } from '../ReactContextAPI/StateProvider'

function Login() {
    const [{err,loading},dispatch]=useStateValue();

 const history=useHistory();
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");


const login=(e)=>{
    e.preventDefault();
    dispatch({type:"LOADING",payload:true})
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
        dispatch({type:"LOADING",payload:false})
        dispatch({
            type:"ERROR",
            err:null
        })
        history.push("/");
    })
    .catch((err)=>{
        dispatch({type:"LOADING",payload:false})
        dispatch({
            type:"ERROR",
            err:err.message
        })
    });
    
}


const register=(e)=>{
    e.preventDefault();
    dispatch({type:"LOADING",payload:true})
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        dispatch({type:"LOADING",payload:false})
        dispatch({
            type:"ERROR",
            err:null
        })
        history.push("/");
    })
    .catch((err)=>{
        dispatch({type:"LOADING",payload:false})
        dispatch({
            type:"ERROR",
            err:err.message
        })
    });
   
}

    return (
        <div className="login">
            {/* <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link> */}
            {
                loading?(<div class="spinner-border text-warning mb-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>):null
            }
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    {
                        err?<p className="err">{err}</p>:null
                    }
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" password={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button type="submit" className="login__signin" onClick={login}>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale .Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
                <button className="login__register" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
