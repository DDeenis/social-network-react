import React from 'react'
import AvatarMock from '../AvatarMock/AvatarMock';
import styles from './ChatMessage.module.scss'

function ChatMessage({ userName, content }) {
    return (
        <div className={styles.message}>
            <div className={styles.userInfo}>
                <AvatarMock />
                <p className={styles.userName}>{userName}</p>
            </div>

            <div className={styles.messageBlock}>
                <p className={styles.messageContent}>{content}</p>
            </div>
        </div>
    );
}

export default ChatMessage;