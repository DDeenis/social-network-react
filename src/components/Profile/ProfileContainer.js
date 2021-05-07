import React, { useEffect } from 'react';
import Profile from './Profile';
import { useHistory, useParams } from 'react-router';
import Loader from '../Common/Loader/Loader';
import { setWatchedProfileThunkCreator } from '../../redux/thunkCreators';
import { useDispatch, useSelector } from 'react-redux';

function ProfileContainer() {
    const { watchedProfile } = useSelector(state => state.profile);
    const { userId } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(setWatchedProfileThunkCreator(id));
    }, []);

    if(userId === 0) history.push('/login');

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