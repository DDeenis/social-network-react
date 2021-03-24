import React from 'react'
import styles from './ProfileInfo.module.css'
import UserLogo from '../../../assets/images/user-logo.jpeg';

function ProfileInfo(props) {
    return (
        <div className={styles.userData}>
            <img src={UserLogo} alt="user logo" className={styles.userLogo} />
            <div className={styles.personalInfo}>
                <h2 className={styles.userName}>{props.name}</h2>
                <p>Date of Birth: {props.birthday}</p>
                <p>City: {props.city}</p>
                <p>Education: {props.education} {'\''}11</p>
                <p>Web Site: <a href="#" className={styles.activeLink}>{props.website}</a></p>
            </div>
        </div>
    );
}

export default ProfileInfo;