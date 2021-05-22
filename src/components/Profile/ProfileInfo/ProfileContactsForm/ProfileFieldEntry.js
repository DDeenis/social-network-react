import * as React from 'react';
import { Field } from 'redux-form';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ProfileFieldEntry({ title, content, className }) {
    return (
        <div className={className}>
            <b>{capitalizeFirstLetter(title)}</b>: <Field name={title} component={'input'} defaultValue={content ?? 'not specified'}  />
        </div>
    );
}

export default ProfileFieldEntry;