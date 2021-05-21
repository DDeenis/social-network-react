import * as React from 'react';
import styles from './ProfileInfo.module.scss';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';

function ProfileInfo({ user, userId, uploadImage }) {
    const avatar = user.photos?.large === null 
        ? <AvatarMock size={150} /> 
        : <img src={user.photos?.large} alt="avatar" className={styles.userLogo} />

    const inputFile = (
        <div className={styles.inputWrapper}>
            <input type='file' className={styles.uploadAvatar} id='avatar_upload' onChange={uploadImage} />
            <label htmlFor='avatar_upload' className={styles.uploadLabel}>
                Загрузить аватар
            </label>
        </div>
    );

    return (
        <div className={styles.userData}>
            <div className={styles.avatarContainer}>
                {
                    avatar
                }
                { user.userId === userId && inputFile }
            </div>

            <div className={styles.personalInfo}>
                <h2 className={styles.userName}>{user.fullName}</h2>
                <p>{user.lookingForAJob ? 'Is' : 'Not'} looking for a job</p>
                <p>Job description: {user.lookingForAJobDescription ?? 'not specified'}</p>
                <p>Facebook: {user.contacts.facebook ?? 'not specified'}</p>
                <p>About Me: {user.aboutMe ?? 'not specified'}</p>
                <ProfileStatusContainer />
            </div>
        </div>
    );
}

export default ProfileInfo;