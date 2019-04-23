import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    render(){

        return this.props.persons.map((person,index)=>{
            return <Person 
            name={person.name} 
            age={person.age}
            key={index}
            changed={(event)=>this.props.changedElement(event,person.id)}
            elDelete={()=>this.props.deleteElement(index)}
             />
        })
    }
}

export default Persons;