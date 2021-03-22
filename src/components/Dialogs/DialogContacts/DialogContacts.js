import React from 'react'
import DialogContact from '../DialogContact/DialogContact'
import styles from './DialogContacts.module.css'

function DialogContacts() {
    return (
        <>
            <span className={styles.title}>DIALOGS</span>
            <ul className={styles.dialogContacts}>
                <DialogContact contactName="Andrew" />
                <DialogContact contactName="Dmitry" active />
                <DialogContact contactName="Sasha" />
                <DialogContact contactName="Sveta" />
                <DialogContact contactName="Valera" />
                <DialogContact contactName="Viktor" />
                <DialogContact contactName="This is a list item" />
                <DialogContact contactName="Another list item" />
                <DialogContact contactName="This is a list item" />
                <DialogContact contactName="Yup, another list item" />
            </ul>
        </>
    );
}

export default DialogContacts;