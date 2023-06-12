import React from "react";
import "./header.css"
const Header=() => {
     return (
        <div className="header">
           
            <div className="headerContainer">

            {/* type === "list" ? "headerContainer.listMode" : "headerContainer"  */}
            
            {
               
           <><h1 >Healthcare for Good </h1>
            <h2>Today.Tomorrow.Always</h2>
            <p className="headerDesc">Accumulating Trust for more than 12 years</p>

            <div className="headerSearch">
                <h1>Our Services</h1>
            </div>
            
           </>}
        </div>
        </div>
    )
}
export default Header