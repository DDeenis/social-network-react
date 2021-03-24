import React from "react";
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={styles.userProfile}>
            <div className={styles.userHeader}></div>
            <section className={styles.userInfo}>
                <ProfileInfo name="Dmitry K." birthday="2 january" city="Minsk" education="BSU" website="https://it-kamasutra.com" />
                <Posts />
            </section>
        </div>
    );
}

export default Profile;