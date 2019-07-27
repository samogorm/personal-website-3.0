import React from 'react'

import {Title} from './../title/Title'
import {themeColours} from './../../constants/themeColours';

import './CallToAction.css'

export const CallToAction = (props) => {
    return (
        <div className="call-to-action">
           <div className="call-to-action-content">
                <Title text={props.title} />
           </div>
        </div>
    )
}