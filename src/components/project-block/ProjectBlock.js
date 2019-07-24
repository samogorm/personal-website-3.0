import React from 'react'

import { Subtitle } from './../subtitle/Subtitle'
import { Button } from './../button/Button'
import { Tag } from '../tag/Tag'

//import {themeColours} from './../../constants/themeColours';

import './ProjectBlock.css'

export const ProjectBlock = (props) => {
    return (
        <div className="project-block">
            <div className="project-block-header">
                <div className="project-icon">
                    <img src={props.icon} alt={`${props.title} Icon`}/>
                </div>
                <div className="project-tags">
                    {props.tags.map((tag, index) => <Tag key={index} text={tag} /> )}
                </div>
            </div>
            <div className="project-block-title">
                <Subtitle text={props.title} />
            </div>
            <div className="project-block-description">
                <p> {props.description} </p>
            </div>
            <div className="project-block-footer">
                <Button
                    label="View source"
                    icon={null}
                    type="outline"
                    primaryColour="transparent"
                    secondaryColour=""
                    link={props.sourceLink}
                />
                <Button
                    label="Visit site"
                    icon={null}
                    type="fill"
                    primaryColour=""
                    secondaryColour="#fff"
                    link={props.demoLink}
                />
            </div>
        </div>
    )
}