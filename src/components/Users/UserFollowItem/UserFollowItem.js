import React from 'react';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';
import styles from './UserFollowItem.module.css';

function UserFollowItem(props) {
    const country = props.location.split(',')[0];
    const city = props.location.split(',')[1];

    return (
        <div className={styles.userInfo}>
            <div className={styles.userFollow}>
                <AvatarMock />
                <button className={styles.followBtn} onClick={props.followUser}>{ props.isFollowing ? 'Unfollow' : 'Follow' }</button>
            </div>

            <div className={styles.userMessage}>
                <div className={styles.userMessageInfo}>
                    <p className={styles.userName}>{props.name}</p>
                    <div className={styles.userLocationWrapper}>
                        <p className={styles.userLocation}>{country}</p>
                        <p className={styles.userLocation}>{city}</p>
                    </div>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    );
}

export default UserFollowItem;