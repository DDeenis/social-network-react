import React, { useEffect } from 'react';
import Profile from './Profile';
import { useParams } from 'react-router';
import Loader from '../Common/Loader/Loader';
import { setWatchedProfileThunkCreator } from '../../redux/thunkCreators';
import { useDispatch, useSelector } from 'react-redux';

function ProfileContainer() {
    const { watchedProfile } = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(setWatchedProfileThunkCreator(id));
    }, []);

    return (
        <>
        {
            watchedProfile !== null ?
            <Profile
                user={watchedProfile}
            /> :
            <Loader />
        }
        </>
    );
}

export default ProfileContainer;