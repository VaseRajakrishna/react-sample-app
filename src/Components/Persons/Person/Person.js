import React from 'react';

import './Person.css';

const person=(student) =>{
return(

<div className="col-sm-4">
<div className="person">
<div className="form-group text-right"><button className="btn btn-danger pull-right" onClick={student.elDelete}>Delete</button></div>
    
    <p>Name {student.name} Age {student.age} </p>
    <hr />
    <input type="text" className='form-control' value={student.name} onChange={student.changed}/>
   
    </div>
</div>

)
};

export default person;