import React from 'react';
import styles from './ProfileStatus.module.css';

function ProfileStatus({ statusText, isEditing, setStatus, setIsEditing, updateStatus }) {
    const onBlur = () => {
        updateStatus(statusText);
        setIsEditing(false);
    }

    return (
        <div className={styles.statusBlock}>
            {
                !isEditing ?
                <p className={styles.status} onDoubleClick={() => setIsEditing(true)}>Status: { statusText || 'not specified' }</p> :
                <>
                    <p className={styles.status}>State: </p>
                    <input className={styles.status} value={statusText} autoFocus onChange={(e) => setStatus(e.target.value)} onBlur={() => onBlur()} />
                </>
            }
        </div>
    );
}

export default ProfileStatus;