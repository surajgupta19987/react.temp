import React from 'react';


class Employee extends React.Component{
    render(){
        return(
            <div>
                <h1>employee Details</h1>
                <h3>employee Name: {this.props.name}</h3>
                <h3>employee Id: {this.props.id}</h3>
                <h3>employee Address: {this.props.address}</h3>
            </div>
        )
    }
}
export default Employee;