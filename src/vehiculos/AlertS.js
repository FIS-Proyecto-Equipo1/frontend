import React from 'react';

function Alert({message, onClose}) {
    if (message == null) {
        return null;
    }

    return (
        <div className="alert alert-success alert-dismissable">
            <strong>Success!</strong> {message}
            <button data-testid="close" type="button" className="close" onClick={() => onClose()}>
                <span>&times;</span>
            </button>
        </div>
    );
}

export default Alert;