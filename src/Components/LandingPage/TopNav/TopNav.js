import React from "react";
import styles from "./TopNav.css"
export function TopNav(){
    return(
       <div className="top-nav">
           <div className="left"> 
                <span>Write a review</span>
                <span>Events</span>
           </div>
           <div className="right">
                <span>Login</span>
                <button className="button">Sign Up</button>
           </div>
       </div>
    );
}