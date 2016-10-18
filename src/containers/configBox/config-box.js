import React from 'react';
import 'styles/components/configBox/config-box.scss';

export default class extends React.Component {
  render() {
    return (
      <div className="configBox__background">
        <div className="container configBox__base">
          <h1 className="configBox__h1">Header Configuration</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}
