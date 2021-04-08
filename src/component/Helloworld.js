import React from 'react'
import Employee from './Cubexo';
function gettime(){
    return(
        new Date()
    ).toLocaleTimeString()
}
function Helloworld(props){
    return(
        <div>
            <Employee/>
          
            <div className="time">
                <div><h1>current time:</h1></div>
                <h2>{gettime()}</h2>
            </div>
        </div>
    )
}
export default Helloworld