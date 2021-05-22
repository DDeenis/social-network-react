import * as React from 'react';
import styles from './ProfileContactsForm.module.scss';
import ProfileFieldEntry from './ProfileFieldEntry';

function ProfileContactsForm(props) {
    return (
        <form className={styles.profileContacts} onSubmit={() =>{props.handleSubmit(); props.setEditMode(false);}}>
            {Object.keys(props.user?.contacts).map(k => <ProfileFieldEntry key={k} title={k} content={props.user?.contacts[k]} className={styles.profileEntry} />)}
            <ProfileFieldEntry title={'lookingForAJobDescription'} content={props.user?.lookingForAJobDescription} className={styles.profileEntry} />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default ProfileContactsForm;