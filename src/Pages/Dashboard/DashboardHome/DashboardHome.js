import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = (props) => {
  // console.log(props.admin);
  const mrAdmin = props.isAdmin;
    
    const { user } = useAuth();
    console.log(user);
    return (
      <div className="mt-5 ps-3">
        <h2>
          Welcome to Rider's Store,{" "}
          <b className="text-secondary">
            {user.displayName}
            {mrAdmin ? <small>(admin)</small> : <small>(user)</small>}
          </b>
        </h2>
      </div>
    );
};

export default DashboardHome;
