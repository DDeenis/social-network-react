import React from "react";
import Chat from "./Chat/Chat";
import DialogContacts from "./DialogContacts/DialogContacts";
import styles from './Dialogs.module.css';

function Dialogs(props) {
    return (
        <div className={styles.dialogsSection}>
            <div className={styles.dialogContacts}>
                <DialogContacts people={props.state.people} />
            </div>

            <div className={styles.separator}></div>

            <Chat messages={props.state.messages} dispatch={props.dispatch} messageInput={props.state.messageInput} />
        </div>
    );
}

export default Dialogs;
