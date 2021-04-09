import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
    return (
        <div className={styles.userProfile}>
            <div className={styles.userHeader}></div>
            <section className={styles.userInfo}>
                <ProfileInfo name="Dmitry K." birthday="2 january" city="Minsk" education="BSU" website="https://it-kamasutra.com" />
                <PostsContainer state={props.state} dispatch={props.dispatch} />
            </section>
        </div>
    );
}

export default Profile;