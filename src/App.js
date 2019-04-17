import React, { Component } from 'react';
import Slider from './BannerSection/Slider';
import Person from './Components/Persons/Person/Person';
import Header from './Components/HeaderSection/Header';
import classes from './App.css';

class App extends Component {
    state ={
      persons:[
        {id:'raja',name:'Raja',age:25},
        {id:'raja2',name:'Krishna',age:26},
        {id:'raja3',name:'Vase',age:27}
      ],
      names:[
        {name:'raja',id:'id1'},
        {name:'krishna',id:'id2'},
        {name:'king',id:'id3'},
        {name:'Legend',id:'id4'}
      ],
      studentData:[
        {name:'Raja',age:26,class:'first'},
        {name:'Krishna',age:26,class:'second'},
        {name:'King',age:27,class:'third'}
      ],
      empoyeesData:[
        {name:'Raja Krishna',age:26,Designation:'Webdeveloper',Experence: 3},
        {name:'Vase Raja Krishna',age:25,Designation:'UI Developer',Experence: 4},
        {name:'Raja',age:27,Designation:'Sr UI developer',Experence: 5}
      ],
      showState:false,
     
    };
    // constructor(props) {
    //   super(props);
   
    // this.handleChange=this.handleChange.bind(this);
    // this.handleSubmit =this.handleSubmit.bind(this);
    // }

    
    
  handleChange =(event) =>{
    this.setState({value: event.target.value});
  }
  handleSubmit =(event)=>{
    alert("your entered value is" + this.state.value);
    event.preventDefault();
  }
  addContentTrigger =()=> {
    const studentData =[...this.state.studentData];
    studentData.push(this.state.studentData);
    this.setState({studentData:studentData});
  };

 
  getItem =(crtIndex)=>{
//  let crtIndex= event.target.getAttribute('data-index-num');

    const studentData=[...this.state.studentData];
    studentData.splice(crtIndex,1);
    this.setState({studentData:studentData})
  }
 
  toggleTrigger=()=>{
   const doesShow= this.state.showState;
   this.setState({showState:!doesShow});
  }
  onChangeTrigger=(event,index)=>{

    const personIndex= this.state.persons.findIndex((p)=>{
      return p.id===index;
    });

    const person={
      ...this.state.persons[personIndex]
    };

    person.name=event.target.value;

    const persons= [...this.state.persons];

    // doubt here
    persons[personIndex]=person;
    this.setState({persons:persons})
  }

addPerson=()=>{
  const persons=[...this.state.persons];
  persons.push(this.state.persons);
  this.setState({persons:persons});
}

deletePerson=(crtIndex)=>{
  const persons=this.state.persons;
  console.log(crtIndex);
  persons.splice(crtIndex,1);
  this.setState({persons:persons});

}
  render() {

 const empoyeesData= this.state.empoyeesData.map((employee,index)=>{
  return <li key={index}>Emplyee Name: {employee.name} Age: {employee.age}Designation:{employee.Designation} Experence: {employee.Experence}</li>
 });

const studentData=this.state.studentData.map((data,index)=>{
  return(
      <li key={index} data-index-num={index}  onClick={()=>this.getItem(index)}>Name: {data.name} Age :{data.age} class {data.class} </li>)
});
      let personss =null;
      let addButton=null;
      if(this.state.showState){
        addButton= <button className="btn btn-info" onClick={this.addPerson}>Add Element</button>
        personss=this.state.persons.map((person,index)=>{
        return  <Person name={person.name} age={person.age} key={person.id} changed={(event)=>this.onChangeTrigger(event,person.id)} elDelete={()=>this.deletePerson(index)} />
        })
      }

      const btnStyle={
        marginRight:'15px'
      }
      
    return (
      <div className={classes.App}>
      <Header></Header>
      <hr />
      {/* <Slider></Slider> */}
        <div className="container-fluid">
        <button className="btn btn-success" onClick={this.toggleTrigger} style={btnStyle}>Toggle Button</button>
        {addButton}
        <div className="row">
        {personss}
        </div>
          <hr />
        
         <form onSubmit={this.handleSubmit}>
         <input type='text' id="name" value={this.state.value} className='form-control' placeholder="Name" onChange={this.handleChange} />
          <input type='text' id="age" className='form-control' placeholder="age" />
          <input type="submit" value="submit" />
         </form>
         

            <button className="btn btn-info" onClick={this.addContentTrigger}>Add Element</button>
           
            <ul>
              {studentData}
            </ul>
            <hr/>
            <ul>
              {empoyeesData}
            </ul>
        </div>

      
      </div>
    );
  }
}

export default App;
