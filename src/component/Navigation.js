import React from 'react'
import "../App.css"

function Navigation(){
    return(
      <div className="Nav">
        <div className="leftside ml-auto">
          <button className="btn">open</button>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#servicres">Services</a>
       
        </div>
        <div className="rightside">
          <input type="text" placeholder="Search..."/>
          <button>Search</button>
        </div>
      </div>
    )
}
export default Navigation;