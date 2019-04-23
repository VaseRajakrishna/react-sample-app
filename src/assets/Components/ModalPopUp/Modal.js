import React, {Component} from 'react';

class ModalPopUp extends Component {
    render(){
      let style={
        marginLeft:'15px'
      }
        return (
            <div> 
            <div className="form-group text-left">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Add Student
          </button>
          <button type="button" className="btn btn-danger" style={style}>
            Delete
          </button>
            </div>
           
            <div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Enter Student Details</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
            <form onSubmit={this.props.submitForm}>
            <div className="form-group">
            <input type='text' id="name"  className='form-control' placeholder="Name" />
            </div>
            <div className="form-group">
            <input type='text' id="age" className='form-control' placeholder="Age" />
            </div>
        <div className="form-group">
        <input type='text' id="class" className='form-control' placeholder="Class" />
        </div>
        <div className="form-group text-right">
        <input type="submit" value="submit" className="btn btn-primary" />
        </div>
         
            </form>
      </div>
      

    </div>
  </div>
</div>
</div>

        );

    }
}

export default ModalPopUp;