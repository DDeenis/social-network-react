import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';
import userApi from '../../api/api';

function ProfileContainer() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        userApi.getProfileInfo(id).then(r => setUser(r));
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