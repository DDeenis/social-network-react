import React from 'react';
import styles from './ProfileInfo.module.css';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';

function ProfileInfo(props) {
    const avatar = props.photos?.small === null ? <AvatarMock size={150} /> : <img src={props.photos?.small} alt="avatar" className={styles.userLogo} />

    return (
        <div className={styles.userData}>
            {
                avatar
            }

            <div className={styles.personalInfo}>
                <h2 className={styles.userName}>{props.name}</h2>
                <p>Date of Birth: {props.birthday ?? 'not specified'}</p>
                <p>City: {props.city ?? 'not specified'}</p>
                <p>Education: {props.education ?? 'not specified'}</p>
                <p>About Me: {props.aboutMe ?? 'not specified'}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;