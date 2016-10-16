import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="configBoxContainer">
        {this.props.children}
      </div>
    );
  }
}
