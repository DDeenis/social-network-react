import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

function Profile({ user }) {
    return (
        <div className={styles.userProfile}>
            <div className={styles.userHeader}></div>
            <section className={styles.userInfo}>
                <ProfileInfo name={user.fullName} aboutMe={user.aboutMe} photos={user.photos} />
                <PostsContainer />
            </section>
        </div>
    );
}

export default Profile;