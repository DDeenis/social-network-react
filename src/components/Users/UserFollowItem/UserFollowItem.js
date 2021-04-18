import React from 'react';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';
import styles from './UserFollowItem.module.css';

function UserFollowItem(props) {
    const changeFollowState = props.isFollowing ? props.unfollowUser : props.followUser;

    return (
        <div className={styles.userInfo}>
            <div className={styles.userFollow}>
                <AvatarMock />
                <button className={`btn ${styles.followBtn}`} onClick={() => changeFollowState(props.id)}>{ props.isFollowing ? 'Unfollow' : 'Follow' }</button>
            </div>

            <div className={styles.userMessage}>
                <div className={styles.userMessageInfo}>
                    <div className={styles.messageInfo}>
                        <p className={styles.userName}>{props.name}</p>
                        <p className={styles.userMessageText}>{props.message}</p>
                    </div>

                    <div className={styles.userLocationWrapper}>
                        <p className={styles.userLocation}>{props.location.country},</p>
                        <p className={styles.userLocation}>{props.location.city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserFollowItem;