import React from 'react'
import styles from './ChatMessage.module.css'
// import Smile from '../../../assets/images/smile.png'

function ChatMessage({ userName, content }) {
    return (
        <div className={styles.message}>
            <div className={styles.userInfo}>
                <div className={styles.userAvatar}></div>
                <p className={styles.userName}>{userName}</p>
            </div>

            <div className={styles.messageBlock}>
                <p className={styles.messageContent}>{content}</p>
            </div>
        </div>
    );
}

export default ChatMessage;