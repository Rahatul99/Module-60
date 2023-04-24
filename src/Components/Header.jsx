import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(authContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch((error) => console.log(error))
    }



    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
            <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
            <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
            {
                user ? <>
                         {user.email}
                         <button className="btn btn-xs" onClick={handleLogOut}>Sign Out</button>
                       </>
                        : 
                       <>
                        <Link to="/login">Login</Link>
                       </>
            }
            </div>
        </div>
    );
};

export default Header;