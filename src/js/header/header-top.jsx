import React from 'react';
import {MatchMedia} from 'react-match-media';

export class HeaderTop extends React.Component {
    static defaultProps = {
        name: 'HeaderTop'
    };

    render() {
        console.warn(this);

        return (
            <div className="headerTop">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerTop__items">
                            {this.props.data.TopLeft ? this.props.data.TopLeft.mobile : ''}
                        </div>
                        <div className="headerTop__items">
                            {this.props.data.TopCenter ? this.props.data.TopCenter.mobile : ''}
                        </div>
                        <div className="headerTop__items">
                            {this.props.data.TopRight ? this.props.data.TopRight.mobile : ''}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerTop__items">
                            {this.props.data.TopLeft ? this.props.data.TopLeft.tablet : ''}
                        </div>
                        <div className="headerTop__items">
                            {this.props.data.TopCenter ? this.props.data.TopCenter.tablet : ''}
                        </div>
                        <div className="headerTop__items">
                            {this.props.data.TopRight ? this.props.data.TopRight.tablet : ''}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerTop__items">
                            {this.props.data.TopLeft ? this.props.data.TopLeft.desktop : ''}
                        </div>
                        <div className="headerTop__items">
                            {this.props.data.TopCenter ? this.props.data.TopCenter.desktop : ''}
                        </div>
                        <div className="headerTop__items">
                            {this.props.data.TopRight ? this.props.data.TopRight.desktop : ''}
                        </div>
                    </MatchMedia>
                </div>
            </div>
        );
    }
}


