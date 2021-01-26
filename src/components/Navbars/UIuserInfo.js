import React from 'react';

class UIuserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let user = window.localStorage.getItem("user");
        return <span>{user}</span>
    }
}

export default UIuserInfo;