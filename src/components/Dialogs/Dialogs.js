import React from "react";
import ChatContainer from "./Chat/ChatContainer";
import DialogContacts from "./DialogContacts/DialogContacts";
import styles from './Dialogs.module.css';

function Dialogs(props) {
    return (
        <div className={styles.dialogsSection}>
            <div className={styles.dialogContacts}>
                <DialogContacts people={props.state.people} />
            </div>

            <div className={styles.separator}></div>

            <ChatContainer state={props.state} dispatch={props.dispatch} />
        </div>
    );
}

export default Dialogs;
