import React from "react";
import styles from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

function Profile({ user }) {
    return (
        <div className={styles.userProfile}>
            <div className={styles.userHeader}></div>
            <section className={styles.userInfo}>
                <ProfileInfo user={user} />
                <PostsContainer />
            </section>
        </div>
    );
}

export default Profile;