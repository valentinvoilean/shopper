import React from 'react';

import {HeaderTop, HeaderBottom, HeaderMain} from './';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.data = {
            MyAccount: {
                mobile: {position: 'TopLeft', order: 1},
                tablet: {position: 'MainCenter', order: 0},
                desktop: {position: 'BottomRight', order: 0}
            },
            Wishlist: {
                mobile: {position: 'TopLeft', order: 0},
                tablet: {position: 'TopLeft', order: 0},
                desktop: {position: 'TopRight', order: 1}
            }
        };
    }

    componentDidMount() {
        console.warn('mounted');
    }

    _checkSide(child) {
        const data = this.data;
        const childName = child.props.name;
        const mediaQueries = ['mobile', 'tablet', 'desktop'];

        mediaQueries.map((mq) => {
            let childPosition = data[childName][mq].position;
            let childOrder = data[childName][mq].order;

            this.HeaderData = this.HeaderData || {};
            this.HeaderData[childPosition] = this.HeaderData[childPosition] || {};
            this.HeaderData[childPosition][mq] = this.HeaderData[childPosition][mq] || [];
            this.HeaderData[childPosition][mq][childOrder] = child;
        });
    }

    _sortCompoents() {
        const children = this.props.children;

        if (Array.isArray(children)) {
            children.map(this._checkSide.bind(this));
        }
        else {
            this._checkSide(children);
        }
    }

    render() {
        this._sortCompoents();
        return (
            <div className="header">
                <HeaderTop data={this.HeaderData}/>
                <HeaderMain data={this.HeaderData}/>
                <HeaderBottom data={this.HeaderData}/>
            </div>
        );
    }
}
