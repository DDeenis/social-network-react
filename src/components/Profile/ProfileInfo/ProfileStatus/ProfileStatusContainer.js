import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setUserStatusCreator } from '../../../../redux/actionCreators';
import { getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../../../redux/thunkCreators';
import ProfileStatus from './ProfileStatus';

function ProfileStatusContainer() {
    const { userStatus } = useSelector(state => state.profile);
    const dispath = useDispatch();

    const { id } = useParams();

    const setStatus = (statusText) => dispath(setUserStatusCreator(statusText));

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispath(getUserStatusThunkCreator(id));
    }, [id]);

    const updateStatus = (statusText) => dispath(updateUserStatusThunkCreator(statusText));

    return (
        <ProfileStatus
            statusText={userStatus}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setStatus={setStatus}
            updateStatus={updateStatus}
        />
    );
}

export default ProfileStatusContainer;