import React from 'react';
import styles from 'styles/components/configBox/config-box.scss';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.base}>
          <h1 className={styles.h1}>Header Configuration</h1>
        </div>
      </div>
    );
  }
}
