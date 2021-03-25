import React from 'react'
import DialogContact from '../DialogContact/DialogContact'
import styles from './DialogContacts.module.css'
// !!!
import { people } from "../../../data";

function DialogContacts() {
    return (
        <>
            <span className={styles.title}>DIALOGS</span>
            <ul className={styles.dialogContacts}>
                {people.map((p, i) => <DialogContact contactName={p} key={p} id={i} />)}
            </ul>
        </>
    );
}

export default DialogContacts;