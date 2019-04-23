import React,{Component} from 'react';
import './Table.css';

class TableRow extends Component{

    render(){
        return(
                <tr className={this.props.activeClass}>
                    <td><label></label>
                    <input type='checkbox' id={this.props.crtId} checked={this.props.initial}  onChange={this.props.checkedEl} /></td>
                    <td>
                    <button onClick={this.props.addRowEl} className="btn btn-primary">+</button>
                    <button className="btn btn-danger" onClick={this.props.removeRowEl}>X</button>
                    </td>
                    <td><label>Name: {this.props.crtId}</label><input type='text' /></td>
                    <td><label>Age:</label><input type='text' /></td>
                    <td><label>Class:</label><input type='text' /></td>
                    <td><label>Mail:</label><input type='text' /></td>
                </tr>

        )
    }
}

export default TableRow;