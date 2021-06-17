import React,{useState} from "react";
import {Link} from "react-router-dom";

function Login(){
    const [email,setEmail] =useState("");
    

    return(
        <div className="parent">
        <div className="box">
            <h2 style={{textAlign:"center"}}>LOGIN FORM</h2>
            <label htmlFor="text">EMAIL</label>
            <input type="email" name="text" placeholder="enter email" onChange={(event) => {
            setEmail(event.target.value);
          }}></input>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" placeholder="password"></input><br />
            <Link
          to={{
            pathname: "./welcome",
            state: { email }
          }}
        >
            <button>Login</button>
            </Link>
            
        </div>
        </div>
    );
}

export default Login;