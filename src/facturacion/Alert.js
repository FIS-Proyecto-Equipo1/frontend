import React from 'react';

function Alert({message, onClose}) {
    if (message == null){
        return null;
    }
    if (message[0] == '!'){
        message = message.substring(1);
        return (
            <div className="alert alert-success alert-dimissable">
                {message}
                <button type="button" className="close" onClick={() => onClose()}>
                    <span>&times;</span>
                </button>
            </div>
        );
    }

    return (
        <div className="alert alert-warning alert-dimissable">
            <strong>Error!</strong> {message}
            <button type="button" className="close" onClick={() => onClose()}>
                <span>&times;</span>
            </button>
        </div>
    );
}

export default Alert;