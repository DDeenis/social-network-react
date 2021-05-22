import * as React from 'react';
import styles from './ProfileContacts.module.scss';
import ProfileEntry from '../ProfileEntry';

function ProfileContacts({ user }) {
    return (
        <div className={styles.profileContacts}>
            {Object.keys(user.contacts).map(k => <ProfileEntry key={k} title={k} content={user.contacts[k]} className={styles.profileEntry} />)}
        </div>
    );
}

export default ProfileContacts;