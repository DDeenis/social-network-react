import * as React from 'react';
import styles from './ProfileInfo.module.scss';
import AvatarMock from '../../Dialogs/AvatarMock/AvatarMock';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
import ProfileEntry from './ProfileEntry';
import ProfileContacts from './ProfileContacts/ProfileContacts';
import ProfileContactsForm from './ProfileContactsForm/ProfileContactsForm';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { updateProfileThunkCreator } from '../../../redux/thunkCreators';

function ProfileInfo({ user, userId, uploadImage }) {
    const avatar = user.photos?.large === null 
        ? <AvatarMock size={150} /> 
        : <img src={user.photos?.large} alt="avatar" className={styles.userLogo} />

    const inputFile = (
        <div className={styles.inputWrapper}>
            <input type='file' className={styles.uploadAvatar} id='avatar_upload' onChange={uploadImage} />
            <label htmlFor='avatar_upload' className={styles.uploadLabel}>
                Загрузить аватар
            </label>
        </div>
    );

    const isOwner = user.userId === userId;
    const [editMode, setEditMode] = React.useState(false);
    const dispatch = useDispatch();

    const updateProfile = (formData) => {
        const profileInfo = {
            userId,
            lookingForAJob: formData.lookingForAJobDescription.length > 0,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            fullName: user.fullName,
            aboutMe: formData.aboutMe || 'none',
            contacts: {
                github: formData.github || 'https://github.com',
                vk: formData.vk || 'https://vk.com',
                facebook: formData.facebook || 'https://facebook.com',
                instagram: formData.instagram || 'https://instagram.com',
                twitter: formData.twitter || 'https://twitter.com',
                website: formData.website || 'https://example.com',
                youtube: formData.youtube || 'https://youtube.com',
                mainLink: formData.mainLink || 'https://example.com'
            }
        }

        dispatch(updateProfileThunkCreator(profileInfo))
    }
    const ProfileContactsFormWrapped = reduxForm({ form: 'contacts' })(ProfileContactsForm);

    return (
        <div className={styles.userData}>
            <div className={styles.avatarContainer}>
                {
                    avatar
                }
                { isOwner && inputFile }
            </div>

            <div className={styles.personalInfo}>
                <h2 className={styles.userName}>{user.fullName}</h2>
                <p>{user.lookingForAJob ? 'Is' : 'Not'} looking for a job</p>
                <ProfileEntry title={'Job description'} content={user.lookingForAJobDescription} />
                <ProfileEntry title={'About Me'} content={user.aboutMe} className={styles.paragraph} />
                <ProfileStatusContainer />
            </div>

            <div onClick={() => setEditMode(true)}>
                {
                    editMode && isOwner
                    ? <ProfileContactsFormWrapped user={user} onSubmit={updateProfile} setEditMode={setEditMode} />
                    : <ProfileContacts user={user} />
                }
            </div>
        </div>
    );
}

export default ProfileInfo;