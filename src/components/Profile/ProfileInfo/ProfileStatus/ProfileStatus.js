import React from 'react';
import styles from './ProfileStatus.module.scss';

function ProfileStatus({ statusText, isEditing, setStatus, setIsEditing, updateStatus, isEditable }) {
    const onBlur = () => {
        if(isEditable) {
            updateStatus(statusText.slice(0, 300));
            setIsEditing(false);
        }
    }

    return (
        <div className={styles.statusBlock}>
            {
                !isEditing ?
                <p className={styles.status} onDoubleClick={() => setIsEditing(true)}>Status: { statusText || 'not specified' }</p> :
                <>
                    <p className={styles.status}>State: </p>
                    <input className={styles.status} value={statusText} autoFocus disabled={!isEditable} onChange={(e) => setStatus(e.target.value)} onBlur={() => onBlur()} />
                </>
            }
        </div>
    );
}

export default ProfileStatus;