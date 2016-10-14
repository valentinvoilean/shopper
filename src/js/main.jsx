import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './header';
import { Footer } from './footer';
import { MyAccount } from './my-account';
import { Wishlist } from './wishlist';

ReactDOM.render(
    <Header>
        <MyAccount/>
        <Wishlist/>
    </Header>
    , document.getElementsByTagName('header')[0]);

ReactDOM.render(<Footer/>, document.getElementsByTagName('footer')[0]);
