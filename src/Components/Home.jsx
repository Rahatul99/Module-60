import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user} = useContext(authContext);
    console.log(user);

    return (
        <div>
            Name: {user && <span>{user.displayName}</span>}
        </div>
    );
};

export default Home;