import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { userIdSelector, userStatusSelector } from '../../../../redux/selectors';
import { getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../../../redux/thunkCreators';
import ProfileStatus from './ProfileStatus';

function ProfileStatusContainer() {
    const userStatus = useSelector(userStatusSelector);
    const myId = useSelector(userIdSelector);
    const dispath = useDispatch();

    const { id } = useParams();
    const isEditable = parseInt(id) === myId;

    const [status, setStatus] = useState(userStatus);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
            setStatus(userStatus);
    }, [userStatus]);

    useEffect(() => {
        dispath(getUserStatusThunkCreator(id));
    }, [id]);

    const updateStatus = (statusText) => dispath(updateUserStatusThunkCreator(statusText));

    return (
        <ProfileStatus
            statusText={status}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setStatus={setStatus}
            updateStatus={updateStatus}
            isEditable={isEditable}
        />
    );
}

export default ProfileStatusContainer;