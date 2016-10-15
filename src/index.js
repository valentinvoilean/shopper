import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from 'containers/header';
import { Footer } from 'containers/footer';
import { MyAccount } from 'components/my-account';
import { Wishlist } from 'components/wishlist';

ReactDOM.render(
    <Header>
        <MyAccount/>
        <Wishlist/>
    </Header>
    , document.getElementsByTagName('header')[0]);

ReactDOM.render(<Footer/>, document.getElementsByTagName('footer')[0]);
