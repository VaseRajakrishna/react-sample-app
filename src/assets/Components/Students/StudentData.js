import React, {Component} from 'react';
import './StudentData.css'


class Student extends Component {
    render(){

        return(
            <div className="col-sm-3">
                <div className="student">
                <p><label>Select Student</label>
                <input type="checkbox" /></p>
                    <p>Name:{this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                    <p>Class: {this.props.class}</p>
                    <hr />
                    <div className="text-right">
                        <button className="btn btn-danger" onClick={this.props.studentDelete}>Delete</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Student;