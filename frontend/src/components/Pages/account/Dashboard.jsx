import React from 'react'
import Layout from '../layout'

function Dashboard() {
  return (
    <Layout title="Dashboard">
         <div className="container " style={{ marginTop:"100px" }}>
        <div className="row">
            <div className="col-md-4 offset-4">
            <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid"  />
            <h5 class="my-3">John Smith</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
          </div>
        </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard