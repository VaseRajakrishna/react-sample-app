import React, { Component } from 'react';
// import Slider from '../Components/BannerSection/Slider';
import Persons from '../Components/Persons/Persons'
import Header from '../Components/HeaderSection/Header';
import ModalPopUp from '../Components/ModalPopUp/Modal';
import Students from '../Components/Students/StudentData';
import Row from '../Components/DynamicTable/Table';
import './App.css';
class App extends Component {
  state = {
    persons: [
      { id: 'raja', name: 'Raja', age: 25 },
      { id: 'raja2', name: 'Krishna', age: 26 },
      { id: 'raja3', name: 'Vase', age: 27 }
    ],
    names: [
      { name: 'raja', id: 'id1' },
      { name: 'krishna', id: 'id2' },
      { name: 'king', id: 'id3' },
      { name: 'Legend', id: 'id4' }
    ],
    studentData: [
      { name: 'Raja', age: 26, class: 'first', id: new Date().getTime() },
      { name: 'Krishna', age: 26, class: 'second', id: new Date().getTime() },
      { name: 'King', age: 27, class: 'third', id: new Date().getTime() }
    ],
    empoyeesData: [
      { name: 'Raja Krishna', age: 26, Designation: 'Webdeveloper', Experence: 3 },
      { name: 'Vase Raja Krishna', age: 25, Designation: 'UI Developer', Experence: 4 },
      { name: 'Raja', age: 27, Designation: 'Sr UI developer', Experence: 5 }
    ],
    listItems: [
      { name: 'Raja' }
    ],
    initialFlItems: ['Andhra Pradesh', 'Telangana', 'Karnataka', 'Orrisa', 'Maharastra'],
    setInitialItems: [],
    tableRow: [],
    bookTblRow: [],
    selectedItems: [],
    result: '',
    activeState: false,
    active: [0],
    mainGroup: [],
    showState: false,
    disabled2: false,
    currentValue: 0,
    currentAmount: 200,
  };
  componentWillMount = () => {
    this.setState({ setInitialItems: this.state.initialFlItems });
  }

