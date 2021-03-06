import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';
import Loader from '../../Common/Loader/Loader';
import LoaderCircle from '../../Common/Loader/LoaderCircle';
import styles from './UserFollowItem.module.scss';
import classNames from 'classnames';

function UserFollowItem({ user, followUser, unfollowUser, isFetching, isLoading }) {
    const changeFollowState = user.followed ? unfollowUser : followUser;
    const userPhoto = user.photos.small !== null ? <img src={user.photos.small} alt="user avatar" /> : <AvatarMock />

    return (
        <div className={styles.userInfo}>
            <div className={styles.userFollow}>
                <NavLink to={`/profile/${user.id}`}>
                {
                    isFetching ?
                        <LoaderCircle /> :
                        userPhoto
                }
                </NavLink>
                <button className={classNames('btn', styles.followBtn)} onClick={() => changeFollowState(user.id)} disabled={isLoading}>
                    {user.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>

            <div className={styles.userMessage}>
                <div className={styles.userMessageInfo}>
                    <div className={styles.messageInfo}>
                        {
                            isFetching ?
                            <Loader /> :
                            <>
                                <p className={styles.userName}>{user.name}</p>
                                <p className={styles.userMessageText}>{user.message ?? 'Not specified'}</p>
                            </>
                        }
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