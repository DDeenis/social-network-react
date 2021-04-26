import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';

function ProfileContainer() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    
    const getUserInfo = () => axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(r => r.data);

    useEffect(() => {
        getUserInfo().then(r => setUser(r))
    }, []);

    return (
        <>
        {
            user !== null ?
            <Profile
                user={user}
            /> :
            <Loader />
        }
        </>
    );
}

export default ProfileContainer;