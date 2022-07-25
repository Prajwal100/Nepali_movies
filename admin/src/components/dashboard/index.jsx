import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardInfo } from "../../actions/dashboardActions";
import AdminLayouts from "../Layout";
const DashboardComponent = () => {
  const { dashboardData } = useSelector((state) => state.dashboardInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardInfo());
  }, [dispatch]);
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Celebrities
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {dashboardData ? dashboardData.totalCelebrities : "0"}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Total Movies
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {dashboardData ? dashboardData.totalMovies : "0"}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-image fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Total Users
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {dashboardData ? dashboardData.totalUsers : "0"}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending Requests
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const Dashboard = () => {
  return <AdminLayouts title="Nepali Movies || Dashboard" children={<DashboardComponent />} />;
};

export default Dashboard;
