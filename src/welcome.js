import React from "react";
import {Link} from "react-router-dom";

function Welcome(props){
    let mail=props.location.state.email;
    return(
        <div className="parent">
        <div className="box2">
            <h2>WELCOME</h2>
            <p>You have logged in with the email address as</p>
            <h2 style={{color:"white"}}>{mail}</h2>
           <Link to="/">
            <button>LOGOUT</button>
            </Link>
        </div>
        </div>
    );
}

export default Welcome;