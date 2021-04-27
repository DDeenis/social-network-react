import React from 'react';
import styles from './ProfileInfo.module.css';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';

function ProfileInfo({ user }) {
    const avatar = user.photos?.large === null ? <AvatarMock size={150} /> : <img src={user.photos?.large} alt="avatar" className={styles.userLogo} />

    return (
        <div className={styles.userData}>
            {
                avatar
            }

            <div className={styles.personalInfo}>
                <h2 className={styles.userName}>{user.fullName}</h2>
                <p>{user.lookingForAJob ? 'Is' : 'Not'} looking for a job</p>
                <p>Job description: {user.lookingForAJobDescription ?? 'not specified'}</p>
                <p>Facebook: {user.contacts.facebook ?? 'not specified'}</p>
                <p>About Me: {user.aboutMe ?? 'not specified'}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;