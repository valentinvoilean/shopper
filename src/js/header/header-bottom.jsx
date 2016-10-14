import React from 'react';
import { MatchMedia } from 'react-match-media';

export class HeaderBottom extends React.Component {

    render() {
        return (
            <div className="headerBottom">
                <div className="topInfo">
                    <div className="container">
                        <MatchMedia mediaQuery={'(max-width: 767px)'}>
                            <div className="headerBottom__items">
                                {this.props.data.BottomLeft ? this.props.data.BottomLeft.mobile : ''}
                            </div>
                            <div className="headerBottom__items">
                                {this.props.data.BottomCenter ? this.props.data.BottomCenter.mobile : ''}
                            </div>
                            <div className="headerBottom__items">
                                {this.props.data.BottomRight ? this.props.data.BottomRight.mobile : ''}
                            </div>
                        </MatchMedia>
                        <MatchMedia mediaQuery={'(min-width: 768px) and (max-width: 1023px)'}>
                            <div className="headerBottom__items">
                                {this.props.data.BottomLeft ? this.props.data.BottomLeft.tablet : ''}
                            </div>
                            <div className="headerBottom__items">
                                {this.props.data.BottomCenter ? this.props.data.BottomCenter.tablet : ''}
                            </div>
                            <div className="headerBottom__items">
                                {this.props.data.BottomRight ? this.props.data.BottomRight.tablet : ''}
                            </div>
                        </MatchMedia>
                        <MatchMedia mediaQuery={'(min-width: 1024px)'}>
                            <div className="headerBottom__items">
                                {this.props.data.BottomLeft ? this.props.data.BottomLeft.desktop : ''}
                            </div>
                            <div className="headerBottom__items">
                                {this.props.data.BottomCenter ? this.props.data.BottomCenter.desktop : ''}
                            </div>
                            <div className="headerBottom__items">
                                {this.props.data.BottomRight ? this.props.data.BottomRight.desktop : ''}
                            </div>
                        </MatchMedia>
                    </div>
                </div>
            </div>
        );
    }
}


