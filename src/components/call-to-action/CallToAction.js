import React from 'react'

import {Title} from './../title/Title'
import {Button} from './../button/Button'
import {themeColours} from './../../constants/themeColours';

import './CallToAction.css'

export const CallToAction = (props) => {
    return (
        <div className="call-to-action">
           <div className="call-to-action-content">
                <Title text={props.title} />
                <Button
                    label={props.buttonLabel}
                    icon={props.buttonIcon}
                    type="outline"
                    primaryColour="transparent"
                    secondaryColour={themeColours[4].hex}
                    link={null}
                />
           </div>
        </div>
    )
}