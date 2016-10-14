import React from 'react';
import { MatchMedia } from 'react-match-media';

export class HeaderMain extends React.Component {
    static defaultProps = {
        name: 'HeaderMain'
    };

    render() {
        return (
            <div className="headerMain">
                <div className="container">
                    <MatchMedia mediaQuery={'(max-width: 767px)'}>
                        <div className="headerMain__items">
                            {this.props.data.MainLeft ? this.props.data.MainLeft.mobile : ''}
                        </div>
                        <div className="headerMain__items">
                            {this.props.data.MainCenter ? this.props.data.MainCenter.mobile : ''}
                        </div>
                        <div className="headerMain__items">
                            {this.props.data.MainRight ? this.props.data.MainRight.mobile : ''}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                        <div className="headerMain__items">
                            {this.props.data.MainLeft ? this.props.data.MainLeft.tablet : ''}
                        </div>
                        <div className="headerMain__items">
                            {this.props.data.MainCenter ? this.props.data.MainCenter.tablet : ''}
                        </div>
                        <div className="headerMain__items">
                            {this.props.data.MainRight ? this.props.data.MainRight.tablet : ''}
                        </div>
                    </MatchMedia>
                    <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                        <div className="headerMain__items">
                            {this.props.data.MainLeft ? this.props.data.MainLeft.desktop : ''}
                        </div>
                        <div className="headerMain__items">
                            {this.props.data.MainCenter ? this.props.data.MainCenter.desktop : ''}
                        </div>
                        <div className="headerMain__items">
                            {this.props.data.MainRight ? this.props.data.MainRight.desktop : ''}
                        </div>
                    </MatchMedia>
                </div>
            </div>
        );
    }
}


