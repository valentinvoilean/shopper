import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <header role="banner" className="mainHeader header">test</header>
        <main role="main">test</main>
        <footer role="contentinfo">test</footer>
      </div>
      );
  }
}
console.log('bad');

ReactDOM.render(<Hello/>, document.body);
