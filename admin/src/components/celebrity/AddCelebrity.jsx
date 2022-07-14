import React,{useState} from "react";
import AdminLayouts from "../Layout";
import {useDispatch,useSelector} from 'react-redux'
const AddCelebrityComponent = () => {
  
  const dispatch= useDispatch();
  const [submitted,setSubmitted] = useState(false);
  const [formState,setFormState]=useState({
    values:{}
  })
  
  
  const handleChange=(e)=>{
    setFormState(formState=>({
      ...formState,
      values:{
        ...formState.values,
        [e.target.name]:e.target.value
      }
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(true);
    const {name}=formState.values
    if(name ){
    dispatch()
      setFormState({values:{}})
      setSubmitted(false);
    }
  }
  return (
    <React.Fragment>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <form action={handleSubmit}>
               <div className="row">
                <div className="col-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Celebrity name" name="name" onchange={handleChange}  /> 
                    {submitted && !formState.values.name && 
                    <div className="text-danger">Name field is required</div>
                  }
                </div>
                </div>
                
                <div className="col-6">
                <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="date" className="form-control" placeholder="Date of birth" name="dob"/> 
                    <div className="text-danger">DOB field is required</div>
                  
                </div>
                </div>
                
                <div className="col-6">
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" className="form-control" name="image"/> 
                    <div className="text-danger">Image field is required</div>
                  
                </div>
                </div>
                 <div className="col-6">
                <div className="form-group">
                    <label>Preview</label>
                   <img src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt="preview" className="img-fluid" style={{ width: "160px", height: "160px" }}/>
                  
                </div>
                </div>
                
                <div className="col-6">
                <div className="form-group">
                    <label>Gender</label>
                    <select className="form-control" name="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    
                    </select>
                </div>
                </div>
                
                <div className="col-6">
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" name="address"/> 
                </div>
                </div>
                <div className="col-12">
                <div className="form-group">
                    <label>Biography</label>
                    <textarea className="form-control" placeholder="Enter Biography" name="biography"></textarea> 
                </div>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
               </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
function AddCelebrity() {
  return <AdminLayouts children={<AddCelebrityComponent />} />;
}

export default AddCelebrity;
