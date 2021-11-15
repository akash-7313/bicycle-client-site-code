import React, { useEffect, useState } from "react";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import "./Dashboard.css";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import useAuth from "../../../Hooks/useAuth";
import DashboardHome from "../DashboardHome/DashboardHome";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut } = useAuth();

  const [isAdmin, setiSAdmin] = useState(false);

  useEffect(() => {
    fetch("https://peaceful-hollows-85818.herokuapp.com/admin")
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          // console.log(result[i].email);
          if (result[i]?.email === user?.email) {
            // console.log("admin");
            setiSAdmin(true);
          }
        }
      });
  }, [user?.email]);
  

  return (
    <div className="row">
      <div className="col-md-3 col-12">
        <div id="viewport">
          <div id="sidebar">
            <h2>
              <NavLink className="store-name" to="/">
                Riders
              </NavLink>
            </h2>
            <ul className="nav">
              <li>
                <NavLink to="/" className="dashboard-link">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
              {!isAdmin && (
                <div>
                  <li>
                    <NavLink to="/collection" className="dashboard-link">
                      <i className="fas fa-biking"></i> Buy New Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${url}/payment`} className="dashboard-link">
                      <i className="fas fa-money-bill-alt"></i> Payment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${url}/myOrder`} className="dashboard-link">
                      <i className="fas fa-luggage-cart"></i> My Order
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${url}/review`} className="dashboard-link">
                      <i className="fas fa-book-reader"></i> Review
                    </NavLink>
                  </li>
                </div>
              )}
              {isAdmin && (
                <div>
                  <li>
                    <NavLink
                      to={`${url}/manageAllOrders`}
                      className="dashboard-link"
                    >
                      <i className="fas fa-chart-bar"></i> Manage all orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${url}/manageProducts`}
                      className="dashboard-link"
                    >
                      <i className="fas fa-tasks"></i> Manage products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${url}/makeAdmin`} className="dashboard-link">
                      <i className="fas fa-user-shield"></i> Make admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${url}/addNewProducts`}
                      className="dashboard-link"
                    >
                      <i className="fas fa-plus-square"></i> Add new products
                    </NavLink>
                  </li>
                </div>
              )}
              <li
                onClick={logOut}
                className="dashboard-link"
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-9 col-12">
        <Switch>
          <Route exact path={path}>
            <DashboardHome isAdmin={isAdmin}></DashboardHome>
          </Route>
          <Route exact path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route exact path={`${path}/manageAllOrders`}>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route exact path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path={`${path}/addNewProducts`}>
            <AddNewProduct></AddNewProduct>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
