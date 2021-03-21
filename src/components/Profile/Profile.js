import React from "react";
import styles from './Profile.module.css';
import UserLogo from '../../assets/images/user-logo.jpeg';
import Posts from "./Posts/Posts";

function Profile() {
    return (
        <div className={styles.userProfile}>
            <div className={styles.userHeader}></div>
            <section className={styles.userInfo}>
                <div className={styles.userData}>
                    <img src={ UserLogo } alt="user logo" className={styles.userLogo} />

                    <div className={styles.personalInfo}>
                        <h2 className={styles.userName}>Dmitry K.</h2>
                        <p>Date of Birth: 2 january</p>
                        <p>City: Minsk</p>
                        <p>Education: BSU {'\''}11</p>
                        <p>Web Site: https://it-kamasutra.com</p>
                    </div>
                </div>

                <Posts />
            </section>
        </div>
    );
}

export default Profile;