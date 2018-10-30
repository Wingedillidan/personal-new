import * as React from 'react';
import './Intro.scss';
import Avatar from '../assets/images/avatar.png';

export default function (props) {
    return (
        <div className={`personal-intro-container ${!props.ready ? 'personal-intro-paused' : ''}`}>
            <div className="personal-intro">
                <span className="personal-intro-drip" />
                <span className="personal-intro-backdrop"/>
                <div className="personal-intro-greeting">
                    <h1>Hi</h1>
                </div>
                <h1 className="personal-intro-welcome">welcome, friend!</h1>
                <h1 className="personal-intro-name">COLLIN MCLEAN</h1>
                <h3 className="personal-intro-tagline">Your friendly neighborhood support!</h3>
                {/* <button>Enter</button> */}
            </div>
            <img src={Avatar} />
        </div>
    )
}