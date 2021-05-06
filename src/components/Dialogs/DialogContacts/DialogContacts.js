import React from 'react'
import DialogContact from '../DialogContact/DialogContact'
import styles from './DialogContacts.module.scss'

function DialogContacts(props) {
    return (
        <>
            <span className={styles.title}>DIALOGS</span>
            <ul className={styles.dialogContacts}>
                { props.people.map((p, i) => <DialogContact contactName={p} key={p} id={i} />) }
            </ul>
        </>
    );
}

export default DialogContacts;