import React, { useState } from 'react';
import ProfileStatus from './ProfileStatus';

function ProfileStatusContainer() {
    const [status, setStatus] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <ProfileStatus
            statusText={status}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setStatus={setStatus}
        />
    );
}

export default ProfileStatusContainer;