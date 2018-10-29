import * as React from 'react';
import './Home.scss';

export default function (props) {
    return (
        <div className={`personal-home ${!props.ready ? 'personal-home-paused' : ''}`}>
            <span className="personal-home-drip" />
            <span className="personal-home-backdrop"/>
            <div className="personal-home-title">
                <h1>Hi</h1>
            </div>
            <div className="personal-home-subtitle">
                <h1>Name's Collin McLean!</h1>
                <h1>Welcome to my site :)</h1>
            </div>
            <button>Enter</button>
        </div>
    )
}