import * as React from 'react';
import styles from './Textarea.module.scss';

function Textarea({ input, meta, maxLength, ...other }) {
    const hasError = meta.visited && meta.invalid;

    return (
        <div className={hasError ? `${styles.error} ${styles.errorBlock}` : styles.errorBlock}>
            <textarea {...input} {...other} />
            <span className={styles.countSymbols}>{input.value.length}/{maxLength}</span>
            {
                hasError && <span className={styles.errorMessage}>{meta.error}</span>
            }
        </div>
    );
}

export default Textarea;