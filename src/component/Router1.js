import React from'react'
import Counter from'./Counter'
import Navigation from'./Navigation'
import Helloworld from'./Helloworld'
import Employee from './Cubexo';
import { BrowserRouter as Router, Switch,Route }from'react-router-dom';
function Router1(){
    return(
        <Router>
        <div>
            <Navigation/>
        <Switch>
            <Route path="/Counter" component={Counter}/>
            <Route path="/Helloworld" component={Helloworld}/>
            
        </Switch>
        
        </div>
        </Router>
    )
}
export default Router1;