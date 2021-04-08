import React, { useState } from 'react'
function Counter(){
    const [count,setConut] = useState(0)
    return(
        <div className="data">
            <h1>count : {count}</h1>
        <h1 onClick={()=>setConut(count+1)}>pluse</h1>
        <h1 onClick={()=>setConut(count-1)}>minus</h1>
        </div>
    )
}
export default Counter;