import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogContact.module.css'

function DialogContact({ contactName, active, id }) {
    return (
        <li className={active ? `${styles.dialogContact} ${styles.dialogActive}` : styles.dialogContact}>
            <NavLink to={`?id=${id}`} className={styles.link}>{contactName}</NavLink>
        </li>
    );
}

export default DialogContact;