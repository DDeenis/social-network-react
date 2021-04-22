import React from 'react';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';
import styles from './UserFollowItem.module.css';

function UserFollowItem({ user, followUser, unfollowUser }) {
    const changeFollowState = user.followed ? unfollowUser : followUser;
    const userPhoto = user.photos.small !== null ? <img src={user.photos.small} alt="user avatar" /> : <AvatarMock />

    return (
        <div className={styles.userInfo}>
            <div className={styles.userFollow}>
                { userPhoto }
                <button className={`btn ${styles.followBtn}`} onClick={() => changeFollowState(user.id)}>{ user.followed ? 'Unfollow' : 'Follow' }</button>
            </div>

            <div className={styles.userMessage}>
                <div className={styles.userMessageInfo}>
                    <div className={styles.messageInfo}>
                        <p className={styles.userName}>{user.name}</p>
                        <p className={styles.userMessageText}>{user.message ?? 'Not specified'}</p>
                    </div>

                    <div className={styles.userLocationWrapper}>
                        <p className={styles.userLocation}>{user.location?.country ?? 'Earth'},</p>
                        <p className={styles.userLocation}>{user.location?.city ?? 'Earth'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserFollowItem;