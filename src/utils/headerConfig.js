import React from 'react';
import ReactDOM from 'react-dom';
import ConfigBoxContainer from 'containers/configBox/config-box';

import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<ConfigBoxContainer>
  <button type='button' className='btn btn-primary'>Button Bootstrap</button>
</ConfigBoxContainer>, document.getElementById('configContainer'));
