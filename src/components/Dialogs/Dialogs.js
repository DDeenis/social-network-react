import React from "react";
import ChatContainer from "./Chat/ChatContainer";
import DialogContactsContainer from "./DialogContacts/DialogContactsContainer";
import styles from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={styles.dialogsSection}>
            <div className={styles.dialogContacts}>
                <DialogContactsContainer />
            </div>

            <div className={styles.separator}></div>

            <ChatContainer />
        </div>
    );
}

export default Dialogs;
