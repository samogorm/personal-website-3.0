import React from 'react'

import './Button.css'

const _renderIcon = (icon) => {
    if (icon !== null) {
        return (
            <i className={icon}></i>
        )
    }
}

export const Button = (props) => {
    return (
        <a href={props.link} className={`button button-${props.type}`} 
            style={{
                background: props.primaryColour,  
                color: props.secondaryColour
            }}>
            {_renderIcon(props.icon)}
            {props.label}
        </a>
    )
}