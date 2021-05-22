import * as React from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ProfileEntry({ title, content, className }) {
    return (
        <div className={className}>
            <b>{capitalizeFirstLetter(title)}</b>: {content ?? 'not specified'}
        </div>
    );
}

export default ProfileEntry;