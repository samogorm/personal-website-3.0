import React from 'react'

import {Subtitle} from './../subtitle/Subtitle'
import {Button} from './../button/Button'

//import {themeColours} from './../../constants/themeColours';

import './ProjectBlock.css'

export const ProjectBlock = (props) => {
    return (
        <div className="project-block">
            <div className="project-block-header">
                <div className="project-icon">
                    {/* <img src={require(props.icon)} alt={`${props.title} Icon`}/> */}
                </div>
                <div className="project-tags">

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
                    secondaryColour="#000"
                    link={props.demoLink}
                />
            </div>
        </div>
    )
}