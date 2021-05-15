import * as React from 'react';
import styles from './Input.module.scss';

function Input({ input, meta, ...other }) {
    const hasError = meta.visited && meta.invalid;

    return (
        <div className={hasError ? `${styles.error} ${styles.errorBlock}` : styles.errorBlock}>
            <input {...input} {...other} />
            {
                hasError && <span className={styles.errorMessage}>{meta.error}</span>
            }
        </div>
    );
}

export default Input;