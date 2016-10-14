import React from 'react';

export class MyAccount extends React.Component {
    static defaultProps = {
        name: 'MyAccount'
    };

    render() {
        return (
            <div className="myAccount"> My Account </div>
        );
    }
}
