import React,{ useEffect,useState} from 'react'
import AdminLayouts from '../Layout'
import { useDispatch,useSelector } from 'react-redux'
import {listCelebrities} from '../../actions/celebrityActions'
import Celebrity from './Celebrity'
import {Link} from 'react-router-dom'
import Loader from '../Layout/Loader'
import { deleteCelebrity } from "../../actions/celebrityActions";
import {DELETE_CELEBRITY_RESET} from '../../actions/celebrityActions'

const CelebrityList=()=>{
    const dispatch=useDispatch();
    const celebrityList=useSelector((state)=>state.celebrityList);
    const {loading,error,celebrities,isDeleted}=celebrityList;
    
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
          dispatch(deleteCelebrity(id));
        }
      };
    useEffect(()=>{
        dispatch(listCelebrities());
        
        if(isDeleted){
          dispatch({type:DELETE_CELEBRITY_RESET})
        }
        
    },[dispatch,isDeleted])
    return (
        <React.Fragment>
                <div className="container-fluid">

                   {loading ? <Loader /> : (
                     <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h6 className="m-0 font-weight-bold text-primary">All Celebrities <Link  to="/celebrity/create" className="btn btn-warning"><i className="fa fa-plus"></i> Create</Link></h6>
                     </div>
                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                 <thead>
                                     <tr>
                                         <th>Name</th>
                                         <th>Image</th>
                                         <th>Gender</th>
                                         <th>DOB</th>
                                         <th>Address</th>
                                         <th>Actions</th>
                                     </tr>
                                 </thead>
                                 <tfoot>
                                     <tr>
                                         <th>Name</th>
                                         <th>Image</th>
                                         <th>Gender</th>
                                         <th>DOB</th>
                                         <th>Address</th>
                                         <th>Actions</th>
                                     </tr>
                                 </tfoot>
                                 <tbody>
                                     {celebrities.map((celebrity)=>(
                                        //  <Celebrity celebrity={celebrity} key={celebrity._id} />
                                        <tr>
                                        <td>{celebrity.name}</td>
                                        <td>
                                          <img src={celebrity.image} alt={celebrity.name} style={{ width: "60px" }} />
                                        </td>
                                        <td>{celebrity.gender}</td>
                                        <td>{celebrity.dob}</td>
                                        <td>{celebrity.address}</td>
                                        <td>
                                          <Link to="" className="btn btn-primary btn-sm">
                                            <i className="fa fa-edit"></i>
                                          </Link>
                                          <Link
                                            to="#"
                                            className="btn btn-danger btn-sm ml-2"
                                            onClick={() => deleteHandler(celebrity._id)}
                                          >
                                            <i className="fa fa-trash-alt"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                     ))}
                                 </tbody>
                             </table>
                         </div>
                     </div>
                 </div>
                   )}

                </div>
        </React.Fragment>
    )
}
function Celebrities() {
   
  return (
    <>
    <AdminLayouts children={<CelebrityList />}/></>
  )
}

export default Celebrities