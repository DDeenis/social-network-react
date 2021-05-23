import * as React from 'react';
import styles from './ProfileContactsForm.module.scss';
import ProfileFieldEntry from './ProfileFieldEntry';

function ProfileContactsForm(props) {
    const formFields = Object.keys(props.user?.contacts).map(k => <ProfileFieldEntry key={k} title={k} content={props.user?.contacts[k]} className={styles.profileEntry} />);

    return (
        <form className={styles.profileContacts} onSubmit={() =>{props.handleSubmit(); props.setEditMode(false);}}>
            {
                formFields
            }
            <ProfileFieldEntry title={'lookingForAJobDescription'} content={props.user?.lookingForAJobDescription} className={styles.profileEntry} component='textarea' />
            <ProfileFieldEntry title={'aboutMe'} content={props.user?.aboutMe} className={styles.profileEntry} component='textarea' />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default ProfileContactsForm;