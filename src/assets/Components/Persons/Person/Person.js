import React, {Component} from 'react';

import './Person.css';

class Person extends Component{
    render(){
        return(
            <div className="col-sm-4">
            <div className="person">
            <div className="form-group text-right"><button className="btn btn-danger pull-right" onClick={this.props.elDelete}>Delete</button></div>
                
                <p>Name {this.props.name} Age {this.props.age} </p>
                <hr />
                <input type="text" className='form-control' value={this.props.name} onChange={this.props.changed}/>
               
                </div>
            </div>
            
            )
    }

};

export default Person;