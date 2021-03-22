import React from 'react'
import styles from './DialogContact.module.css'

function DialogContact({ contactName, active }) {
    return (
        <li className={active ? `${styles.dialogContact} ${styles.dialogActive}` : styles.dialogContact}>{contactName}</li>
    );
}

export default DialogContact;