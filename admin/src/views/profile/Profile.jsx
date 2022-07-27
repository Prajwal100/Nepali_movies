import React,{useEffect} from "react";
import AdminLayouts from "../Layout";
import {useSelector,useDispatch} from 'react-redux';
function ProfilePageComponent() {
  
  const {profile} =useSelector((state) => state.user)
  const dispatch= useDispatch();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 offset-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: "150px" }}
              />
              <h5 className="my-3">{profile.name} <span className="badge badge-success">{profile.role}</span></h5>
              <p className="text-muted mb-1">{profile.email}</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  return (
    <AdminLayouts children={<ProfilePageComponent />} title="Profile Page" />
  );
}

export default ProfilePage;
