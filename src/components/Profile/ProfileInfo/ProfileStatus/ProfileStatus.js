import React from 'react';
import styles from './ProfileStatus.module.css';

function ProfileStatus({ statusText, isEditing, setStatus, setIsEditing }) {
    return (
        <div className={styles.statusBlock}>
            {
                !isEditing ?
                <p className={styles.status} onDoubleClick={() => setIsEditing(true)}>Status: { statusText ?? 'not specified' }</p> :
                <>
                    <p className={styles.status}>State: </p>
                    <input className={styles.status} value={statusText} onChange={(e) => setStatus(e.target.value)} onBlur={() => setIsEditing(false)} />
                </>
            }
        </div>
    );
}

export default ProfileStatus;