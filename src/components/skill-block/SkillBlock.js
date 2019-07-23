import React from 'react'

import {Subtitle} from './../subtitle/Subtitle'

import './SkillBlock.css'

export const SkillBlock = (props) => {
    return (
        <div className="skill-block">
            <div className="skill-block-icon">
                <i className={props.icon}></i>
            </div>
            <div className="skill-block-title">
                <Subtitle text={props.title} />
            </div>
            <div className="skill-block-subtitle">
                <p> {props.subtitle} </p>
            </div>
        </div>
    )
}