import React from "react";
import AdminLayouts from "../Layout";

function ProfilePageComponent() {
  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
      </div>
    </>
  );
}

function ProfilePage() {
  return <AdminLayouts children={<ProfilePageComponent />} title="Profile Page"/>
}

export default ProfilePage;
