import React from "react";
import AdminLayouts from "../Layout";

const AddCelebrityComponent = () => {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <form>
               <div className="row">
                <div className="col-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Celebrity name"/> 
                </div>
                </div>
                
                <div className="col-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Celebrity name"/> 
                </div>
                </div>
                
                <div className="col-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Celebrity name"/> 
                </div>
                </div>
                
                <div className="col-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Celebrity name"/> 
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
