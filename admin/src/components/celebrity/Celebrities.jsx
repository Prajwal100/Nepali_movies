import React,{ useEffect,useState} from 'react'
import AdminLayouts from '../Layout'
import { useDispatch,useSelector } from 'react-redux'
import {listCelebrities} from '../../actions/celebrityActions'
import Celebrity from './Celebrity'
const CelebrityList=()=>{
    const dispatch=useDispatch();
    const celebrityList=useSelector((state)=>state.celebrityList);
    const {loading,error,celebrities}=celebrityList;
    
    useEffect(()=>{
        dispatch(listCelebrities());
    },[dispatch])
    return (
        <React.Fragment>
                <div className="container-fluid">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">All Celebrities</h6>
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
                                            <Celebrity celebrity={celebrity} key={celebrity._id} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

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