  setData = (data) => {
    this.setState({ studentData: data })
  }
  getData = () => this.state.studentData;
  activeClass = (index) => {
    const activeState = this.state.activeState;
    this.setState({ activeState: !activeState });

  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      class: document.getElementById('class').value,
    }
    this.setState({ studentData: [...this.state.studentData, data] });
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('class').value = "";
  }
  deleteStudent = (crtIndex) => {
    const studentData = [...this.state.studentData];
    studentData.splice(crtIndex, 1);
    this.setState({ studentData: studentData })
  }
  toggleTrigger = () => {
    const doesShow = this.state.showState;
    this.setState({ showState: !doesShow });
  }
  checkBtnState = () => {
    const doesbtnState = this.state.btnState;
    this.setState({ btnState: !doesbtnState });
  }
  onChangeTrigger = (event, index) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === index;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    // doubt here
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }
  addPerson = () => {
    const newPerson = {
      name: "",
      age: "",
      id: ""
    }
    this.setState({ persons: [...this.state.persons, newPerson] });
  }
  deletePerson = (crtIndex) => {
    const persons = [...this.state.persons];
    persons.splice(crtIndex, 1);
    this.setState({ persons: persons });
  }
  addRow = () => {
    const newRow = {
      name: "",
      age: "",
      class: "",
      mail: "",
      checked: false,
      activeClass: '',
      id: new Date().getTime()
    }
    this.setState({ tableRow: [...this.state.tableRow, newRow] });
  }
  removeRow = (id) => {
    const tableRow = [...this.state.tableRow];
    tableRow.splice(id, 1);
    this.deselectRow(id);
    this.setState({ tableRow: tableRow });
  }
  handleBookTblSubmit = (event) => {
    event.preventDefault();
    const newTblRow = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value
    };

    this.setState({ bookTblRow: [...this.state.bookTblRow, newTblRow] });
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
  };
  handleCheck = (index) => {
    const tableRow = [...this.state.tableRow];
    tableRow[index].checked = !tableRow[index].checked;
    this.setState({ tableRow: tableRow });
    const selectedItems = [...this.state.selectedItems];
    if (tableRow[index].checked) {
      selectedItems.push(index);
      selectedItems.sort((a, b) => a - b);
      this.setState({ selectedItems: selectedItems });
      this.checkOrder(selectedItems);
    }
    else {
      this.deselectRow(index);

    }
  }
  deselectRow = (index) => {
    const selectedItems = [...this.state.selectedItems];
    selectedItems.splice(selectedItems.indexOf(index), 1);
    this.setState({ selectedItems: selectedItems });
    this.checkOrder(selectedItems);

  }
  checkOrder = (selectedItems) => {

    const disabled2 = selectedItems.every((x, i) => i !== 0 ? selectedItems[i] - selectedItems[i - 1] === 1 : true);
    console.log(disabled2);
    this.setState({ disabled2: disabled2 });
  }
  createGroup = () => {
    const selectedItems = [...this.state.selectedItems];
    const mainGroup = [...this.state.mainGroup];
    // const active=[...this.state.active];  
    mainGroup.push(selectedItems);
    this.setState({ mainGroup: mainGroup });
    //  active.push(mainGroup);
    this.setState({ active: [...this.state.active, selectedItems] });
    this.setState({ selectedItems: [] });
    this.clearCheckedItems();
    console.log(this.state.active);
  }
  clearCheckedItems = () => {
    const tableRow = [...this.state.tableRow];
    tableRow.map((item, index) => {
      return item.checked = false;
    });
    this.setState({ tableRow: tableRow });
  }
  addingValue = () => {
    const currentValue = this.state.currentValue;
    this.setState({ currentValue: currentValue + 1 });
  }
  substractVaue = () => {
    const currentValue = this.state.currentValue;
    if (currentValue > 0) {
      this.setState({ currentValue: currentValue - 1 });
    }
  }
  addAmount = () => {
    let currentAmount = this.state.currentAmount;
    currentAmount = currentAmount + 10;
    this.setState({ currentAmount: currentAmount });
  }
  withDrawAmount = () => {
    let currentAmount = this.state.currentAmount;
    if (currentAmount > 0) {
      currentAmount = currentAmount - 10;
    }
    this.setState({ currentAmount: currentAmount });
  }
  deletebookTblRow = (rowIndex) => {
    const bookTblRow = [...this.state.bookTblRow];
    bookTblRow.splice(rowIndex, 1);
    this.setState({ bookTblRow: bookTblRow });
  }
  calculate=()=>{
    try{
      this.setState({result:(eval(this.state.result) || "") + ""})
    }
    catch(e){
this.setState({result:'error'});
    }
  }
  resetResult=()=>{
    this.setState({result:''})
  }
  backSpace=()=>{
    this.setState({
      result:this.state.result.slice(0,-1)
    });
  }
  setBtnValue = (event) => {
    if(event === "="){
      this.calculate();
     }
     else if(event === 'del'){
       this.backSpace();
     }
     else if(event === 'C'){
       this.resetResult();
     }
     else{
      this.setState({result:this.state.result+event});
     }
   
  }
  filterListItems = (event) => {
    const updateList =this.state.initialFlItems;
     const newUpdateList=updateList.filter((item) => {
      return item.toLocaleLowerCase().search(event.target.value.toLocaleLowerCase()) !== -1
    });
    this.setState({ setInitialItems: newUpdateList })
  }
  render() {
    const checkedCount = this.state.tableRow.filter((row) => { return row.checked }).length;
    const disabled = checkedCount >= 2;
    let msg;
    const showListItems = this.state.setInitialItems.map((item, index) => {
      return <li key={index}>{item}</li>
    })
    const bookTblRow = this.state.bookTblRow.map((row, rowIndex) => {
      return <tr key={rowIndex}><td>{row.title}</td><td>{row.author}</td><td><button className='btn btn-danger' onClick={() => this.deletebookTblRow(rowIndex)}>Book Delete</button></td></tr>
    })
    const empoyeesData = this.state.empoyeesData.map((employee, index) => {
      return <li key={index}>Emplyee Name: {employee.name} Age: {employee.age}Designation:{employee.Designation} Experence: {employee.Experence}</li>
    });
    const tableRow = this.state.tableRow.map((elm, index) => {
      const classes = index === this.state.active[index] ? 'green' : '';
      return <Row key={elm.id} crtId={index} data={elm} addRowEl={this.addRow} activeClass={classes}
        removeRowEl={() => this.removeRow(index)} initial={elm.checked} checkedEl={() => this.handleCheck(index)} />
    })
    const studentData = this.state.studentData.map((data, index) => {
      return (
        <Students name={data.name} age={data.age} class={data.class} checkId={index} key={index}
          studentDelete={() => this.deleteStudent(index)} />
      )
    });
    let personss = null, addButton = null, hr = null;
    const activeClas = [];
    if (this.state.activeState) {
      activeClas.push('green');
    }
    if (this.state.showState) {
      addButton = <button className="btn btn-info" onClick={this.addPerson}>Add Element</button>
      personss = <Persons
        persons={this.state.persons}
        changedElement={this.onChangeTrigger}
        deleteElement={this.deletePerson}
      />
      hr = <hr />
    }
    const btnStyle = {
      marginRight: '15px'
    }
    const resultStyle={
      textAlign:'right'
    }
    const addList = this.state.listItems.map((item, index) => {
      return <li key={index} onClick={this.activeClass.bind(this)} className={activeClas.join(' ')}>{item.name}</li>
    });
    return (
      <div className='App'>
        <Header></Header>
        <hr />
        <div className="container-fluid">
          <div className="ex-one Person">
            <p>Current Value:{this.state.currentValue}</p>
            <button className='add btn btn-primary' onClick={this.addingValue}>Adding Value</button>
            <button className="subtract btn btn-danger" onClick={this.substractVaue}>Subtract Value</button>
          </div>
          <hr />
          <div className='ex-two Person'>
            <p>Current Amount:{this.state.currentAmount}</p>
            <button className="btn btn-primary" onClick={this.addAmount}>Deposit Amount</button>
            <button className="btn btn-info" onClick={this.withDrawAmount}>Withdraw Amount</button>
          </div>
          <hr />

          
          <input type='text' onChange={this.filterListItems} />
          <div className='ex-three Person'>
            <ul>{showListItems}</ul>
          </div>
          <hr />
          <form onSubmit={this.handleBookTblSubmit}>
            <input type='text' id='title' placeholder='Title' />
            <input type='text' id='author' placeholder='Author' />
            <input type="submit" value="Add Book" />
          </form>
          <hr />
          <table className='table table-border'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Book Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookTblRow}
            </tbody>
          </table>
          <hr />
          <div className='calculator'>
            <form>
              <input type="text" readOnly value={this.state.result} style={resultStyle} />
              <div className='cals-row'>
                <input type='button' className="btn btn-info" onClick={(e)=>this.setBtnValue(e.target.value)} value='1' />
                <input type='button' className="btn btn-info" onClick={(e)=>this.setBtnValue(e.target.value)} value="2" />
                <input type='button' className="btn btn-info" onClick={(e)=>this.setBtnValue(e.target.value)} value='3' />
                <input type='button' className="btn btn-info" onClick={(e)=>this.setBtnValue(e.target.value)} value='+' />
              </div>
              <div className='cals-row'>
                <input type='button' className="btn btn-primary" value="4" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-primary" value="5" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-primary" value="6" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-primary" value="-" onClick={(e)=>this.setBtnValue(e.target.value)} />
              </div>
              <div className='cals-row'>
                <input type='button' className="btn btn-info" value="7" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-info" value="8" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-info" value="9" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-info" name='*' value="X" onClick={(e)=>this.setBtnValue(e.target.name)} />
              </div>
              <div className='cals-row'>
                <input type='button' className="btn btn-primary"  value="C" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-primary" value="0" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-primary" value="=" onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type='button' className="btn btn-primary" value="/" onClick={(e)=>this.setBtnValue(e.target.value)} />
              </div>
              <div className='cals-row'>
                <input type="button" className="btn btn-info"  value='del' onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type="button" className="btn btn-info" value='(' onClick={(e)=>this.setBtnValue(e.target.value)} />
                <input type="button" className="btn btn-info" value=')' onClick={(e)=>this.setBtnValue(e.target.value)} />
              </div>
            </form>


          </div>
          <hr />
          <h4>Sample Table</h4>
          <p>Total checked count: {checkedCount} <span>{msg}</span><span>selectedItems:{this.state.selectedItems}</span></p>
          <p>Groups:{this.state.mainGroup}</p>
          <div className='text-left'>
            <button className='btn btn-info text-left' disabled={!disabled || !this.state.disabled2} onClick={this.createGroup}>Creat Group</button>
          </div>
          <table className="table table-bordered">
            <tbody>
              {tableRow}
            </tbody>
          </table>
          <div className="text-left">
            <button onClick={this.addRow} className='btn btn-primary'>Add Row</button>
          </div>
          <hr />
          <button
            className="btn btn-success"
            onClick={this.toggleTrigger} style={btnStyle}>Toggle Button</button>
          {addButton}
          <hr />
          <h4 className='text-center'>Sample Person Data</h4>
          <div className="row">
            {personss}
          </div>
          {hr}
          <ModalPopUp submitForm={this.handleSubmit} />
          <hr />
          <h4>Sample StudentData</h4>
          <div className="row">
            {studentData}
          </div>
          <hr />
          <ul>
            {empoyeesData}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
