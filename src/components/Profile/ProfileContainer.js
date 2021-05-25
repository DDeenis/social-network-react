import React, { useEffect } from 'react';
import Profile from './Profile';
import { useHistory, useParams } from 'react-router';
import Loader from '../Common/Loader/Loader';
import { setWatchedProfileThunkCreator, uploadAvatarThunkCreator } from '../../redux/thunkCreators';
import { useDispatch, useSelector } from 'react-redux';
import { userIdSelector, watchedProfileSelector } from '../../redux/selectors';

function ProfileContainer() {
    const watchedProfile = useSelector(watchedProfileSelector);
    const userId = useSelector(userIdSelector);
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(setWatchedProfileThunkCreator(id));
    }, [id]);

    const uploadImage = (e) => {
        e.preventDefault();

        if(e.target.files.length > 0) {
            const formData = new FormData()
            formData.append('avatar', e.target.files[0]);
            dispatch(uploadAvatarThunkCreator(formData));
        }
    };

    if(userId === 0) history.push('/login');

    return (
        <>
        {
            watchedProfile !== null ?
            <Profile
                user={watchedProfile}
                userId={userId}
                uploadImage={uploadImage}
            /> :
            <Loader />
        }
        </>
    );
}

export default ProfileContainer;