import React from "react";
import Chat from "./Chat/Chat";
import DialogContacts from "./DialogContacts/DialogContacts";
import styles from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={styles.dialogsSection}>
            <div className={styles.dialogContacts}>
                <DialogContacts />
            </div>

            <div className={styles.separator}></div>

            <Chat />
        </div>
    );
}

export default Dialogs;
